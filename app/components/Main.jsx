var React = require('react');
const Nav = require('Nav');


var Main = (props) => {
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-6 small-centered">
            {props.children}
          </div>
        </div>  
      </div>
    );
  }
module.exports = Main;
