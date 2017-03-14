var React = require('react');
require('./AddList.css');
var AddList = React.createClass({
    getInitialState: function () {
      return {
        nameText: '',
        phoneText: ''
      };
    },
    handlePhoneChange: function(event) {        //функция записи введенного текста в состояние
        this.setState({ phoneText: event.target.value });    //текст берем из объекта евент
    },
    handleNameChange: function(event) {        //функция записи введенного текста в состояние
        this.setState({ nameText: event.target.value });    //текст берем из объекта евент
    },
    handleNewContactAdd: function() {
      var newContact = {
        id: Date.now(),
        name: this.state.nameText,
        phoneNumber: this.state.phoneText
      };
      this.props.onContactAdd(newContact);
      this.setState({
        nameText: '',
        phoneText: ''
      })
    },
    render: function() {
        return (
            <div className="add-list">
              <div className="input-list">
                <input type="text" value={this.state.nameText} placeholder="Write Name" className="contact-input" onChange={this.handleNameChange} />
                <input type="text" value={this.state.phoneText} placeholder="Write Number" className="contact-input"onChange={this.handlePhoneChange} />
              </div>
              <button className="add-button" onClick={this.handleNewContactAdd}>Add</button>
            </div>
        );
    }
});

module.exports = AddList;
