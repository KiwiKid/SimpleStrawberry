import { google } from 'googleapis';
//import marked from 'marked';


//const renderer = new marked.Renderer();

/*renderer.link = (title) => //href, text
  `<a target="_blank" rel="noopener noreferrer" href="" title="${
    title || ''
  }"></a>`;
*/
export async function getPageText(sheetName) {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.GoogleAuth({
      keyFile: "./simplestrawberry-2cdd3bedfdd6.json",
      scopes
    });

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheetName,
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.slice(1, rows.length).map((row) => ({
        group: row[0] || '1',
        type: row[1] || '',
        title: row[2] || null,
        text: row[3] || null // marked(row[1].replace(/\n/g, '<br />'), { renderer }),
        //description:
       // href: row[2] || null,
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
      keyFile: "./simplestrawberry-2cdd3bedfdd6.json",
      scopes
    });

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: sheetName,
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.slice(1, rows.length).map((row) => ({
        group: row[0] || '1',
        path: row[1] || null,
        title: row[2] || null,
        //description: marked(row[1].replace(/\n/g, '<br />'), { renderer }),
       // href: row[2] || null,
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}