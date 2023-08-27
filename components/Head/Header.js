/* eslint-disable @next/next/no-html-link-for-pages */
// import { Link } from 'react-router-i18n'
import { useCallback, useState, useEffect, useContext} from "react";
import styles from "../../styles/Header.module.css";
import useToast from '../Toast'
import Link from "next/link";


const Header = ({showMenu=true}) => {
  const [curRouter, setCurRouter] = useState('')
  const [showWalletInfo, setShowWalletInfo] = useState(false)
  const {ToastUI, showToast} = useToast()

  const lunchAppButton = (e) => {
    if (e.target.innerText == 'Launch App >') {
      // router.push('/app.html')
      // showToast("Coming soon")
      window.open(`https://testnet.0xcardinal.io/`, "_blank")
      return
    }
  }

  return (
    <>
      <ToastUI />
      <header className={styles.header} >
        <Link href='/'>
          <div className={styles.title}>
            <img src="favicon.ico" className={styles.image}/>
            <div className={styles.logo} style={{cursor: 'pointer'}}>
              <span style={{color: "#D9001B"}}>0x</span>Cardinal
            </div>
          </div>
        </Link>
    
        <div className={styles.wallet + ' ' + styles.walletFont } onClick={lunchAppButton}>
          Launch App &gt;
        </div>
      </header>
    </>
  )
}

export default Header
