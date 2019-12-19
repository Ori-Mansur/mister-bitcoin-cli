import React from 'react';
import ContactPreview from './ContactPreview'
import {Link} from 'react-router-dom'
function ContactList({contacts}) {
    // console.log(props);
    
    return (
      <ul className="ContactList">
          {contacts.map((contact)=>
           <Link to={`/contact/${contact._id}`} key={contact._id}>
               <ContactPreview contact={contact} />
           </Link>
          )}
      </ul>
    );
  }
  
  export default ContactList;