import React,{useState} from 'react';
import useStyles from './FooterStyles'
import {IoLocationSharp} from "react-icons/io5";
import Logo from '../../images/logo.png';
import {HiPhone} from  "react-icons/hi";
const Footer =()=>{

    const [toggleMenu,setToggleMenu]= useState(false);

    const classes=useStyles()
    return(
        <>
            <footer className={classes.footercontainer}>
                <div className={classes.leftcountainer} id="contatti">
                    <div className={classes.inline}>
                        <div  className={classes.logocountainer} >
                            <img src={Logo} className={classes.logo} />
                        </div>               
                        <h1 className={classes.title}>Lavanderia C&C</h1>
                    </div>
                    <div className={classes.inlinemaps}>
                        <a href="https://goo.gl/maps/iPbwgkXfsgU1uYFv5" className={classes.nodecoration}><IoLocationSharp className={classes.icon2}/><p className={classes.p}>Via Roma, 94, 30020 Cinto Caomaggiore VE</p></a>
                    </div>
                    <div className={classes.inline}>
                        <a href="tel:+39331 384 7594" className={classes.nodecoration}><HiPhone className={classes.icon} /><p className={classes.p2}>+ 39 331 384 7594</p></a>
                    </div>
                    <p className={classes.rightauthor}>&copy; {new Date().getFullYear()} Lavanderia C&C. All Rights Reserved.</p>
                    <p className={classes.rightauthor2}>Created by <a className={classes.link} href="https://filippo-portfolio.vercel.app/">Filippo Berti</a> </p>
                </div>    

                <div className={classes.righttree}>
                    <p className={classes.treetitle}>Chi siamo</p>
                    <p className={classes.ptree}>Contatti</p>
                </div> 
                <div className={classes.righttree2}>  
                    <p className={classes.treetitle}>Servizi</p>
                    <p className={classes.ptree}>Come funziona</p>
                    <p className={classes.ptree}>Domande frequenti</p>
                    <p className={classes.ptree}>Prezzi</p>
                    <p className={classes.ptree}>Orari</p>
                </div> 
            </footer>
        </>
    )
}
export default Footer;
