import React from 'react'
import './Content.css'
const Content = (props) => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-lg-8">
          
          <img className="img-responsive main-image" height="400" width="600" src="http://socalinsurance.com/wp-content/uploads/2017/07/trucking-insurance.png" className="img-fluid rounded"></img>
        </div>
        <div className="col-lg-4">
          <p>US Cargo puts logic in logistics. We have the most competitive rates, and the highest level of customer service needed for your most valuable of shipments. Whether you are a small business trying to move a little cargo, or a large corporation looking to shop large amounts frequently, we work with the right people to suit your needs</p>
        </div>
      </div>
      <div className="card text-white bg-secondary my-4 text-center">
        <div className="card-body">
          <p className="text-white m-0">US Cargo puts the logic in logistics!</p>
        </div>
      </div>
    </div>
  )
}

export default Content
