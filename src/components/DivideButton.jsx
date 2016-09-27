var React = require('react');
var FirstNumber = require('./1stNumberField.jsx');
var SecondNumber = require('./2ndNumberField.jsx');

var DivideNumbers = React.createClass({
  getInitialState: function() {
    return{value: ""};
  },
  onSubmit : function () {
    var num1 = parseFloat(document.getElementById("fieldNum1").value);
    var num2 = parseFloat(document.getElementById("fieldNum2").value);
    var answer = (num1 / num2);
    document.getElementById('calc-answer').value = answer.toString();
  },
  render: function() {
    return(
      <button className="btn btn-primary" onClick={this.onSubmit}>Divide</button>
    );
  }
});

module.exports = DivideNumbers;
