var React = require('react');

var SecondNumber = React.createClass({

  getInitialState: function() {
    return{value: ""};
  },
  onChange : function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return(
      <input className="form-control" placeholder="Second Number" id="fieldNum2" onChange={this.onChange} value={this.state.value} />
    );
  }
});

module.exports = SecondNumber;
