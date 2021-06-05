import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


 const ImageGrid = (props) => {
    return ( 
       props.images.length > 0 ? 
        props.images.map((value, index) => {
            return ( <Grid item  xs={12} sm={6} md={4} lg={4}>
                <Paper elevation={0} style={{height: '100%'}} >
                <img height="299" width="100%" src={value.path}  />
                </Paper>
            </Grid>)
        })
        : <h1>No images passed in! {JSON.stringify(props)}</h1>
    )
}

export default ImageGrid