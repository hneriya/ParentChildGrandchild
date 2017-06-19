// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// the parent is the overall dashboard but it only actually displays the jumbrotron
var Parent = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },
  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },
  // Whenever the button is clicked we'll use setState to reset the clickCounter
  // This will reset the clicks -- and it will be passed  ALL children
  resetClick: function() {
    this.setState({ clicks: 0 });
  },

  // Here we render the function
  render: function() {
    return (
        <div className="container-fluid parent">
        <div className="row">
            <div className="col-md-12 title">
                <img src="./images/wh.png" className="logo" /> PolitiHub
                <div className= "elmasA">
                    <button type="button" href="" className="btn glyphicon glyphicon-user personal"></button>
                    <button type="button" className="btn personal"> Logout</button>
                </div>
            </div>
        </div>
    <div className="container-fluid">
        <div className="row col-md-12 button-row">
            <div className="elmasAA">
                <div className="col-md-6">
                    <p>
                        {/* Here we create a button click. Note how we have an onClick event associate with our handleClick function.
                        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
                        <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
                        */}
                    </p>
                </div>
            </div>
            <div className="col-md-12">
                            {/* This is where we'll show the click count for the parent **<h1>{this.state.clicks}</h1>** */}

                    {/*
                  Here we'll render the Child component.
                  We'll pass it this component's clicks counter (this.state.clicks)
                  as a "prop" we will also name "clicks".
                  i.e.
                  <ComponentName propName={propValue} />
                */}
                <div className="btn btn-group-justified">
                    <a href="#" className="btn categories">House</a>
                    <a href="#" className="btn categories">Senate</a>
                    <a href="#" className="btn categories">State</a>
                    <a href="#" className="btn categories">Local</a>

                </div>
            </div>
        </div>
    </div>

      <Child clicks={this.state.clicks * 2} />

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
