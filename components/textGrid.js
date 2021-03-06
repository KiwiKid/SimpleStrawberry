

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    highlightcontainer: { 
        minHeight: '120px',
        padding: '1rem 0 1rem 0',
    },
    highlightgrid: {
        textAlign: 'center',
        fontSize: '24px',
        height: '100px',
        width: '80%',
        margin: 'auto'
    },
    highlightgridtext: {
        top: '25%',
        position: 'relative',    
        transform: 'translateY(-50%)'
    },
}))
  
const TextGrid = (props) => {
    const classes = useStyles();
    return (
        props.text ? props.text.map((t) =>  {
            return ( 
                <Grid item className={classes.highlightcontainer} xs={12} sm={6} md={6} lg={6}> 
                    <Paper elevation={5} className={classes.highlightgrid}>
                        {t.title ? <h3>{t.title}</h3> : null}
                        <span className={classes.highlightgridtext} dangerouslySetInnerHTML={{ __html: t.text }} />
                    </Paper>
                </Grid>
            )
        }) : null
    )
}

export default TextGrid