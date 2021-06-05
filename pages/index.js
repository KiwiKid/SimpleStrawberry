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
      display: "flex"
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
           
                <Grid item  style={{ 'min-height': '200px'}}  xs={12} sm={6} md={6} lg={6}>
                <Paper className={classes.highlightgrid}>
                    <span className={classes.highlightgridtext}> Second lounge with open fire</span>
                </Paper>
                </Grid>
                <Grid item style={{ 'min-height': '200px'}}  xs={12} sm={6} md={6} lg={6}>
                  <Paper  className={classes.highlightgrid}>
                  <span className={classes.highlightgridtext}>Insulated under floor and ceiling </span>
                  </Paper>
                </Grid>
                <Grid item  minHeight={200} xs={12} sm={6} md={6} lg={6}>
                <Paper  className={classes.highlightgrid}>
                <span className={classes.highlightgridtext}>4 large bedrooms</span>
                </Paper>
                </Grid>
                <ImageGrid images={imagesMap.slice(9, 18)}/>
             <Grid item xs={12} sm={12} md={12} lg={12}>
              <ul className={classes.highlightlist}>
                <li>Sunroom/study</li>
                <li>Large laundry with walk-in linen room</li>
                <li>Double garage with internal access</li>
                <li>Bathroom with bath and separate shower</li>
                <li>Situated 2 kilometres south west of Sawyers Bay in a rural setting, 10 kilometres north of the Octagon</li>
                <li>The dwelling is very well orientated with the living areas having a northerly aspect</li>
                <li>Handy to trendy Port Chalmers' galleries and shops </li>
              </ul>
              </Grid> 
              <ImageGrid images={imagesMap.slice(18, 99)}/>
              <Grid item xs={12} sm={12} md={12} lg={12}>
          <div >
            <h3>Permaculture</h3>
            <p> This property is based on permaculture principles and includes a integrated forest garden of fruit trees, berry bushes, and vegetables designed by Jason Ross. A herb spiral, raised veggie beds, glasshouse, and composting area. It also includes a worm farm, chicken coop, tool shed and a large barn. We are currently grazing 4 sheep, 4 chickens and a horse
            </p>
          </div>
            <div  >
              <h3>History</h3>
              <p>Originally farmed by the Goddard family which grew vegetables and strawberries on this very fertile land.  
              </p>
              <p>This much loved property has been our home for the past 21 years and has provided a wonderful environment to bring up our 4 boys.
              </p>			
            </div>
            <div>
              <h3>If you would like more information, please reach out to me at <a src="mailto:southernwoman2@hotmail.com">southernwoman2@hotmail.com</a></h3>
            </div>
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12}>
             <Carousel selectedIndex={"1"}/>
           </Grid>
        </Grid>
			
    </main>

      <footer className={styles.footer}>
        </footer>      
    </div>
  )
}
