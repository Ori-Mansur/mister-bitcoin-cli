
import React from 'react';


function ContactPreview({contact}) {
    return (
      <li className="ContactPreview">
        <img src={`https://robohash.org/${contact.name}?set=set2`} alt=""/>
          <div><h4>Name:</h4>{contact.name}</div>
          <div><h4>Email:</h4>{contact.email}</div>
          <div><h4>Phone:</h4> {contact.phone}</div>
      </li>
    );
  }
  
  export default ContactPreview;