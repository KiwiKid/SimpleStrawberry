import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import ImageGrid from '../components/imageGrid.js'


import textMap from '../public/textMap.js'
import imagesMap from '../public/imageMap.js'

import Carousel from './carousel.js'
import TextGrid from '../components/textGrid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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

export default function Home() {
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
                <h3>Register your interest with Sandra today </h3>
                <h3>Email: <a href="mailto:southernwoman2@hotmail.com">southernwoman2@hotmail.com</a></h3> 
                <p>This lifestyle property provides the perfect balance between country living and city life. Tranquil and quiet but only 12 minutes to the city.</p> 	
              </Paper>
            </Grid>
            <TextGrid text={textMap.filter(t => t.group == '1')} />
            <ImageGrid images={imagesMap.slice(0, 9)} />
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={0} style={{height: '100%'}} className={classes.minipaper}>
                  <img max-height="650" width="100%" src={'./blueprint.jpg'}  />
                </Paper>
           </Grid>
            <TextGrid text={textMap.filter(t => t.group == '1')} />
            <ImageGrid images={imagesMap.slice(9, 18)}/>
            <TextGrid text={textMap.filter(t => t.group == '2')} />
            <ImageGrid images={imagesMap.slice(18, 99)}/>
            <TextGrid text={textMap.filter(t => t.group == '3')} />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Carousel selectedIndex={"1"}/>
            </Grid>
        </Grid>
    </main>
    </div>
  )
}
