import React from 'react';


function ContactFilter({callBack}) {

    
    return (
      <div className="ContactFilter">
<input type="text" onChange={(ev)=>callBack(ev.target.value)} placeholder="Search"/>
      </div>
    );
  }
  
  export default ContactFilter;