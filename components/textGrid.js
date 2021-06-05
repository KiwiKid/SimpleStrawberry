

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
highlightgrid: {
    textAlign: 'center',
    fontSize: '24px',
    top: '50%',
    height: '180px',
    width: '80%',
    margin: 'auto'
  },
  highlightgridtext: {
    top: '35%',
    position: 'relative',    
    transform: 'translateY(-50%)'
  },
}))
  
const TextGrid = (props) => {
    const classes = useStyles();
    return (
        props.text.map((t) =>  {
            return ( 
                <Grid item style={{ 'min-height': '200px'}} xs={12} sm={6} md={6} lg={6}> 
                    <Paper elevation={5} className={classes.highlightgrid}>
                        {t.title ? <h3>{t.title}</h3> : null}
                        <span className={classes.highlightgridtext}>{t.text}</span>
                    </Paper>
                </Grid>
            )
        })
    )
}


export default TextGrid