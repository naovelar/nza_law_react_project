import React from 'react';
import { makeStyles } from '@material-ui/core';
import nza_background from '../../assets/images/nza_background.jpg';
import attorneys from '../../assets/images/sub-01-attorneys.jpg';
import business from '../../assets/images/sub-02-business.jpg';
import litigation from '../../assets/images/sub-02-litigation.jpg';
import subrogation from '../../assets/images/sub-02-subrogation.jpg';
import warehouse from '../../assets/images/sub-02-warehouse.jpg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    outer_container:{
        display: 'grid',
        flexgrow : '1',
        alignContent: 'inherit',
        alignItems: 'inherit',
        width: '100%',
        height:"100%" ,
        fontfamily: "'Lucida Sans reg', sans-serif"
    },

    main_container: {
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

    side_navigation:{
        width: '230px',
        height: '500px',
        marginTop:'1%',
        marginLeft:'3%',
        float:'left',
        background: 'linear-gradient(to bottom, #AD0000 0%, #6E0000 100%)',
        overflowX: 'hidden',
        color:'white'
    },
    
    side_navigation_content: {
        display: 'block',
        borderTop: '1px solid white',
        marginRight: '20px'
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
        marginLeft:'3%',   
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

    location_text: {
        marginLeft: '27%',
        marginRight:'5%',
        marginTop: '10px'
    },

    box1: {
        height: '100%',
        listStyle: 'none',
        padding: '2rem',
        color: 'var(--light)',
        textDecoration: 'none',
        textAlign: 'left',
        gridRow: '1/4',
    },

    attorneys_image:{
        width: '100%',
        height: '100%'
    },

    box3:{
        padding: '10px',
        display: 'grid',
        gridGap:'10px',
        gridTemplateColumns: '1fr 1fr',
        gridcolumn: '2/2',
        paddingBottom:'63px'
    }
});



interface Props{
    title: string;
}

export const WhatWeDo = ( props:Props) => {
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
                            <nav className={classes.side_navigation}>
                                <div className={classes.side_navigation_content}>
                                    <div className={classes.box1}>
                                        <h3>WHAT WE DO</h3> 
                                        <h4 style={{fontWeight: 'bold' }}>Subrogation</h4>
                                            <li> Property</li>
                                            <li> Worker's Compensation</li>
                                        <h4 style={{fontWeight: 'bold' }}>Litigation </h4>
                                            <li>Appeliate</li>
                                            <li>Commercial</li>
                                            <li>Defense</li>
                                            <li>Labor/Employment</li>
                                        <h4 style={{fontWeight: 'bold' }} >Business</h4>
                                            <li>Brokerage Agreement</li>
                                            <li>Business Formation </li>
                                            <li> Business Related</li>
                                            <li>Contracts</li>
                                            <li> Property</li>
                                            <li> Labor/Employment</li>
                                        <h4 style={{fontWeight: 'bold' }}>Transportation</h4>
                                            <li>Brokerage Agreement</li>
                                            <li> Business Formation</li>
                                                <img className={classes.attorneys_image} src={attorneys} alt="people in suits"/>
                                        <h4 style={{fontWeight: 'bold' }}>Attorneys</h4>
                                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li> 
                                    </div>   
                                </div> 
                            </nav>
                        <div className={classes.location_text}>
                            <p style={{fontSize: '20px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto consequatur 
                                aut natus earum dolorem tenetur hic sunt eum facilis cupiditate cumque, ducimus ea
                                laudantium! Dolorem in itaque rem omnis doloribus maxime, modi similique quod impedit
                                excepturi ullam animi! Commodi aut consectetur vel. Pariatur soluta eveniet officia
                                sunt dicta aut dignissimos eius assumenda, similique incidunt. Consequuntur hic 
                                totam libero, ratione fuga, non similique voluptatibus, iste et accusamus adipisci 
                                odit corporis inventore fugiat nihil nulla eaque. Nisi nobis eum dolores nulla, 
                                explicabo velit aperiam possimus, laborum molestiae consectetur architecto soluta 
                                perferendis minima accusantium fuga. Consectetur quaerat culpa quasi alias maxime 
                                dolores? 
                            </p>
                        </div>
                            <div className={classes.box3}>
                                <img src= {business}/>
                                <img src= {litigation}/>
                                <img src= {subrogation}/>
                                <img src= {warehouse}/>
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