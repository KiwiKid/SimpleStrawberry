

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
highlightgrid: {
    textAlign: 'center',
    fontSize: '24px',
    top: '50%',
    backgroundColor: 'blue',
    height: '200px'
  },
  highlightgridtext: {
    top: '50%',
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
                    <Paper  className={classes.highlightgrid}>
                        <span className={classes.highlightgridtext}>Living area heated by woodburner with integrated water heating</span>
                    </Paper>
                </Grid>
            )
        })
    )
}


export default TextGrid