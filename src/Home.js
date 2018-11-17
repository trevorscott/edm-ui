import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { API_ROOT } from './api-config';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uuid: this.props.uuid
    };
    this.produceClickMessage = this.produceClickMessage.bind(this);
  } 

  formatMessage(topic, properties) {
    const json = {
      "topic": topic,
      "uuid": this.props.uuid,
      "event_timestamp": Date.now(),
      "properties": properties
    }
    return json;
  }

  produceClickMessage(e) {
    console.log(e.target.id);
    const properties = {
      "button_id": `${e.target.id}`,
      "description": "button click"
    }

    // format message
    const msg = this.formatMessage("edm-ui-click", properties);

    // send message
    fetch(`${API_ROOT}/produceClickMessage`, {
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        Accept: 'application/json',
        origin: window.location.hostname,
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
      // make sure you get a successful response
      const res = response.json();
      console.log(res);
      return res;
    }, function(error) {
      console.error(error.message); //=> String
    })
  }

  producePageLoad() {
    const properties = {
      "user_agent": `${navigator.userAgent}`,
      "description": "fix coffee page page loaded",
      "url": window.location.origin
    }

    // format message
    const msg = this.formatMessage("edm-ui-pageload", properties);

    // send message
    fetch(`${API_ROOT}/producePageLoad`, {
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        Accept: 'application/json',
        origin: window.location.hostname,
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
      // make sure you get a successful response
      const res = response.json();
      console.log(res);
      return res;
    }, function(error) {
      // if not successful, retry
      console.error(error.message); //=> String
    })
  }

  componentDidMount() {
    this.producePageLoad();
  }

  render() {
    return (
      <div>
        <header>
          <div className="masthead-elements-row-1">
            <div className="element-left" />
            <div className="element-middle">
              <img className="logo" src="images/fix-logotype.png" alt="Fix" />
              <br />
              <span className="logo-text">Fine Coffee Kits</span>
            </div>
            <div className="element-right">
            </div>
          </div>
          <div className="masthead-elements-row-2">
            <div className="element-middle">
              <button id="browse-kits" onClick={this.produceClickMessage} className="btn btn-default" href="#">Browse Kits</button>
              <button id="browse-products" onClick={this.produceClickMessage} className="btn btn-trans" href="#">Browse Products</button>
            </div>
          </div>
        </header>
        <section className="textured-section">
          <h1>Curated Coffee Components</h1>
          <ul className="products">
            <li>
              <img className="product-image" src="images/products/071715_Heroku_3270-.jpg" alt="product photo" />
              <h3 className="product-name">AeroPress Coffee Maker</h3>
              <div className="product-price">$29.99</div>
              <div className="product-button"><button id="areopress-coffee-maker" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="product-image" src="images/products/071715_Heroku_3263-.jpg" alt="product photo" />
              <h3 className="product-name">MSR Reactor 2.5L Stove System</h3>
              <div className="product-price">$159.99</div>
              <div className="product-button"><button id="msr-reactor-2.5l-stove-system" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="product-image" src="images/products/071715_Heroku_3209-.jpg" alt="product photo" />
              <h3 className="product-name">Bunum Wo AA, Papua New Guinea</h3>
              <div className="product-price">$21.99</div>
              <div className="product-button"><button id="bunum-wo-aa,-papua-new-guinea" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="product-image" src="images/products/071715_Heroku_3302.jpg" alt="product photo" />
              <h3 className="product-name">Chemex Classic 6-cup Coffee Maker</h3>
              <div className="product-price">$39.99</div>
              <div className="product-button"><button id="chemex-classic-6-cup-coffee-maker" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
          </ul>
        </section>
        <section>
          <h1>Complete Brewing Kits</h1>
          <ul className="kits">
            <li>
              <img className="kit-image" src="images/kits/071715_Heroku_3338-Edit-.jpg" alt="product photo" />
              <h3 className="kit-name">The Chemex Kit</h3>
              <div className="kit-price">$396.96</div>
              <div className="kit-button"><button id="the-chemex-kit" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="kit-image" src="images/kits/071715_Heroku_3353-Edit-.jpg" alt="product photo" />
              <h3 className="kit-name">The Pour Over Kit</h3>
              <div className="kit-price">$171.96</div>
              <div className="kit-button"><button id="the-pour-over-kit" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="kit-image" src="images/kits/071715_Heroku_3346-.jpg" alt="product photo" />
              <h3 className="kit-name">The Camper’s Kit</h3>
              <div className="kit-price">$272.95</div>
              <div className="kit-button"><button id="the-camper's-kit" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="kit-image" src="images/kits/071715_Heroku_3376-Edit-.jpg" alt="product photo" />
              <h3 className="kit-name">The French Press Kit</h3>
              <div className="kit-price">$219.94</div>
              <div className="kit-button"><button id="the-french-press-kit" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
            <li>
              <img className="kit-image" src="images/kits/071715_Heroku_3385-.jpg" alt="product photo" />
              <h3 className="kit-name">The Cold Brew Kit</h3>
              <div className="kit-price">$133.96</div>
              <div className="kit-button"><button id="the-cold-brew-kit" onClick={this.produceClickMessage} className="btn btn-hot" href="#">Add to Cart</button></div>
            </li>
          </ul>
        </section>
        <footer>
          <div className="trailer-logo">
            <img className="logo" src="images/fix-logotype.png" alt="Fix" />
            <br />
            <span className="logo-text">Fine Coffee Kits</span>
          </div>
          <div className="trailer-links">
            <ul className="internal-links">
              <li><span href="#" id="about" onClick={this.produceClickMessage}>About</span></li>
              <li><span href="#" id="support" onClick={this.produceClickMessage}>Support</span></li>
              <li><span href="#" id="contact-us" onClick={this.produceClickMessage}>Contact Us</span></li>
            </ul>
            <ul className="social-links">
              <li><span>
                  <img id="twitter" className="social-logo" src="images/social/twitter.png" alt="twitter" onClick={this.produceClickMessage} />
                  <span className="social-verb">Follow on</span>
                  <span className="social-name">Twitter</span></span></li>
              <li><span  >
                  <img id="facebook" className="social-logo" src="images/social/facebook.png" alt="facebook" onClick={this.produceClickMessage} />
                  <span className="social-verb">Like Us on</span>
                  <span className="social-name">Facebook</span></span></li>
              <li><span>
                  <img id="instagram" className="social-logo" src="images/social/instagram.png" alt="instagram" onClick={this.produceClickMessage} />
                  <span className="social-verb">Follow on</span>
                  <span className="social-name">Instagram</span></span></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
