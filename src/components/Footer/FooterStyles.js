import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    footercontainer:{
        backgroundColor: '#ebf4fd',
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
        height:380,
        [theme.breakpoints.down("sm")]:{      
            height:280,    
        },  
    },
    title:{
        fontFamily: 'Barlow Condensed, sans-serif',
        color:'#3787fe',
        fontSize: 21,
        marginTop:44,
        marginLeft:25,
        [theme.breakpoints.down("sm")]:{      
            marginTop:84, 
                 
        },  
    },
    p:{
        fontFamily: 'Barlow Condensed, sans-serif',
        paddingTop:15,
        marginLeft: 12,
    },
    p2:{
        fontFamily: 'Barlow Condensed, sans-serif',
        marginTop:-6,
        marginLeft: 12,
    },
    leftcountainer:{
        height: 50,
        width:400,
        marginLeft:120,  
        [theme.breakpoints.down("sm")]:{
            marginLeft:0,  
            width:"100%",
            justifyContent:'center',
            alignItems: 'center',
            textAlign: 'center',
         },
    },
    inline:{
        display: 'flex',
        [theme.breakpoints.down("sm")]:{      
            justifyContent:'center',
            alignItems: 'center',
            textAlign: 'center',         
        },  
    },
    inlinemaps:{
        display: 'flex',
        marginTop:45, 
        [theme.breakpoints.down("sm")]:{      
            justifyContent:'center',
            alignItems: 'center',
            textAlign: 'center',   
            marginTop:25,      
        },  
    },
    icon:{
        marginTop:-20,
    },
    icon2:{
        marginTop:0,
    },
    rightauthor:{
        marginTop: 25,
        fontFamily: 'Barlow Condensed, sans-serif',
        color: '#89888e',
    },
    rightauthor2:{
        marginTop: -25,
        fontFamily: 'Barlow Condensed, sans-serif',
        color: '#89888e',
    },
    link:{
        fontWeight: 700,
        fontFamily: 'Barlow Condensed, sans-serif',
        textDecoration: 'none',
        color: '#89888e',
    },
    righttree:{
        float: 'right',
        height: 50,
        width:150,
        marginRight:120,   
        [theme.breakpoints.down("sm")]:{
            display: ' none',
         },
    },
    righttree2:{
        float: 'right',
        height: 50,
        width:150,
        marginRight:25, 
        [theme.breakpoints.down("sm")]:{
            display: ' none',
         },  
    },
    treetitle:{
        fontWeight: 700,
        fontFamily: 'Barlow Condensed, sans-serif',
        marginTop: -6,
        marginLeft: 12,
    },
    ptree:{
        fontFamily: 'Barlow Condensed, sans-serif',
        paddingTop:0,
        marginLeft: 12,
    },
    logo:{
        display: 'flex',
        marginTop:-2,
        height: 20,
        width: 15,    
    },
    logocountainer:{
        display: 'flex',
        height: 15,
        width: 15,
        paddingTop: 50,
        [theme.breakpoints.down("sm")]:{
               
            
                
         },  
    },
    nodecoration:{
        textDecoration: 'none',
        textTransform: 'none',
        color: '#000',
        fontFamily: 'Barlow Condensed, sans-serif',
        display: 'flex',
    },
}));


