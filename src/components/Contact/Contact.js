import React from 'react';


const Contact = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Services</h2>
            <p className="card-text">US Cargo is able to get you the most competitive domestic shipping rates for all of your shipping needs, from small pallets to large airplance engines.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Contact</h2>
            <p>To book a shipment please log into <a href="http://www.cargosaas.com" target="_blank">CargoSAAS</a></p>
            <p>If you do not have a CargoSAAS log in you may sign in as guest@uscargo with the password of "guest". Please note there will be a surcharge by using this guest account</p>
            <p>If you wish to avoid this surcharge please contact <a hreg="mailto:sales@uscargo.us?Subject=Cargosaas%20Login" target="_top">sales@uscargo.us</a> to create your own customized login.</p>
            <p className="card-text">For quotes or customer service concerns please contact us by phone at 718-613-6165 or <a href="mailto:sales@uscargo.us?Subject=Internet%20Inquiry" target="_top">sales@uscargo.us</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">Partners</h2>
            <p className="card-text">US Cargo has partnered with many excellent shippers throught the us including NEMF, Central Transport, and FedEx.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
