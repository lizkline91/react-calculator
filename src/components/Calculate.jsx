var React = require('react');
var FirstNumber = require('./1stNumberField.jsx');
var SecondNumber = require('./2ndNumberField.jsx');
var AddNumbers = require('./AddButton.jsx');
var SubtractNumbers = require('./SubtractButton.jsx');
var DivideNumbers = require('./DivideButton.jsx');
var MultiplyNumbers = require('./MultiplyButton.jsx');
var ResultNumber = require('./ResultNumber.jsx');

var Calculate = React.createClass({
  onSubmit: function(e){
    document.getElementById("fieldNum1").value = "";
    document.getElementById("fieldNum2").value = "";
    document.getElementById("calc-answer").value = "";
  },
  render: function() {
    return(
      <div className="col-sm-8 col-sm-offset-2">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>React Calculator</h1>
            <div className="row">
              <div className="col-sm-6">
                <FirstNumber type="number" ref="fieldNum1"/>
              </div>
              <div className="col-sm-6">
                <SecondNumber type="number" ref="fieldNum2"/>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-3">
                <AddNumbers type="add" ref="addNumbers" />
              </div>
              <div className="col-sm-3">
                <SubtractNumbers type="subtract" ref="subtractNumbers" />
              </div>
              <div className="col-sm-3">
                <DivideNumbers type="divide" ref="divideNumbers" />
              </div>
              <div className="col-sm-3">
                <MultiplyNumbers type="multiply" ref="multiplyNumbers" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-9">
                <ResultNumber type="number" />
              </div>
              <div className="col-sm-3">
                <button className="btn btn-danger" onClick={this.onSubmit}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculate;
