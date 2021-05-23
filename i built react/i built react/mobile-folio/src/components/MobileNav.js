import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

// import Folder from '../svg/folder-outline.svg';
// import Bubble from '../svg/chatbubble-outline.svg';
// import Briefcase from '../svg/briefcase-outline.svg';

export const MobileNav = () => {      

    return(
       <>
    
        <div className="mobileNav">
            <div className="_pagWrapper">
                <Link to="/" className="_pag">
                    <ion-icon name="folder-outline"></ion-icon>
                </Link>
                
                <Link to="/mail" className="_pag">                
                    <span>
                        <span>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                    </span>
                </Link>
                
                <Link to="/resume" className="_pag">
                    <ion-icon name="briefcase-outline"></ion-icon>
                </Link>
            </div>
        </div>

       </>
    )
}




//  <img src={Folder} alt=""/>
//  <img src={Briefcase} alt=""/>
//  <img src={Bubble} alt=""/>

 