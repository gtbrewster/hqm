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
  MDBNavLink
} from 'mdbreact';
import './InstallationPage.css';

class InstallationPage extends React.Component {
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
                      Furniture Installation
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
          {/*<MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>*/}
        </div>
      </>
    );
  }
}

export default InstallationPage;
