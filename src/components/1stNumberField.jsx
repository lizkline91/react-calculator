var React = require('react');

var FirstNumber = React.createClass({
  getInitialState: function() {
    return{value: ""};

  },
  onChange : function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return(
      <input className="form-control" placeholder="First Number" id="fieldNum1" onChange={this.onChange} value={this.state.value} />
    );
  }
});

module.exports = FirstNumber;
