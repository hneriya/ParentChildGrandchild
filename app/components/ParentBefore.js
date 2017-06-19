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
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron">
              <button className="btn btn-primary btn-lg" id="logout"> logout</button>
            <h2 >parent component renders everything in this jumbotron</h2>
            <div className="col-sm-2 jumbo-category"></div>
            <button className="col-sm-2 btn btn-info jumbo-category">senate</button>
            <button className="col-sm-2 btn btn-info jumbo-category">house</button>
            <button className="col-sm-2 btn btn-info jumbo-category">local</button>
            <div className="col-sm-4 jumbo-category"></div>
            <br></br>

            <p>
              {/* Here we create a button click.
              Note how we have an onClick event associate with our handleClick function. 

              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
              <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>


            */}

            </p>

          </div>

          <div className="col-sm-12 parent">
            <div className="panel panel-default">
              <div className="panel-heading">
                <p className="panel-title text-center">the parent component covers the entire page HOWEVER it only actually renders the jumbotron. anything below here is the "child" component and the "grandchild" is nested inside the child.</p>
              </div>
              <div className="panel-body text-center">
              <br></br>
              <br></br>

                {/* This is where we'll show the click count for the parent **<h1>{this.state.clicks}</h1>** */}

                    {/*
                  Here we'll render the Child component.
                  We'll pass it this component's clicks counter (this.state.clicks)
                  as a "prop" we will also name "clicks".
                  i.e.
                  <ComponentName propName={propValue} />
                */}
                <Child clicks={this.state.clicks * 2} />

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
