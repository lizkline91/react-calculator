var React = require('react');
var AddNumbers = require('./AddButton.jsx');
var SubtractNumbers = require('./SubtractButton.jsx');
var DivideNumbers = require('./DivideButton.jsx');
var MultiplyNumbers = require('./MultiplyButton.jsx');

var ResultNumber = React.createClass({
  getInitialState: function() {
    return{value: ""};
  },
  render: function() {
    return(
      <input id="calc-answer" className="form-control" type="text" />
    );
  }
});

module.exports = ResultNumber;
