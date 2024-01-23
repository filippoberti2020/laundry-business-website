import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

logoimg:{
    
    height: 20,
    width: 15,
   
},   
conatinerlogoimg:{
    display: 'inline-block',
    height: 15,
    width: 15,
    marginTop: 25,
    marginRight: -20,
    [theme.breakpoints.down("sm")]:{
    
        display: 'none',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-100%,125%)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        color: '#000',
        marginLeft: '15px',
        marginTop: -110,
     },
}, 
nav:{
    background: 'transparent',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',   
    alignItems: 'center',
    fontSize: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    [theme.breakpoints.down("md")]:{
    
        transition: '0.8s all ease',
     },

},


navbarcontainer:{
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    zindex: 1,
    width: '100%',
    marginLeft: 90,
    marginRight: 360,
   
},

navlogo:{
    color:'#3d88e4',
    justifySelf: 'flex-end',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontFamily: 'Hanuman, serif',
    display: 'flex',
    alignItems: 'center',
    marginRight: '60px',
    fontWeight: 700,
    textDecoration: 'none',
    [theme.breakpoints.down("sm")]:{
        display: 'none',
        marginLeft: '35px',
     },
},
sidebarlogo:{
    display: 'none',
    [theme.breakpoints.down("sm")]:{
    
    color:'#3787fe',
    
    justifySelf: 'flex-start',
    cursor: 'pointer',
    fontSize: '1.5rem',
    fontFamily: 'Barlow Condensed, sans-serif',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40px',
    fontWeight: 700,
    textDecoration: 'none',
     },
},

mobileicon:{
    display: 'none',

    [theme.breakpoints.down("sm")]:{
    
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translate(-100%,125%)',
        fontSize: '1.2rem',
        cursor: 'pointer',
        color: '#000',
        marginLeft: '15px',
        marginTop: -110,
     },
},



navmenu:{
    display: 'flex',
   alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
   marginLeft: '50px',
   [theme.breakpoints.down("sm")]:{
    
    display: 'none',
 },
},

nodecoration:{
    textDecoration: 'none',
    textTransform: 'none',
},



navlinks:{
    color: '#89888e',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    margin: '0 0.5rem',
    textDecoration: 'none',
    textTransform: 'none',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 600,
    fontFamily: 'Hanuman, serif',
    '&:hover': {
        transition: 'all .2s ease-in',
        color: '#000',
      },
},




sidebarcontainer:{
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    height:' 100vh',
    background: '#ffffff',
    display: 'grid',
    alignItems: 'center',
    top:  0,
    left: 0,
   
    transform: 'translate(0, -100)',
    transition: 'all 3s ease-in-out',
    webkitanimation: 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
	animation: 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    
},

closeicon:{
    color:'#000',
    marginRight: '15px',
    fontSize: '1.8rem',
    zIndex: 45,
},

icon:{
    position: 'absolute',
    justifyContent:'space-between',
    top: '1.8rem',
    width: '100%',
    background: 'transparent',
    fontSize: '2rem',
    cursor:'pointer',
    outline:'none',
    display: 'flex',
    height:35,
},

sidebarwrapper:{
    zIndex: 40,
    color:'#ffffff',
    
},
sidebarmenu:{
    zIndex: 40,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(6, 65px)',
    marginTop:'180px',
    margin:0, 
    padding:0, 
    height: '60%',
    
},
sidebarlink:{
    letterSpacing: '-0.5px',
    textDecoration: 'none',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',       
    transition: '0.2s ease-in-out',
    color: '#000',
    fontFamily: 'Barlow Condensed, sans-serif',
    cursor: 'pointer',
},
sidebarlinktop:{
    letterSpacing: '-0.2px',
    textDecoration: 'none',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',    
    transition: '0.2s ease-in-out',
    color: '#000',
    fontFamily: 'Barlow Condensed, sans-serif',
    cursor: 'pointer',
},
sidebarlinktext:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: '-120px',
    marginLeft: '40px',
    fontSize: '0.8rem',
    textDecoration: 'none',
    listStyle: 'none',
    transition: '0.2s ease-in-out',
    color: '#000000',
    fontFamily: 'Hanuman, serif',
    fontWeight: 700,
    cursor: 'pointer',
  
},

}));


