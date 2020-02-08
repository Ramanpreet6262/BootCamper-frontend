import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <section className='showcase'>
          <div className='dark-overlay'>
            <div className='showcase-inner container'>
              <h1 className='display-4'>
                <b>Find a Code Bootcamp</b>
              </h1>
              <p className='lead'>
                Get info regarding various Bootcamps and choose the one that
                suits you
              </p>
              <form>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        name='miles'
                        placeholder='Miles From'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        name='zipcode'
                        placeholder='Enter Zipcode'
                      />
                    </div>
                  </div>
                </div>
                <input
                  type='submit'
                  value='Find Bootcamps'
                  className='btn btn-primary btn-block'
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
