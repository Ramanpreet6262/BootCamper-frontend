import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ManageBootcamp.css';
import img1 from '../../static/image_1.jpg';

class ManageBootcamp extends Component {
  render() {
    return (
      <div className='manageBootcamp'>
        <section className='container mt-5'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <div className='card bg-white py-2 px-4'>
                <div className='card-body'>
                  <h1 className='mb-4'>Manage Bootcamp</h1>
                  <div className='card mb-3'>
                    <div className='row no-gutters'>
                      <div className='col-md-4'>
                        <img src={img1} className='card-img' alt='...' />
                      </div>
                      <div className='col-md-8'>
                        <div className='card-body'>
                          <h5 className='card-title'>
                            <Link to='bootcamp.html'>Devworks Bootcamp</Link>
                          </h5>
                          <span className='badge badge-dark mb-2'>
                            Boston, MA
                          </span>
                          <p className='card-text'>
                            Web Development, UI/UX, Mobile Development
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className='mb-4'>
                    <div className='form-group'>
                      <div className='custom-file'>
                        <input
                          type='file'
                          name='photo'
                          className='custom-file-input'
                          id='photo'
                        />
                        <label className='custom-file-label' for='photo'>
                          Add Bootcamp Image
                        </label>
                      </div>
                    </div>
                    <input
                      type='submit'
                      className='btn btn-light btn-block'
                      value='Upload Image'
                    />
                  </form>
                  <Link
                    to='add-bootcamp.html'
                    className='btn btn-primary btn-block'
                  >
                    Edit Bootcamp Details
                  </Link>
                  <Link
                    to='manage-courses.html'
                    className='btn btn-secondary btn-block'
                  >
                    Manage Courses
                  </Link>
                  <Link to='#' className='btn btn-danger btn-block'>
                    Remove Bootcamp
                  </Link>
                  <p className='text-muted mt-5'>
                    * You can only add one bootcamp per account.
                  </p>
                  <p className='text-muted'>
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper.
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

export default ManageBootcamp;
