// Include React
var React = require("react");

// the grandchild is the actual posting of all the articles
var GrandChild = React.createClass({
  render: function() {
    return (
    <div className="row grandchild">
    <div className="col-md-3">     </div>
    <div className="col-md-9">
      
      <div className="panel panel-default ">
        <div className="panel-heading">
          <h3 className="panel-title">this is where the legislation is posted</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            This component will display 4 times what it's parent (Child) displays
          */}
          <h1>{this.props.number}</h1>

        </div>
      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;
