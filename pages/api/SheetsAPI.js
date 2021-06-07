import { google } from 'googleapis';
import marked from 'marked';


//const renderer = new marked.Renderer();

/*renderer.link = (title) => //href, text
  `<a target="_blank" rel="noopener noreferrer" href="" title="${
    title || ''
  }"></a>`;
*/


/*
Import from google docs

export async function getRichPageText(sheetName) {
  try {
    const scopes = ['https://www.googleapis.com/auth/documents.readonly'];
    const jwt = new google.auth.GoogleAuth({
      scopes
    }).fromJSON(buildAuthJson())

    const docs = docs({ version: 'v1', auth: jwt });
    console.log(docs)

    const res = await docs.documents.values.get({
      documentId: process.env.SPREADSHEET_ID
    })
    console.log(docs);

//  const rows = response.data.values;
//  if (rows.length) {
//    return rows.slice(1, rows.length).map((row) => ({
//      group: row[0] || '1',
//      type: row[1] || '',
//      title: row[2] || null,
//      text: row[3] || null, 
//      //fancyText: row[4] || null // marked(row[1].replace(/\n/g, '<br />'), { renderer }),
//    }));
//  }
  } catch (err) {
    console.log(err);
  }

  return [];
}
*/

export async function getPageText(sheetName) {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new google.auth.GoogleAuth({      
    scopes
  }).fromJSON(buildAuthJson())

  const sheets = google.sheets({ version: 'v4', auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: sheetName,
  });
    //var response = await getGoogleSheet(sheetName);
    const rows = response.data.values;
    if (rows.length) {
      console.log('Page Text:'+rows.length);
      return rows.slice(1, rows.length).map((row) => ({
        group: row[0] || '1',
        type: row[1] || '',
        title: row[2] || null,
        text: row[3] || null, 
        //fancyText: row[4] || null // marked(row[1].replace(/\n/g, '<br />'), { renderer }),
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}


export async function getPageImages(sheetName) {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new google.auth.GoogleAuth({      
    scopes
  }).fromJSON(buildAuthJson())

  const sheets = google.sheets({ version: 'v4', auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: sheetName,
  });
    //var response = await getGoogleSheet(sheetName);
    const rows = response.data.values;
    if (rows.length) {
      console.log('Image Count:'+rows.length);
      return rows.slice(1, rows.length).map((row) => ({
        group: row[0] || '1',
        path: row[1] || null,
        title: row[2] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}

/*async function getGoogleSheet(sheet){
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new google.auth.GoogleAuth({      
    scopes
  }).fromJSON(buildAuthJson())

  const sheets = google.sheets({ version: 'v4', auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: sheet,
  });

  return response;
}*/


function buildAuthJson(){
  var authJson = {
    type: "service_account",
    project_id: 'simplestrawberry',
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  }
  authJson['private_key_id'] = process.env.GOOGLE_PRIVATE_KEY_ID;
  authJson['private_key'] = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
  authJson['client_email'] = process.env.GOOGLE_CLIENT_EMAIL;
  authJson['client_id'] = process.env.GOOGLE_CLIENT_ID;
  authJson['client_x509_cert_url'] = process.env.GOOGLE_CLIENT_X509_CERT_URL;

  return authJson;
}