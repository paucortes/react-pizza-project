var data = require('./data.js');
var React = require('react');

var Order = React.createClass({
    getInitialState: function() {
        var info = data.getData('info') || {};
        return {
            userName: info.userName || '',
            email: info.email || '',
            address: info.address || '',
            phoneNumber: info.phoneNumber || ''
        };
    },
    handleChange: function(fieldThatChanged, ev) {
        var newState = {};
        newState[fieldThatChanged] = ev.target.value;
        this.setState(newState);
    },
    continueOrder: function() {
        data.setData('info', this.state);
        this.props.history.push('/choose');
    },
    render: function() {
        var disabled = this.state.userName.length === 0 || this.state.email.length === 0 || this.state.address.length === 0 || this.state.phoneNumber.length === 0;
        var that = this;
        return (
            <div className="jumbotron">
            <h1>Your information</h1>
            <p>Enter your information below so we can send you your pizza!</p>
            <form className="userInfo">
                <div className="userInfoBoxes">
                    <p>Name:</p>
                    <input className="userName" value={this.state.userName} onChange={ function(ev) {that.handleChange('userName', ev); } }></input>
                </div>
                <div className="userInfoBoxes">
                    <p>e-mail:</p>
                    <input className="email" value={this.state.email} onChange={ function(ev) {that.handleChange('email', ev); } }></input>
                </div>
                <div className="userInfoBoxes">
                    <p>Address:</p>
                    <input className="address" value={this.state.address} onChange={ function(ev) {that.handleChange('address', ev); } }></input>
                </div>
                <div className="userInfoBoxes">
                    <p>Phone number:</p>
                    <input className="phoneNumber" value={this.state.phoneNumber} onChange={ function(ev) {that.handleChange('phoneNumber', ev); } }></input>
                </div>
            </form>
            <button onClick={this.continueOrder} className='btn btn-primary' disabled={disabled} href="/choose">Submit!</button>
      </div>
        );
    }
});

module.exports = Order;