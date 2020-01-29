import React, { Component } from 'react';
import NavBar from './navBar'

class Index_1 extends Component {
    state = {
        header_title: "UW",
        main_title: "University Of Waterloo",
        main_description: "UW is a very good school!!!!!",
        footer_contact: "Github Page",
        footer_address: "https://www.google.com/"
    };
    render() { 
        return (
            <React.Fragment>
            <header className="masthead mb-auto">
              <div className="inner">
                <h3 className="masthead-brand">{this.state.main_title}</h3>
                <NavBar />
              </div>
            </header>
      
            <main role="main" className="inner cover">
              <h1 className="cover-heading">{this.state.main_title}</h1>
              <p className="lead">{this.state.main_description}</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
              </p>
            </main>
      
            <footer className="mastfoot mt-auto">
              <div className="inner">
                <p>{this.state.footer_contact} <a href={this.state.footer_address}>{ this.state.main_title }</a></p>
              </div>
            </footer>
          </React.Fragment>
        );
    }
}
 
export default Index_1;