
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import ImageGrid from '../components/imageGrid.js'


//import textMap2 from '../public/textMap.js'
//import imagesMap from '../public/imageMap.js'
import { getPageImages, getPageText } from './api/SheetsAPI';

import Carousel from './carousel.js'
import TextGrid from '../components/textGrid.js';
import TextList from '../components/textList.js';
import TextBlock from '../components/textBlock.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontSize: '1.3rem',
    fontFamily: "Roboto",
    "& .MuiPaper-root": {
      border: "none"
    },
    
  },
  
  highlightlist: {
    '& li':{
      listStyleType: 'none',
      textAlign: 'center',
      fontSize: '24px'
    }, 
  }, 
  footer: {
    textAlign: 'center',
    fontSize: '0.5em',
    color: 'grey'
  },
    container:{
      display: "flex",
      width: '100%'
    },
    
    paper: {
      boxShadow: 'none',
        maxWidth: '100%',
        maxHeight: '100%',
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    paper2: {
      height: 'auto',
      width: 'auto',
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      elevation: 8
    }
  }));

  export default function Index({ images, text, buildTime }) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Berrfields - Your next home?</title>
        <meta name="description" content="A home for sale in the" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.container}>
        <Grid container spacing={0} justify="flex-start">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={0} style={{height: '100%'}}>
                <img max-height="400" width="100%" src={'./Chimney-Processed.jpg'}  />
            </Paper>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={0} align="center" ><h1>Berryfields</h1></Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={0} align="center" >
              <h2>Dream Sustainable Lifestyle Property</h2>
              <h3>Register your interest with Sandra today:</h3>
              <h3><a href="mailto:southernwoman2@hotmail.com">southernwoman2@hotmail.com</a></h3> 
              <p>This lifestyle property provides the perfect balance between country living and city life. Tranquil and quiet but only 12 minutes to the city.</p> 	
            </Paper>
          </Grid>
          <TextGrid text={text.filter(t => t.group == '1')} />
          <ImageGrid images={images.filter(i => i.group == '1')} />
          <TextGrid text={text.filter(t => t.group == '2')} />
          <ImageGrid images={images.filter(i => i.group == '2')} />
          <TextGrid text={text.filter(t => t.group == '3')} />
          <ImageGrid images={images.filter(i => i.group == '3')} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper elevation={0} style={{height: '100%'}} className={classes.minipaper}>
                <img max-height="650" width="100%" src={'./blueprint.jpg'}  />
              </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={0} align="center" >
              <h2>Dream Sustainable Lifestyle Property</h2>
              <h3>Register your interest with Sandra today:</h3>
              <h3><a href="mailto:southernwoman2@hotmail.com">southernwoman2@hotmail.com</a></h3>
            </Paper>
          </Grid>
          <TextList text={text.filter(t => t.group == '1' || t.group == '2' || t.group == '3')} />
          <TextBlock text={text.filter(t => t.group == '4')} />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Carousel selectedIndex={"1"}/>
          </Grid>
          <Grid item className={classes.footer} xs={12} sm={12} md={12} lg={12}>
            <div> buildID: {process.env.BUILD_ID} @ {buildTime}</div>
          </Grid>
        </Grid>
        <div>
      </div>
    </main>
    </div>
  )
}


export async function getStaticProps(context) {
  const text = await getPageText("Text");
  const images = await getPageImages("Images");
  const buildTime = new Date().toISOString().substring(0, 19).replace('T', ' ')

  return {
    props: {
      text,
      images,
      buildTime
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
