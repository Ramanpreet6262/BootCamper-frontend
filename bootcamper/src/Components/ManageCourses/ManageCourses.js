import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ManageCourses.css';
import img1 from '../../static/image_1.jpg';

class ManageCourses extends Component {
  render() {
    return (
      <div className='manageCourses'>
        <section className='container mt-5'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <div className='card bg-white py-2 px-4'>
                <div className='card-body'>
                  <Link
                    to='manage-bootcamp.html'
                    className='btn btn-link text-secondary my-3'
                  >
                    <i className='fas fa-chevron-left'></i> Manage Bootcamp
                  </Link>
                  <h1 className='mb-4'>Manage Courses</h1>
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
                  <Link
                    to='add-course.html'
                    className='btn btn-primary btn-block mb-4'
                  >
                    Add Bootcamp Course
                  </Link>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Front End Web Development</td>
                        <td>
                          <Link
                            to='add-course.html'
                            className='btn btn-secondary'
                          >
                            <i class='fas fa-pencil-alt'></i>
                          </Link>
                          <button className='btn btn-danger'>
                            <i class='fas fa-times'></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Full Stack Web Development</td>
                        <td>
                          <Link
                            to='add-course.html'
                            className='btn btn-secondary'
                          >
                            <i className='fas fa-pencil-alt'></i>
                          </Link>
                          <button className='btn btn-danger'>
                            <i className='fas fa-times'></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ManageCourses;
