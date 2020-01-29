import React from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    // <div>
    //   <header className="masthead mb-auto">
    //     <div className="inner">
    //       <h3 className="masthead-brand">Waterloo</h3>
    //       <nav className="nav nav-masthead justify-content-center">
    //         <a className="nav-link active" href="#">Home</a>
    //         <a className="nav-link" href="#">Blogs</a>
    //         {/* <a className="nav-link" href="#">Contact</a> */}
    //       </nav>
    //     </div>
    //   </header>

    //   <main role="main" className="inner cover">
    //     <h1 className="cover-heading">University Of Waterloo</h1>
    //     <p className="lead">The University of Waterloo (commonly referred to as Waterloo, UW, or UWaterloo) is a public research university with a main campus in Waterloo, Ontario, Canada. </p>
    //     <p className="lead">
    //       <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
    //     </p>
    //   </main>

    //   <footer className="mastfoot mt-auto">
    //     <div className="inner">
    //       <p>University of Waterloo <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    //     </div>
    //   </footer>
    // </div>

    <React.Fragment>
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            {/* <a class="nav-link" href="#">Contact</a> */}
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
