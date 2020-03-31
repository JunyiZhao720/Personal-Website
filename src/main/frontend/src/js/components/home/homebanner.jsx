import React, { Component } from 'react';
import CustomizedTransition from './customizedTransition';
import Header from '../header/header';

class HomeBanner extends Component {
    state = {
        main_title: "University Of Waterloo",
        main_description: "The University of Waterloo (commonly referred to as Waterloo, UW, or UWaterloo) is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares (998 acres) of land adjacent to Uptown Waterloo and Waterloo Park.",
        footer_contact: "Github Page",
        footer_address: "https://www.google.com/",
    };

    handleSelection = () => {
      console.log(this.state.selection);
    }

    render() { 
        return (
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <CustomizedTransition timeout={2000} classNames={"fade"} >
              <main role="main" className="inner cover">
                <h1 className="cover-heading">{this.state.main_title}</h1>
                <p className="lead">{this.state.main_description}</p>
                <p className="lead">
                  <a href="/profile" className="btn btn-lg btn-secondary">Learn more</a>
                </p>
              </main>
            </CustomizedTransition>

            <footer className="mastfoot mt-auto">
              <div className="inner">
                <p>{this.state.footer_contact} <a href={this.state.footer_address}>{ this.state.main_title }</a></p>
              </div>
            </footer>
          </div>
        );
    }
}

export default HomeBanner;