import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

export const Mail = () => {  
    
    const [state, handleSubmit] = useForm("xgepddqv");
        if (state.succeeded) {
            return <div className="fewMin">
                        <p className="pFew">I'll be replying you in few minutes 😉!<br/> Thanks in addy 😃. </p>

                        <Link to="/" className="pLink">
                            Home
                        </Link>
                    </div>;
    }

    return(
       <>
    
        <section className="mail">
              <div className="_mailWrapper">
                  <div className="_mailText">
                        <h1>
                            Like what you see ?
                        </h1>
                        <p>
                            Got a question or proposal, or just want
                            to say hello? Go ahead.
                        </p>
                  </div>

                  <form onSubmit={handleSubmit} className="_mailForm">
                        <div className="_row">
                              <div className="rowI">
                                    <label htmlFor="name">
                                        Your Name
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name"/>
                              </div>
                              <div className="rowI">
                                    <label htmlFor="email">
                                        Email Address
                                    </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" />
                                 <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                              </div>
                        </div>

                        <div className="_row">
                            <div className="rowT">
                                    <label htmlFor="name">
                                        Your Message

                                        <span>
                                            <span className="count">
                                                0
                                            </span>
                                            .
                                        </span>
                                    </label>
                                <textarea type="text" name="message" id="message" placeholder="Hi Pariola! nice to meet you, i love what i see you do everyday, you inspire me man, so i've got a job for you."></textarea>
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                              </div>
                        </div>

                        <div className="_row">
                           <button type="submit" disabled={state.submitting} className="shoot">
                              shoot 
                              
                              <img src="https://devdanielcodes.vercel.app/img/Arrow.442f3667.svg" alt=""/>
                           </button>
                        </div>
                  </form>
              </div>
          </section>

       </>
    )
}
