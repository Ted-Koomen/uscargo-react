import React from 'react';
import './About.css'
import logo from './logo.jpg'
const About = (props) => {
    return (
        <div>
            <h1 className="page-header text-center">Our Mission</h1>
            <div className="text-center align-items-center">
               <div class="row">
                    <div class="col-sm-10 col-sm-offset-1 hid">
                        <div class="row">
                            <div class="col-xs-10 col-sm-offset-1 text-center align-center">
                                <p>US Cargo's staff has almost 80 years of combined experience in the industry. Our goal is to offer our expertise in moving
                                    your freight from point A to point B in the timeliest manner, while providing very aggressive pricing. US Cargo is Customs Bonded, fully insured, and has access to drop frame trailers, flat beds, and step decks.
                                    <br/>
                                        <img src={logo} className="align-center about-logo"/>
                                    <br/>
                                    US Cargo's competitive pricing and service are second to none. Your calls to our office are always welcome and appreciated, and we are dedicated to your satisfaction.
                                    Headquartered at the footsteps of John F. Kennedy International Airport in New York we access to one of the top ten busiest airports in the world. Having 200+ freight flights weekly and thousands of passenger flights daily
                                    there is never a shortage of transportation solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default About
                