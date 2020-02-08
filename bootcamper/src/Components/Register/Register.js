import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className='register'>
        <section className='form mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 m-auto'>
                <div className='card bg-white p-4 mb-4'>
                  <div className='card-body'>
                    <h1>
                      <i className='fas fa-user-plus'></i> Register
                    </h1>
                    <form>
                      <div className='form-group'>
                        <label for='name'>Name</label>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          placeholder='Enter full name'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label for='email'>Email Address</label>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          placeholder='Enter email'
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label for='password'>Password</label>
                        <input
                          type='password'
                          name='password'
                          className='form-control'
                          placeholder='Enter password'
                          required
                        />
                      </div>
                      <div className='card card-body mb-3'>
                        <h5>User Role</h5>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='role'
                            value='user'
                            checked
                          />
                          <label className='form-check-label'>
                            Regular User
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='role'
                            value='publisher'
                          />
                          <label className='form-check-label'>
                            Bootcamp Publisher
                          </label>
                        </div>
                      </div>
                      <p className='text-danger'>
                        * You must be affiliated with the bootcamp in some way
                        in order to add it to DevCamper.
                      </p>
                      <div className='form-group'>
                        <input
                          type='submit'
                          value='Register'
                          className='btn btn-primary btn-block'
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
