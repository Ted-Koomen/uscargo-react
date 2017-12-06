import React from 'react'
import './FTL.css'
const FTL = (props) => {
    return (
        <div>
            <div className="ftl" />
                <h1 className="page-header text-center">What is LTL shipping?</h1>
                <div className="align-items-center">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 hid inline-block">
                            <div className="row">
                                <div className="col-xs-10 col-sm-offset-1 text-center">
                                    <p>FTL shipping stands for full truckload, meaning that the shipment will take up an entire truck by itself. 
                                    FTL shipments are typically used when there are ten or more palettes that need to ship.
                                    It’s generally pretty easy to know when your shipment needs to be shipped via FTL, but sometimes smaller shipments can also benefit from FTL freight shipping. 
                                    If your shipment is high-risk, FTL may be the better option.</p>
                                    <br/>
                                    <p>FTL shipments stay on the same truck the entire time and aren’t transferred during transport, so there is significantly less risk of damage. 
                                    This method of transportation is also much quicker than LTL, since only one shipment is on board and there won’t be multiple stops along the way.
                                    When deciding on the most appropriate type of shipment for your freight, always keep in mind the size of your shipment, your budget, 
                                    how fragile the freight is, and how quickly you need your shipment to reach its destination. If you have a large shipment that’s delicate in nature and needs to arrive quickly, 
                                    FTL is your best bet. 
                                    If your shipment is small, sturdy, and not in a time crunch, LTL will fit your needs.</p>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FTL