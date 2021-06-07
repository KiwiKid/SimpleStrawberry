import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import ImageGrid from '../components/imageGrid.js'


//import textMap2 from '../public/textMap.js'
//import imagesMap from '../public/imageMap.js'
import { getPageImages, getPageText } from './api/api';

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

  export default function Index() {

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

        </Grid>
    </main>
    </div>
  )
}