import React,{useState} from 'react';
import useStyles from './NavbarStyles'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import Logo from '../../images/logo.png';
const Navbar =()=>{

    const [toggleMenu,setToggleMenu]= useState(false);

    const classes=useStyles()

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
       
        window.scrollTo({ top: yCoordinate , behavior: 'smooth' }); 
    }
    

    return(
        <>
            <div className={classes.nav}>
                <div className={classes.navbarcontainer}>
                <div className={classes.conatinerlogoimg}> 
                <img src={Logo} className={classes.logoimg} /></div>
               
                <div  className={classes.navlogo} to='/'>Lavanderia C&C</div>
                    <div className={classes.mobileicon} onClick={()=>setToggleMenu(true)} >
                        <FaBars />
                    </div>
                    <ul className={classes.navmenu} >
                        <NavLink  className={classes.navlinks} style={(props) => {
                        return props.isActive ? {  
                            color: '#000',
                            } : {};
                         }} to="/" >
                         Home
                        </NavLink>
                        <HashLink  className={classes.nodecoration}  to="/#comefunziona"  >
                            <li  className={classes.navlinks}>Come funziona</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#servizi"  >
                            <li  className={classes.navlinks}>Servizi</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#prezzi"  >
                            <li  className={classes.navlinks}>Prezzi</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#orari"  >
                            <li  className={classes.navlinks}>Orari</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#faq"  >
                            <li  className={classes.navlinks}>Domande frequenti</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#chisiamo"  >
                            <li  className={classes.navlinks}>Chi Siamo</li>
                        </HashLink>
                        <HashLink  className={classes.nodecoration}  to="/#contatti"  >
                            <li  className={classes.navlinks}>Contatti</li>
                        </HashLink>
                    </ul>
                  
                </div>
                {toggleMenu && (
                <div  className={classes.sidebarcontainer} >
                    <div  className={classes.icon} >
                        <div  className={classes.sidebarlogo} to='/'>Lavanderia C&C</div>
                        <IoCloseSharp className={classes.closeicon} onClick={()=>setToggleMenu(false)}/>
                    </div>
                    <div className={classes.sidebarwrapper}>
                        <div  className={classes.sidebarmenu}>     
                        <NavLink  className={classes.sidebarlinktop} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/" onClick={()=>setToggleMenu(false)}>
                         Home
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/comefunziona" >
                         Come funziona
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/servizi" >
                         Servizi
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/prezzi" >
                         Prezzi
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/orari" >
                         Orari
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/faq" >
                         Domande frequenti
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} style={(props) => {
                        return props.isActive ? {   fontWeight: 700,  } : {};
                         }} to="/chisiamo" >
                         Chi siamo
                        </NavLink>
                        <NavLink  className={classes.sidebarlink} to="/#contatti" >
                         Contatti
                        </NavLink>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}
export default Navbar;
