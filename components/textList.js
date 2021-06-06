

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const TextList = (props) => {

    return (
        <Grid item xs={12} sm={12} md={12} lg={6}> 
            <Paper elevation={0}>
                <ul>
                {props.text.map((t) => {
                    return (
                        <li key={t.index}>{t.text}</li>
                    )
                })}
                </ul>
            </Paper>
        </Grid>
    )
}


export default TextList