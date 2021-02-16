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
import './HomePage.css';

class HomePage extends React.Component {
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
                      South Florida's Solution to Office and Home Relocation!
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>Headqurters Moving has one goal in mind, that is to make the moving experience exuberant! We know first hand how exiting it can be to relocate, and our team helps deliver peace-of-mind with experienced professionals. </p>
                  <p className='pb-4'>
                  The Headquarters Movers practice safe moving techniques along with various installation skills, such as, Office Furniture, T.V./Monitor Mounts, shelves for electronics, Hanging Pictures, 
                  </p>
                  
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is Headquarters Moving so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  We are a small, newly formed, company with low overhead resulting in a direct savings to our customers.
                </p>
                <p className='text-center text-muted mb-1'>
                  If you prefer to make your move during week nights or weekends, no problem! We will accomadate you at no extra cost! 
                </p>
                <p className='text-center text-muted'>
                  This team cares! We, The Headquarters Movers, treat the customers possesions as our own. We are efficient and cautious while at work!
                </p>
                <hr className='my-5' />

              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
              <MDBCardBody className='text-center'>
                  <h1>
                    <strong>
                    561-291-9217
                    </strong>
                  </h1>
                  <h2 className='h2-responsive mb-4'>
                    <strong className='font-weight-bold'>
                      {/*<img
                        src='https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png'
                        alt='mdbreact-logo'
                        className='pr-2'
                      />*/}
                      CONTACT US FOR A FREE QUOTE 
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>Relocation of Office and Home</p>
                  <p className='pb-1'>
                  Furiture Installation and Repair
                  </p>
                  <p className='pb-1'>
                  Maintenance Services
                  </p>
                  <p className='pb-1'>
                  HeadquartersMovers@gmail.com
                  </p>
                  
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </div>
      </>
    );
  }
}

export default HomePage;
