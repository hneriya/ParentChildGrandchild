// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
  render: function() {
    return (
    <div className="row grandchild">
    <div className="col-sm-12 display-box">
      
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title">this is where the legislation is posted</h3>
        </div>
        <div className="panel-body text-center">
        <h3> HB 2017 </h3>
        <h5> here we have a description of what the legislation will be, taken from the 'title' of the api </h5>
          {/*
            This component will display 4 times what it's parent (Child) displays

                      <h1>{this.props.number}</h1>

          */}
        <button> button </button>
        </div>
      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
