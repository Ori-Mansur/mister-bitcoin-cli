import React from 'react';
import ContactService from '../ContactService'
import { loadContact } from '../actions'
import { connect } from 'react-redux'


class ContactEdit extends React.Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }
    editContact = (ev, field) => {
        const { value } = ev.target
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [field]: value
                }
            }
        })
    }
    handleForm = async (ev) => {
        ev.preventDefault()
        await ContactService.saveContact(this.state.contact)
        this.props.history.push('/contact')

    }
    async componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            const {contact} = await this.props.loadContact(id)
            console.log(contact, 'jjjj');
            this.setState({ contact })
        }

    }
    render() {
        let { contact } = this.state


        return (
            <div className="ContactDetails">
                <form onSubmit={this.handleForm} >
                    <label> Name:
                    <input type="text" value={contact.name} onChange={(ev) => this.editContact(ev, 'name')} />
                    </label>
                    <label > Email:
                    <input type="email" name="email" value={contact.email} onChange={(ev) => this.editContact(ev, 'email')} />
                    </label>
                    <label > Phone:
                    <input type="tel" name="tel" value={contact.phone} onChange={(ev) => this.editContact(ev, 'phone')} />
                    </label>
                    <button>Save</button>

                </form>


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
)(ContactEdit)