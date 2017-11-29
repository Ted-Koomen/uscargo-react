import React from 'react'
import Slider from './components/Slider/Slider'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
const HomePage = (props) => {
    return (
        <div>
            <Slider/>
            <Content/>
            <div className="container">
                <Contact />
                <About/>
            </div>

        </div>
    )
}

export default HomePage