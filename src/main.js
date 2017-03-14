var ReactDOM = require('react-dom');
var React = require('react');
var ContactsApp = require('./components/ContactsApp.jsx');

ReactDOM.render(
    <ContactsApp />,
    document.getElementById('mount-point')
);
