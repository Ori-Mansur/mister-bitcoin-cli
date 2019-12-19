import React from 'react';

import { getRate } from '../actions'
import { getUser } from '../../user/actions'
import { connect } from 'react-redux'
class Home extends React.Component {

    async componentDidMount() {
        const user = await this.props.getUser()
        if (!user) this.props.history.push('/signup')
        else {
            this.props.getRate()
        }
    }
    render() {
        let { user, rate } = this.props
        return (
            <div className="HomePage">
                {user && <div>
                    <h3>Hello: {user.name}</h3>
                    <h4>coins:</h4>{user.coins}$,
                   <h4>BTC:</h4>  {rate * user.coins}₿
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rate: state.bitcoin.rate,
        user: state.user.user
    }
}

const mapDispatchToProps = {
    getRate,
    getUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
