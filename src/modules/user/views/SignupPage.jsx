import React from 'react';

import { signup } from '../actions'
import { connect } from 'react-redux'


class SignupPage extends React.Component {
    state = {
        user: {
            name: '',
            email: ''
        }
    }
    editContact = (ev, field) => {
        const { value } = ev.target
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [field]: value
                }
            }
        })
    }
    handleForm = async (ev) => {
        ev.preventDefault()
        await this.props.signup(this.state.user)
        this.props.history.push('/')
    }

    render() {
        let { user } = this.state
        return (
            <div className="SignupPage">
                <h2>Signup</h2>
                <form onSubmit={this.handleForm} >
                    <label> Name:
                    <input type="text" value={user.name} onChange={(ev) => this.editContact(ev, 'name')} />
                    </label>
                    <label > Email:
                    <input type="email" name="email" value={user.email} onChange={(ev) => this.editContact(ev, 'email')} />
                    </label>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    signup
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage)