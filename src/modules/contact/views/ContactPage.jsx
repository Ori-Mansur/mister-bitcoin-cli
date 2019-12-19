import React from 'react';

import ContactList from '../components/ContactList'
import ContactFilter from '../components/ContactFilter'
import { Link } from 'react-router-dom'
import { getContacts } from '../actions'
import { connect } from 'react-redux'

class ContactPage extends React.Component {
   
    handelFilter = async (value) => {
        let filterBy = { term: value }
        this.props.getContacts(filterBy)
    }
    async componentDidMount() {
        this.props.getContacts()
    }
    render() {
        let { contacts } = this.props
        return (
            <div className="ContactPage container">
                <ContactFilter callBack={this.handelFilter} />
                <Link to={`/contact/edit`}>
    
                    <button>Add</button>
                    </Link>
                {contacts &&
                    <ContactList contacts={contacts} />
                }


            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contact.contacts
    }
}

const mapDispatchToProps = {
    getContacts,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)