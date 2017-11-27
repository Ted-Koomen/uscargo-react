import React from 'react';


const Contact = (props) => {
  return (
    <div className="text-align-center">    
      <div className="row">
        <div className="col-sm-4">
          <h3>
            <i className="glyphicon glyphicon-envelope"></i>
            Contact
          </h3>
          <p>
            To book a shipment please use <a href="https://www.cargosaas.com" target="_blank"> CargoSaas</a>. For quotes or customer service concerns please contact us by phone at 718-613-6165 or sales@uscargo.us
          </p>
        </div>
        <div className="col-sm-4">
          <h3>
            <i className="glyphicon glyphicon-tags"></i>
            Services
          </h3>
          <p>
            Our proprietary software will not only provide you with the best rates and services available, it will suggest the best carrier choice for any individual shipment through our user-friendly web interface.
          </p>
        </div>
        <div className="col-sm-4">
          <h3>
            <i className="glyphicon glyphicon-briefcase"></i>
            Partners
          </h3>
          <p>
US Cargo has partnered with many excellent shippers throught the US including NEMF, Central Transport, FedEx.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
