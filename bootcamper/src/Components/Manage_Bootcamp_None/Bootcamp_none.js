import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bootcamp_none.css';

class Bootcamp_none extends Component {
  render() {
    return (
      <div className='bootcamp-none'>
        <section className='container mt-5'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <div className='card bg-white py-2 px-4'>
                <div className='card-body'>
                  <h1 className='mb-2'>Manage Bootcamp</h1>
                  <p className='lead'>You have not yet added a bootcamp</p>
                  <Link to='/' className='btn btn-primary btn-block'>
                    Add Bootcamp
                  </Link>
                  <p className='text-muted mt-5'>
                    * You can only add one bootcamp per account.
                  </p>
                  <p className='text-muted'>
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to BootCamper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Bootcamp_none;
