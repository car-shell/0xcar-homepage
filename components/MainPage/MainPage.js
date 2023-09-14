import styles from '../../styles/MainPage.module.css'
import { useState } from "react";
import useToast from '../Toast'
import Image from 'next/image'

const MainPage = () => {
    const {ToastUI, showToast} = useToast();
    const open = (url) => {
        
    }
    return <>
        <ToastUI />
        <div className={`${styles.container}`} style={{columnGap: '8px'}} >
            {/* <div className={styles.header + ' ' + styles.flex_row}>
                <img src='cardinal.png' className={styles.img} />
                
                <div className={`${styles.fontNormal} ${styles.word_style} ${styles.dialog}`}>
                    The <span className={styles.yellow}>Testnet</span> is about to launch, and users who participate in the testnet will have the opportunity to win <span className={styles.yellow}>airdrops</span>. Please stay tuned.
                </div>
                <div className={styles.triangle}/>
               
            </div> */}
            <div className={`${styles.umask}  ${styles.flex_row}`}>
            <div className={`${styles.flex_column} ${styles.stress}`}>
                
                <div className={styles.fontLargeTilte }>
                    <span style={{color: "#D9001B"}}>0x</span>Cardinal
                </div>
                <div className={styles.fontBigTitle + ' ' + styles.yellow + ' ' + styles.stress }>
                    Binance Smart Chain Betting Platform
                </div> 
                <div className={styles.fontTitle + ' ' + styles.white + ' ' + styles.stress}>
                    An Innovative Token-Based Betting Platform
                </div> 
                <div className={styles.fontTitle + ' ' + styles.white}>
                    Open-source, Decentralized，and Community-governed
                </div> 
                
                <div className={styles.fontBigTitleNormal + ' ' + styles.bigStress }>
                    Alpha Testnet is live. <a target="_blank" rel="noreferrer" href="https://testnet.0xcardinal.io/"><span style={{color: "#4aa4e9"}}>Join</span> us</a>!  
                    {/* Alpha Testnet is launching soon.  */}
                </div>

                <div className={`${styles.bigStress} ${styles.flex_row} ${styles.buttonRow} `}>
                    <div className={styles.button} onClick={()=>window.open("https://docs.0xcardinal.io/", '_bank')}>
                            Why 0xCardinal?
                    </div>
                    <div className={styles.button} onClick={()=>window.open("https://docs.0xcardinal.io/tokenomics/usdcdnl", '_bank')}>
                            Tokenomics
                    </div>
                    <div className={styles.button} onClick={()=>window.open("https://docs.0xcardinal.io/roadmap", '_bank')}>
                            Roadmap
                    </div>
                    <div className={styles.button} onClick={()=>{window.open("https://docs.0xcardinal.io/faqs", '_bank')}}>
                            FAQ
                    </div>
                </div> 
            </div> 

            {/* <Image width='500' height='500' alt='0xcardinal image' src='/cardinal02.png' /> */}
            {/* <div className={`${styles.fontBigTitle} ${styles.bigStress}`}>
                   Burned: <span style={{color: '#D9001B'}}>-{formatAmount(deadBalance)} {token?.symbol}</span> <span style={{color: '#02A7F0'}}>({(deadBalance/(token?.totalSupply.value/1e18)*100).toFixed(6)}%)</span>
            </div> */}

            
            {/* <Ranking /> */}
            </div>
        </div>
    </>
}

export default MainPage;