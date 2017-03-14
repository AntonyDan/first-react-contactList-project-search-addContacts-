var React = require('react');

var Contact = React.createClass({
    render: function() {
        return (
            <li>
              <p>{this.props.name}</p>
              <p>{this.props.phoneNumber} <span className="delete" onClick={this.props.onDelete}> X </span></p>
            </li>
        );
    }
});

module.exports = Contact;
