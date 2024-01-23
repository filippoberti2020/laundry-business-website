import React,{useState} from 'react';
import useStyles from './indexStyles'
import { Button,Image } from '@material-ui/core';
import Background from '../../images/intro.png';
import Welcome from '../../images/welcome.jpg';
import Schedule from '../../images/schedule.png';
import HowWorks from '../../images/howworks.jpg';
import PlusIcon from '../../images/plus.svg';
import {GiWashingMachine,GiAtom,GiSwipeCard,GiClothesline,GiSittingDog} from 'react-icons/gi';


const Home =()=>{
    const classes=useStyles()
    const [faqs, setfaqs]=useState([
        {
            question: 'Posso lavare i materassi?',
            answer: 'Si',
            open: false
        },
        {
            question: 'Posso lavare le scarpe da lavoro?',
            answer: 'Si',
            open: false
        },
        {
            question: 'Si può lavare tutto insieme?',
            answer: 'Si, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            open: false
        }        
    ])


    const toggleFAQ=index =>{
        setfaqs(faqs.map((faq, i) =>{
            if(i === index){
                faq.open=!faq.open
            }else{
                faq.open=false
            }

            return faq
        }))
    }

    return(
        <>
        <div   style={ sectionStyle } >
            <div className={classes.countainer} >
                <div><h1 className={classes.mobiletext}>Lavanderia C&C</h1></div>
                <h1 className={classes.firsttext}>Il servizio di lavanderia più facile e semplice</h1>
                <p className={classes.textp}>Oltre al lavaggio dei capi di vostra proprietà, la nostra ditta effettua anche il servizio di noleggio della biancheria di cui necessita la vostra attività, con quantità e tempi di ritiro e riconsegna, da concordare secondo le vostre esigenze</p>
                <Button  style={{backgroundColor: "#3d88e4",}} className={classes.btnshowmore} >Mostra di più</Button>
            </div>
        </div>
        <div style={ sectionStyle2 } >
            <div className={classes.countainer} >
                <h1 className={classes.text}>Il servizio di lavanderia più facile e semplice</h1>
                <p className={classes.textp}>Oltre al lavaggio dei capi di vostra proprietà, la nostra ditta effettua anche il servizio di noleggio della biancheria di cui necessita la vostra attività, con quantità e tempi di ritiro e riconsegna, da concordare secondo le vostre esigenze</p>
                <Button style={{backgroundColor: "#3d88e4",}} className={classes.btnshowmore} >Mostra di più</Button>
            </div>   
            <div  className={classes.countainersideimgchisiamo}>
                <img src={Welcome} className={classes.sideimgchisiamo} />
            </div>  
           
        </div>
        <div style={ sectionStyle2 } >
            <div className={classes.countainerservices} >
                <h1 className={classes.text}>Ci dedichiamo a fornire un servizio di lavanderia di qualità</h1>
                <p className={classes.textpextra}>Oltre al lavaggio dei capi di vostra proprietà, la nostra ditta effettua anche il servizio di noleggio della biancheria di cui necessita la vostra attività, con quantità e tempi di ritiro e riconsegna, da concordare secondo le vostre esigenze</p>
                <Button style={{backgroundColor: "#3d88e4",}} className={classes.btnshowmore} >Mostra di più</Button>
            </div>   
            <div  className={classes.countainersideimgservices}>
                <div  className={classes.rowservice}>
                    <div className={classes.priceboxstep}>
                        <GiWashingMachine size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Lavaggio 10kg</h1>
                    </div> 
                </div>   
                <div  className={classes.rowservice2}>
                    <div className={classes.priceboxstep}>
                        <GiClothesline size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Asciugatura 10kg</h1>
                    </div> 
                    <div className={classes.priceboxstep}>
                        <GiClothesline size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Asciugatura 8kg</h1>
                    </div> 
                </div>    
            </div>  
                 
        </div>
        <div style={ sectionStyle2 } >  
            <div className={classes.countainer} >
                <h1 className={classes.text}>In soli 4 semplici passaggi:</h1>
                <p className={classes.textpstep}>Oltre al lavaggio dei capi di vostra proprietà</p>
                <p className={classes.textpstep}>Oltre al lavaggio dei capi di vostra proprietà</p>
                <p className={classes.textpstep}>Oltre al lavaggio dei capi di vostra proprietà</p>
                <p className={classes.textpstep}>Oltre al lavaggio dei capi di vostra proprietà</p>
            </div>
            <div  className={classes.countainersideimgstep}>
                <img src={HowWorks} className={classes.sideimgstep} />
            </div>          
        </div>
        <div style={ sectionStyle2 } >
            <div className={classes.pricecountainer} >
                <h1 className={classes.pricetext}>Prezzi</h1>
                <p className={classes.pricesubtitletext}>Incontra la qualità al miglior prezzo</p>
                <div  className={classes.row}>     
                        <div className={classes.pricebox}>
                            <GiWashingMachine size={55} className={classes.icon} color="#4796fb"/>
                            <h1 className={classes.priceboxtexttitle}>Lavaggio 10kg</h1>
                            <p className={classes.priceboxtext}>2€</p> 
                        </div> 
                        <div className={classes.pricebox}>
                            <GiWashingMachine size={55} className={classes.icon} color="#4796fb"/>
                            <h1 className={classes.priceboxtexttitle}>Lavaggio 10kg</h1>
                            <p className={classes.priceboxtext}>2€</p>
                        </div> 
                  
                        <div className={classes.pricebox}>
                            <GiSittingDog size={55} className={classes.icon} color="#4796fb"/>
                            <h1 className={classes.priceboxtexttitle}>Pet & Work 10kg</h1>
                            <p className={classes.priceboxtext}>2€</p>
                        </div> 
                        <div className={classes.pricebox}>
                            <GiSittingDog size={55} className={classes.icon} color="#4796fb"/>
                            <h1 className={classes.priceboxtexttitle}>Pet & Work  10kg</h1>
                            <p className={classes.priceboxtext}>2€</p>
                        </div>  
                </div>   
                <div  className={classes.row2}>
                    <div className={classes.pricebox}>
                        <GiClothesline size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Asciugatura 10kg</h1>
                        <p className={classes.priceboxtext}>2€</p>
                    </div> 
                    <div className={classes.pricebox}>
                        <GiClothesline size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Asciugatura 8kg</h1>
                        <p className={classes.priceboxtext}>2€</p>
                    </div> 
                    <div className={classes.pricebox}>
                        <GiClothesline size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Asciugatura 2kg</h1>
                        <p className={classes.priceboxtext}>2€</p>
                    </div> 
                    <div className={classes.pricebox}>
                        <GiSwipeCard size={55} className={classes.icon} color="#4796fb"/>
                        <h1 className={classes.priceboxtexttitle}>Card 10kg</h1>
                        <p className={classes.priceboxtext}>2€</p>
                    </div> 
                </div> 
            </div>
        </div>
        <div style={ sectionStyle2 } id="orari">   
            <div className={classes.countainer} >
                <h1 className={classes.text}>Orario</h1>
                <p className={classes.textpschedule}>Aperto tutti i giorni:</p>
                <h1 className={classes.textschedule}>7:00 - 23:00</h1>
            </div>
            <div  className={classes.countainersideimgorari}>
                <img src={Schedule} className={classes.sideimgorari} />
            </div>  
        </div>
        <div style={ sectionStyle2 } id="faq">
            <div className={classes.countainer} >
                <h1 className={classes.text}>Domande frequenti</h1>
                <div className={classes.faqs}>
                {faqs.map((faq,i) => (
                  <div className={faq.open ? classes.faqopen : classes.faq} key={i} onClick={()=> toggleFAQ(i)}>
                    <div className={faq.open ? classes.faqquestionopen : classes.faqquestion} >
                        {faq.question}
                        <div className={classes.plusiconcontainer}>
                            <p className={classes.plusicon}>+</p>
                        </div>
                    </div>
                    <div className={faq.open ? classes.faqopenanswer : classes.faqanswer} >
                        {faq.answer}
                    </div>
                  </div>  
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;


var sectionStyle = {
    width: "auto",
    height: "100%",
    background: `url(${Background}) no-repeat center center fixed   `,
    minWidth: "100%",
    minHeight: "100%",
    marginTop: -80,
    backgroundSize: 'cover',
    position: 'relative',
    
  };
  var sectionStyle2 = {
    width: "auto",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
    marginTop: -80,
    backgroundSize: 'cover',
    position: 'relative',
  };