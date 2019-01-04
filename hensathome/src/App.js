import React, { Component } from "react";
import Overlay from "./components/overlay/overlay";
import Instafeed from "react-instafeed";
import ReactGA from "react-ga";

import "./assets/css/bootstrap.css";
import "./assets/css/courgettefont.css";
import "./assets/css/styles.css";

ReactGA.initialize("UA-32083114-11");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    const instafeedTarget = "instafeed";
    return (
      <section className="App view footer-instagram">
        <Overlay />
        <div className="container-fluid no-gutters footer-images">
          <div className="row no-gutters" id={instafeedTarget}>
            <Instafeed
              limit="8"
              ref="instafeed"
              resolution="standard_resolution"
              sortBy="most-recent"
              target={instafeedTarget}
              template='<div class="col-md-3 no-padding"><div class="square" style="background-image: url({{image}})"></div></div>'
              userId={process.env.INSTAGRAM_USER_ID}
              clientId={process.env.INSTAGRAM_CLIENT_ID}
              accessToken={process.env.INSTAGRAM_ACCESS_TOKEN}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
