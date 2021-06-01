import React from 'react';
import { makeStyles } from '@material-ui/core';
import forest_image from '../../assets/images/nza_slideshow.jpg';
import nza_background from '../../assets/images/nza_background.jpg';
import {Link} from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    outer_container:{
        display: 'grid',
        flexgrow : '1',
        alignContent: 'inherit',
        alignItems: 'inherit',
        width: '100%',
        height:"100%" 
    },

    main_container:{
        marginLeft: '15%',
        marginRight: 'auto',
        marginTop: '7%',
        marginBottom: 'auto',
        position: 'absolute',
        alignContent: 'inherit',
        alignItems: 'inherit',
        background: 'white', 
        width: '70%',
        height:"100%"   
    },   

    logo:{
        paddingTop: '15px',
        marginLeft: '5%',
        textAlign:'left',
    },

    button:{
        border: 'none',
        borderradius: '5px',
        backgroundcolor: 'rgb(150, 144, 144)',
        color: 'white',
        width: '130px',
        height: '55px',
        float: 'right',
        marginRight: '5%'
    },

    sidebar:{
        width: '230px',
        height: '348px',
        marginTop:'1%',
        marginRight:'5%',
        float:'right',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color:'white'
    },

    h5:{
        padding: '0px 0px 0px 20px',
        marginBottom: '1px',
        fontSize: '12px',
        color: '#eee',
        textAlign: 'center',
    },

    nza_slideshow:{
        marginTop: '10px',
        paddingLeft: '70px',
        width:'65%'
    },

    main:{
        verticalAlign: 'top',
        paddingBottom: '10px'
    },

    main_header:{
        paddingTop: '10px',
        fontWeight: 'bold',
        color: 'black', 
        paddingLeft: '70px',
        fontSize: '12px'
    },

    main_text:{
        color: 'black',
        fontSize: '12px',
        lineHeight: '1.5',
        paddingLeft: '70px',
        paddingRight: '30px',
        width: '65%'
    },

    contact_header:{
        fontWeight: 'bold',
        color: 'black', 
        width: '160px',
        fontSize: '14px',
        paddingTop: '40px'
    },

    contact_text:{
        color: 'black',
        width: '160px',
        fontSize: '14px'
    },

    contact_info:{
        right: '121px',
        top: '450px',
        position: 'absolute'
    },

    sb_text:{
        color: 'white',
        marginLeft: '5px',
        fontSize: '12px',
        paddingLeft:'5%',
        paddingRight: '5%'
    },
    
    footer_link:{
        textAlign: 'center',
        paddingRight:'50px',
        width: '90%',
        textDecoration: 'none',
        fontSize: 'medium',
        color: 'black'
    },

    footer:{
        borderTop:'1px solid black',
        borderWidth:'2px',
        width: '93%',
        textAlign: 'center',
        marginLeft:'3%'
    },

    navigation_bar:{
      position: 'absolute',
      left: '0px',
      height: '40px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },

    id_navigation_ul:{
      margin: '0',
      padding: '0'
    },

    id_navigation_ul_list:{
      listStyleType: 'none',
      margin: '0',
      padding: '0px',
      float:'left',
      height: '5%'
    },

    id_navigation_ul_list2:{
      listStyleType: 'none',
      textDecoration: 'none',
      padding: '1px 20px',
      display: 'block',
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 'medium'
    },

    line_1:{
      width: '91%',
      border: '0',
      borderTop:'10px',
      borderBottom: '2px solid black',
      marginLeft: '40px'
    },
    
    line_2:{
      marginLeft: '40px',
      width: '91%',
      border: '0',
      borderBottom: '2px solid black',
      paddingBottom: '20px'
    },
});

export const WhoWeAre = ( props:Props) => {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.outer_container}>
             <img id="background_image" src={nza_background} alt="NZA background"/>
                <div className={classes.main_container}>
                    <div>
                    <span>
                      <div>
                            <img className={classes.logo} src="http://via.placeholder.com/300x100" alt="NZA logo"/>
                                <button className={classes.button}>Log in</button>
                        </div>
                    </span>
                            <div className={classes.navigation_bar}>
                                <ul className={classes.id_navigation_ul}>
                                    <li className={classes.id_navigation_ul_list}><Link to='/' className={classes.id_navigation_ul_list2}>WHO WE ARE</Link> </li>
                                    <li className={classes.id_navigation_ul_list}><span id="vertline1">I</span></li>
                                    <li className={classes.id_navigation_ul_list}><Link to='/whatwedo' className={classes.id_navigation_ul_list2}>WHAT WE DO</Link></li> 
                                    <li className={classes.id_navigation_ul_list}><span id="vertline2">I</span></li>
                                    <li className={classes.id_navigation_ul_list}><a className={classes.id_navigation_ul_list2} href="#">NEWS and EVENTS</a></li>
                                    <li className={classes.id_navigation_ul_list}><span id="vertline3">I</span></li>
                                    <li className={classes.id_navigation_ul_list}><Link to='/wherewework' className={classes.id_navigation_ul_list2}>WHERE WE WORK</Link></li>
                                    <li className={classes.id_navigation_ul_list}><span id="vertline4">I</span></li>
                                    <li className={classes.id_navigation_ul_list}><Link to='/contact' className={classes.id_navigation_ul_list2}>CONTACT US</Link></li>
                                </ul>
                            </div>
                        <div className={classes.line_1}></div>
                        <div className={classes.line_2}></div>                     
                        <div className={classes.main}>
                            <nav className={classes.sidebar}>
                                <h3 style={{ paddingLeft:'5%', paddingTop:'5%' }}>Newsfeed</h3>
                                    <div>
                                        <h5 className={classes.h5}>Category</h5>
                                        <div>
                                            <a style= {{ paddingLeft:'5%', color:'white' }} href="#">Link</a>
                                        </div>
                                        <p className={classes.sb_text }style={{ paddingLeft:'3%' }}>Nostrum website salvete! Hoc septimana 
                                            I ad sectionem welcom volutpat vestibulum project 
                                            coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu.</p>
                                        <h5 className={classes.h5}>Footnotes</h5>
                                        <a style={{paddingLeft:'5%', color:'white' }} href="#">Linkable Subtext</a>
                                    </div>    
                            </nav>
                            <img className={classes.nza_slideshow} src={forest_image} alt="forest"/>
                            <div>
                                <h5 className={classes.main_header}>Welcome to our website!</h5>
                                <p className={classes.main_text}id="who_we_are_text" >Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu. Nostrum website salvete! Hoc septimana I ad sectionem welcom volutpat vestibulum project 
                                coding in templo. Hic est, qui sumus in thext pagina. Et hoc est exemplum in textu.</p>
                            </div> 
                            
                            <div className={classes.contact_info}>
                                <h5 className={classes.contact_header}>Bigshot, Zoo, Adds, P.C.</h5>
                                <p className={classes.contact_text} > 419 West South Street, Suite 4200
                                    <br/> Houston, Texas 35983 
                                    <br/> 555-555-5555 (Phone) 
                                    <br/> 555-555-5555 (Fax) 
                                </p>
                            </div> 
                        </div>
                    </div>
                    <div className={classes.footer} >
                        <Link to='/' className={classes.footer_link}> WHO WE ARE</Link> 
                        <Link to='/whatwedo' className={classes.footer_link}> WHAT WE DO</Link> 
                        <Link to='#' className={classes.footer_link}> NEW and EVENTS</Link> 
                        <Link to='/wherewework' className={classes.footer_link}> WHERE WE WORK</Link> 
                        <Link to='/contact' className={classes.footer_link}> CONTACT US</Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}