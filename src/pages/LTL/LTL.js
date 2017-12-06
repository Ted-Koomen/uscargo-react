import React from 'react'
import './LTL.css'
const LTL = (props) => {
    return (
        <div>
            <div className="ltl-truck" />
                <h1 className="page-header text-center">What is LTL shipping?</h1>
                <div className="align-items-center">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 hid inline-block">
                            <div className="row">
                                <div className="col-xs-10 col-sm-offset-1 text-center">
                                    < p > LTL stands for "Less Than Truckload" and describes freight shipments that are too big for parcel carriers like the US Postal Service. Goods are typically placed on pallets, known as "palletization," and transported by a freight carrier.
                                            Your LTL freight carrier will combine your shipment with other LTL shipments to maximize efficiency and reduce costs. The freight is then transported via a hub system, where it is transferred between trucks and freight centers until it reaches its ultimate destination.
                                    <br />
                                    <br />
                                    Freight pricing is based on multiple factors such as the shipment's freight class, density, route, and even how the items are packaged. The cost of LTL freight shipping is considerably cheaper than shipping big items via a parcel carrier
                                    LTL freight is more susceptible to damage, since it is handled and transferred repeatedly. If you are shipping your load as LTL freight, it should be consolidated into one large, palletized shipment. Minimizing the number of individual packages reduces handling time and decreases the likelihood of damage.
                                    </p>                        
                                    <h3>Things to consider before choosing a LTL Freight Carrier</h3>                                
                                    <li>Is my shipment less than 10,000 lbs?</li>
                                    <li>Am I, or an agent, available to load and unload the shipment?</li>
                                    <li>Can I consolidate and palletize my shipment?</li>
                                    <li>Am I comfortable sharing trailer space with other freight shipments?</li>
                                    <li>Do I understand the timeline restrictions of LTL freight?</li>
                            <h3>US Cargo works closely with many LTL carriers to deliver your shipment as a <span className="accent-text">team</span>.</h3>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LTL