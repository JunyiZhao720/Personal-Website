import React, { Component } from 'react';
import CustomizedTransition from './customizedTransition';
import ControlledCarosel from './controlledCarousel';


class Profile extends Component {
    state = {
        main_title: "Profile Page",
        main_description: "This page is mainly used for profile display!",
        footer_contact: "Github Page",
        footer_address: "https://www.google.com/",
    };
    render() { 
        return (
          <React.Fragment>
            <CustomizedTransition timeout={2000} classNames={"fade"} >

              <main role="main" className="row inner cover">

                <div className="col-sm">
                  <h1 className="cover-heading">{this.state.main_title}</h1>
                  <p className="lead">{this.state.main_description}</p>
                  <p className="lead">
                    <a href="/" className="btn btn-lg btn-secondary">Home</a>
                  </p>
                </div>     

                <div className="col-sm">
                  {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="https://i.imgur.com/J8oZ6J3.jpg" alt="First slide" style={{width: "200px", height: "300px" }}/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="https://channel-korea.com/wp-content/uploads/2018/07/taeyeon.jpg" alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="https://vignette.wikia.nocookie.net/kpop/images/c/cf/Taeyeon_%28Purpose%29_promo_photo_1.png/revision/latest?cb=20200110034639" alt="Third slide"/>
                      </div>
                    </div>
                  </div> */}
                  <ControlledCarosel />
                  

                </div>

              </main>
            </CustomizedTransition>
          
          <footer className="mastfoot mt-auto">
            <div className="inner">
            <p>{this.state.footer_contact} <a href={this.state.footer_address}>{ this.state.main_title }</a></p>
            </div>
            </footer>
          </React.Fragment>
        );
    }
}
 
export default Profile;