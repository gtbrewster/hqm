import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBBtn
} from 'mdbreact';
import './MaintenancePage.css';

class MaintenancePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      {/*<img
                        src='https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png'
                        alt='mdbreact-logo'
                        className='pr-2'
                      />*/}
                      Maintenance
                    </strong>
                  </h2>
                  <p>
                    Out team installs cubicles, private offices, conference rooms, break rooms, cafeteria furniture, etc.
                  </p>
                  <p className='pb-4'>
                    We disasemble, load, transport, and deliver all types of furniture we work with!
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          
        </div>
      </>
    );
  }
}

export default MaintenancePage;
