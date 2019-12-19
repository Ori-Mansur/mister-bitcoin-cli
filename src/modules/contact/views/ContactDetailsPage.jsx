import React from 'react';

import ContactPreview from '../components/ContactPreview'
import { Link } from 'react-router-dom'
import { loadContact } from '../actions'
import { connect } from 'react-redux'

class ContactDetails extends React.Component {
    state = {
        contact: null
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        this.props.loadContact(id)
    }
    render() {
        let { contact } = this.props
        return (
            <div className="ContactDetails container">
                <Link to={`/contact`}>
                    <button>Back</button>
                </Link>
                {contact && <ul>
                    <Link to={`/contact/edit/${contact._id}`}>
                        <button>Edit</button>
                    </Link>
                    <ContactPreview contact={contact} />
                </ul>
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadContact,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails)