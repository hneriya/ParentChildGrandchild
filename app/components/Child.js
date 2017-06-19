// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// the child is the componenent that takes up all the space under the jumbotron in parent but only displays actual content on the left third of the page
var Child = React.createClass({
  render: function() {
    return (
    <div className="row child main-area">
    <div className="col-sm-3 filter-box">

      <div className="panel panel-default ">
      
        <div className="panel-heading">
          <h3 className="panel-title">box housing the filtering area:</h3>
        </div>
        <div className="panel-body text-center">
              <br></br>
              <br></br>
          {/*
            This component recieves a clicks variable as a prop from it's parent.
            <h1>{this.props.clicks}</h1>
          */}

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "number" which will be calculated by mutiplying this.props.clicks by 2
          */}
          <h3> here we insert all of the work elmas did on the left hand column with all the sorting info </h3>
        </div>
      </div>
      </div>
         <div className="col-sm-9">
          <GrandChild number={this.props.clicks * 4} />
         </div>
     </div>
   
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
