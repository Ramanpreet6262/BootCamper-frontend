import React, { Component } from 'react';
import './AddBootcamp.css';

class AddBootcamp extends Component {
  render() {
    return (
      <div className='addBootcamp'>
        <section className='container mt-5'>
          <h1 className='mb-2'>Add Bootcamp</h1>
          <p>
            Important: You must be affiliated with a bootcamp to add to
            BootCamper
          </p>
          <form>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card bg-white py-2 px-4'>
                  <div className='card-body'>
                    <h3>Location & Contact</h3>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Bootcamp Name'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label>Address</label>
                      <input
                        type='text'
                        name='address'
                        className='form-control'
                        placeholder='Full Address'
                        required
                      />
                      <small className='form-text text-muted'>
                        Street, city, state, etc
                      </small>
                    </div>
                    <div className='form-group'>
                      <label>Phone Number</label>
                      <input
                        type='text'
                        name='phone'
                        className='form-control'
                        placeholder='Phone'
                      />
                    </div>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='text'
                        name='email'
                        className='form-control'
                        placeholder='Contact Email'
                      />
                    </div>
                    <div className='form-group'>
                      <label>Website</label>
                      <input
                        type='text'
                        name='website'
                        className='form-control'
                        placeholder='Website URL'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card bg-white py-2 px-4'>
                  <div className='card-body'>
                    <h3>Other Info</h3>
                    <div className='form-group'>
                      <label>Description</label>
                      <textarea
                        name='description'
                        rows='5'
                        className='form-control'
                        placeholder='Description (What you offer, etc)'
                        maxlength='500'
                      ></textarea>
                      <small className='form-text text-muted'>
                        No more than 500 characters
                      </small>
                    </div>
                    <div className='form-group'>
                      <label>Careers</label>
                      <select name='careers' className='custom-select' multiple>
                        <option selected>Select all that apply</option>
                        <option value='Web Development'>Web Development</option>
                        <option value='Mobile Development'>
                          Mobile Development
                        </option>
                        <option value='UI/UX'>UI/UX</option>
                        <option value='Data Science'>Data Science</option>
                        <option value='Business'>Business</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='housing'
                        id='housing'
                      />
                      <label className='form-check-label' for='housing'>
                        Housing
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='jobAssistance'
                        id='jobAssistance'
                      />
                      <label className='form-check-label' for='jobAssistance'>
                        Job Assistance
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='jobGuarantee'
                        id='jobGuarantee'
                      />
                      <label className='form-check-label' for='jobGuarantee'>
                        Job Guarantee
                      </label>
                    </div>
                    <p className='text-muted my-4'>
                      *After you add the bootcamp, you can add the specific
                      courses offered
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value='Submit Bootcamp'
                className='btn btn-success btn-block my-4'
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default AddBootcamp;
