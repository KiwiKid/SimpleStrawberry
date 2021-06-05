import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => { 
    // Remove the server-side injected CSS.
    // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles); 
    }
  })
  return <Component {...pageProps} />
}

export default MyApp
