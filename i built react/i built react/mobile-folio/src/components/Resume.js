import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

export const Resume = () => {      

    return(
       <> 
                 
                     

                <div className="resume-wrapper">
                      <div className="resume-div resume-div1">
                             
                              <div className="intro">
                                     
                                <h3>
                                        introduction
                                </h3>

                                <p>
                                        Hi there 👋, I am Pariola, a frontend engineer. I have over two years experience building pixel-perfect user interfaces & awesome experiences, working with bleeding edge technologies to solve problems. I speak Vue and React right now.

                                </p>        
                                <p>
                                     Omopariola Philip is a highly productive frontend engineer.👨‍💻. I am a fast and flexible learner, a strong advocate for adhering to best practices and result-oriented.   
                                </p>   
                                
                            </div>
                    
                            <div className="intro">                                   
                                <a href="https://github.com/pariola-droid" className="introS">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://twitter.com/ipariola" className="introS">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="" className="introS">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                                <a href="https://instagram.com/ipariola" className="introS">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/omopariola-philip-6aa038178/" className="introS">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </div>

                      
                        <div className="experience">

                                <div className="headE">
                                        <span><ion-icon name="briefcase-outline"></ion-icon></span> 
                                        <h3>work experience</h3>
                                </div>  
                        <div className="experience-wrapper">
                                <div className="headD">
                                        <ul>
                                                <li>Frontend Engineer</li>
                                                <li>Regnify INC</li>
                                                <li>Remote. Ilorin</li>
                                                <li>October 2020 - present</li>
                                        </ul>
                                </div>

                                

                                  <div className="story">
                                        <ul>
                                                <li>Research software engineering choices and tools.</li>
                                                <li>Management of progress on KPIs and tasks using Trello.</li>
                                                <li>Maintain all software systems from development to production.</li>
                                    
                                                <li>Creating reusable layouts, partials and flexible HTML templates using HandleBars.js and SCSS for prototyping thus reduce development time.</li>
                                    
                                                <li>Converting user interfaces from Figma.</li>
                                                <li>Created a retrospective web application called Retroly and performed the role of a sole full-stack developer utilizing using MEAN stack.</li>
                                                <li>Structure and build independent components using BEM methodology.</li>
                                                <li>Implementing modular, reusable components that are easy to maintain across React and Angular projects.</li>
                                               
                                        </ul>
                                  </div>
                                
                        </div>
        

                  


                    

                        </div>         
                                         
                 </div>                 
               

          
                      


                      <div className="resume-div resume-div2">

                
                        <div className="more-details">
                        

                                <div className="lines">
                                       <span>
                                            <ion-icon name="location-outline"></ion-icon>
                                       </span>

                                       <p>Kwara. Nigeria.</p> 
                                </div>        
                                <div className="lines">
                                       <span>
                                             <ion-icon name="newspaper-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://blog.pariola.tech</a></p> 
                                </div>        
                                <div className="lines">
                                       <span>
                                              <ion-icon name="mail-outline"></ion-icon>
                                       </span>

                                       <p><a href="mailto:ipariola@yahoo.com">hi@pariola.tech</a></p> 
                                </div>        

                        </div>    
                                
                        
              
                        <div className="education">
                                <div className="eduT">
                                        <span><ion-icon name="school-outline"></ion-icon></span> 
                                        <h3>Education</h3>
                                </div>
                               <div className="education-wrapper">
                                        <div className="eduLine">
                                               <h3> B.Tech</h3> 
                                               <p>Federal University Of Technology, Minna, niger (2018-2023)</p>
                                        </div>
                                        
                               </div>
                        </div>

                         
                        <div className="proComp">
                                <div className="proCompT">
                                        <span><ion-icon name="trophy-outline"></ion-icon></span> 
                                        <h3>Projects</h3>
                                </div>
                               <div className="proComp-wrapper">
                                      <div className="proCard">
                                             <h3>
                                                     <a href="#0">Cursive </a> 
                                             </h3> 
                                             <p>
                                                   Cursive helps with every of your need when you in search of a job. I built a tool to help every job seeker with the basic needs, requirements in a job hunt. For every job needs, cursive's got you covered!
                                             </p>
                                      </div>
                                      
                                      <div className="proCard">
                                             <h3>
                                                     <a href="#0">Uxene </a> 
                                             </h3> 
                                             <p>
                                                     Uxene helps techies and non-techies with building cool portfolios to showcase their skills, save more time and share their career experience without writing code. Get it done with Uxene!
                                             </p>
                                      </div>
                                      
                               </div>
                        </div>



               
                        <div className="skills">
                                <div className="skillsT">
                                        <span><ion-icon name="checkmark-done-outline"></ion-icon></span> 
                                        <h3>Skills</h3>
                                </div>
                               <div className="skills-wrapper">
                                        <ul>
                                                <li>HTML5 & CSS3</li>
                                                <li>CSS Preprocessing</li>
                                                <li>JavaScript (ES6 Hands-on)</li>
                                                <li>Vue, React and Nodejs</li>
                                               
                                        </ul>
                               </div>
                        </div>
                        <div className="skills">
                                <div className="skillsT">
                                        <span><ion-icon name="checkmark-done-outline"></ion-icon></span> 
                                        <h3>Soft Skills</h3>
                                </div>
                               <div className="skills-wrapper">
                                        <ul>
                                               
                                                <li>Agile Methodology.</li>
                                                <li>Collaboration</li>
                                                <li>Remote work</li>
                                                <li> Work Ethics</li>
                                                <li>Problem Solving.</li>
                                                <li>Communication</li>
                                                <li> Debugging.</li>
                                                <li>Adaptability.</li>
                                                <li>Enthusiasm</li>
                                        </ul>
                               </div>
                        </div>

                
                        <div className="reusable">
                                <div className="reuseT">
                                        <span><ion-icon name="language-outline"></ion-icon></span> 
                                        <h3>I Speak</h3>
                                </div>
                               <div className="reusable-wrapper">
                                        <ul>
                                                <li>English</li>
                                                <li>Yoruba (Native - Language)</li>
                                                <li>Hausa (Learning Stage)</li>
                                               
                                        </ul>
                               </div>
                        </div>

                    
                     <div className="reusable2">
                                
                                <div className="reuse2T">
                                        <span><ion-icon name="globe-outline"></ion-icon></span> 
                                        <h3>Links</h3>
                                </div>

                        <div className="reusable2-wrapper">
                                <div className="lines">
                                       <span>
                                            <ion-icon name="link-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://beta.pariola.tech</a></p> 
                                </div>        
                                <div className="lines">
                                       <span>
                                             <ion-icon name="globe-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://project.pariola.tech</a></p> 
                                </div>        
                                <div className="lines">
                                       <span>
                                              <ion-icon name="link-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://shelf.pariola.tech</a></p> 
                            </div>
                            <div className="lines">
                                       <span>
                                            <ion-icon name="globe-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://cursive.pariola.tech</a></p> 
                            </div> 
                            <div className="lines">
                                       <span>
                                            <ion-icon name="link-outline"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://noondevs.pariola.tech</a></p> 
                            </div> 
                        </div>    

                        </div> 
                    
                                           
                        <div className="reusable2">
                                
                                <div className="reuse2T">
                                        <span><ion-icon name="medal-outline"></ion-icon></span> 
                                        <h3>Certification</h3>
                                </div>

                        <div className="reusable2-wrapper">
                                <div className="lines">
                                       <span>
                                            <ion-icon name="logo-dropbox"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://beta.pariola.tech</a></p> 
                                </div>        
                                <div className="lines">
                                       <span>
                                            <ion-icon name="logo-dropbox"></ion-icon>
                                       </span>

                                       <p><a href="http://">https://project.pariola.tech</a></p> 
                                </div>       
                                                         
                        </div>    

                        </div>  


                      </div>
                </div>             
                

       

       </>
    )
}
