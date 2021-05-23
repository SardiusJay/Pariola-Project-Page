import React from 'react'

import {Pack} from './Pack'

export const Works = () => {
 
    return(
       <>

            <section className="works">
                <div className="_worksWrapper">
                    <div className="_worksT">
                        <h3 style={{marginBlockStart: 0.67 + 'em'}, {marginBlockEnd: 0.67 + 'em'}}>
                            <span className="sstyle">/</span>
                                work
                            <span className="sstyle">.</span>
                        </h3>

                        <p>
                            Selected projects I've worked on in the past.
                        </p>
                    </div>

                    <div className="_workPack">
                        <ul id="myPack">
                            
                        <Pack />
                        <Pack />
                        <Pack />
                        <Pack />
                        <Pack />
                        <Pack />
                        <Pack />
                            
                        </ul>
                    </div>
                </div>
        </section>
           
       </>
    )
}
