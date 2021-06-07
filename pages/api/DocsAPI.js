import { google } from 'googleapis';
import marked from 'marked';


export async function getRichPageText(sheetName) {
  const scopes = ['https://www.googleapis.com/auth/documents.readonly'];
  const jwt = new google.auth.GoogleAuth({
    scopes
  }).fromJSON(buildAuthJson())

  const docs = google.docs({ version: 'v1', auth: jwt });

  var res = await docs.documents.get({
    documentId: process.env.DOCUMENT_ID
  })
console.log('api result:')
  console.log(JSON.stringify(res.data));

  return res.data;
}

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