var React = require('react');
var AddList = require('./AddList.jsx');
var ContactsList = require('./ContactsList.jsx');
require('./ContactsApp.css');
var ContactsApp = React.createClass({
    getInitialState: function() {
      var defaultContacts = [
                          {
                              id: 1,
                              name: 'Darth Vader',
                              phoneNumber: '+250966666666'
                          }, {
                              id: 2,
                              name: 'Princess Leia',
                              phoneNumber: '+250966344466'
                          }, {
                              id: 3,
                              name: 'Luke Skywalker',
                              phoneNumber: '+250976654433'
                          }, {
                              id: 4,
                              name: 'Chewbacca',
                              phoneNumber: '+250456784935'
                          }
                      ];
        var displayedContacts = defaultContacts.slice();
      return {
          displayedContacts, defaultContacts
      };
    },
    handleContactAdd: function (newContact) {
      var newContacts = this.state.defaultContacts.slice();
      newContacts.unshift(newContact);
      this.setState({ defaultContacts: newContacts, displayedContacts: newContacts });
    },
    handleSearch: function(event) {
      var searchQuery = event.target.value.toLowerCase();
      var displayedContacts = this.state.defaultContacts.filter(function(el){
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !=-1;
      });
      this.setState({
        displayedContacts: displayedContacts
      });
    },
    handleContactDelete: function(contact) {
      var contactId = contact.id;
      var newContactList = this.state.defaultContacts.filter(function(contact) {
        return contact.id !== contactId;
      });
      this.setState({ defaultContacts: newContactList, displayedContacts: newContactList });  //апгр
    },
    render: function() {
        return (
            <div className="contacts-app">
              <AddList onContactAdd={this.handleContactAdd}/>
              <input
                type="text"
                placeholder="Search..."
                className="search-field"
                onChange={this.handleSearch}
              />
              <ContactsList contacts={this.state.displayedContacts} onContactDelete = {this.handleContactDelete}/>
            </div>
        );
    }
});

module.exports = ContactsApp;
