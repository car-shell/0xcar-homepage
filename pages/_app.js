import '../styles/globals.css'
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    setLoaded(true)
  }, [])

  return <> 
    {loaded &&  <Component {...pageProps} />}
  </>
}

export default MyApp