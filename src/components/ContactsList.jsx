var React = require('react');
var Contact = require('./Contact.jsx');
require('./ContactsList.css');
var ContactsList = React.createClass({
    render: function() {
      var onContactDelete = this.props.onContactDelete;
        return (
            <div className="contacts-list">
              <ul>
                {
                  this.props.contacts.map(function(contact){
                    return (
                      <Contact
                        key={contact.id}
                        name={contact.name}
                        phoneNumber={contact.phoneNumber}
                        onDelete={onContactDelete.bind(null, contact)}
                      />
                    );
                  })
                }
              </ul>
            </div>
        );
    }
});

module.exports = ContactsList;
