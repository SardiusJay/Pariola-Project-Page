import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

export const Navbar = () => {      

    return(
       <>
    
        <nav>
          
            <h3>
            Pariola
            </h3>
          
          <ul className="ulN">
              <li className="_li">
                  <Link to="/">projects</Link>
              </li>
              <li className="_li">
                  <Link to="/mail">contact</Link>
              </li>
              <li className="_li">
                  <Link to="/resume">resume</Link>
              </li>
          </ul>

            <div class="menuWrap">
              <div class="hamburger">               
                <img src="https://pbs.twimg.com/profile_images/1368077444427743232/_kHPeI4D_400x400.jpg" alt="Dev_pariola"/>
              </div>           
            </div>
      
        </nav>

       </>
    )
}



