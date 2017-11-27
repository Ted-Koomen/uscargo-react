import React from 'react'
import Slider from './components/Slider/Slider'
import Content from './components/Content/Content'
import Contact from './components/Contact/Contact'
const HomePage = (props) => {
    return (
        <div>
            <Slider/>
            <Content/>
            <div className="container">
                <Contact/>
            </div>
        </div>
    )
}

export default HomePage