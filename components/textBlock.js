

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const TextBlock = (props) => {
    return (
        <Grid item xs={12} sm={12} md={12} lg={6}> 
            <Paper elevation={5}>
            {props.text.map((t) =>  {
                    return (
                        <>
                            {t.title ? <h3>Title{t.title}</h3> : <h1>Titlenah</h1>}
                            <p>{t.text}</p>
                        </>
                    )
            })}
            </Paper>
        </Grid>
    )
}


export default TextBlock