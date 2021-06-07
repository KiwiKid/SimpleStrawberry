import Head from 'next/head'
import Grid from '@material-ui/core/Grid';

import { getRichPageText } from './api/DocsAPI'

export default function Docs({ text, res }) {

  return (
    <div>
      {res}
    </div>
  )
}


export async function getStaticProps(context) {
    const res = await processDocs(await getRichPageText("Text")); 

    //const textBlocks = document.body.content.filter((c) => !!c.paragraph).map((el) => el.textRun)
    //console.log(text)
    
    //console.log(text.context)
    //const images = await getPageImages("Images");
   //</div>const buildTime = new Date().toISOString().substring(0, 19).replace('T', ' ')
    const text = "helo"
    return {
      props: {
        text,
        res
        //images,
       // buildTime
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1 // In seconds
    };
  }


  async function processDocs(page){
      return page.body.content
        .filter((c) => c.paragraph)
        .map((c) => c.paragraph.elements.map((e) => e.textRun.content));
  }