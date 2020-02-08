import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Course_none.css';

class Course_none extends Component {
  render() {
    return (
      <div className='course-none'>
        <section className='container mt-5'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <div className='card bg-white py-2 px-4'>
                <div className='card-body'>
                  <h1 className='mb-2'>Manage Courses</h1>
                  <p className='lead'>You have not yet added any courses</p>
                  <Link to='/' className='btn btn-primary btn-block'>
                    Add Your first course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Course_none;
