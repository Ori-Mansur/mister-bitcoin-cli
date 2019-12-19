import React from 'react';
import BitcoinService from '../BitcoinService'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';
import {getMarketPrice} from '../actions'
import { connect } from 'react-redux'


class StatisticPage extends React.Component {
    async componentDidMount() {
       await this.props.getMarketPrice()
    }
    render() {
        let { marketPrice } = this.props
        return (
            <div className="StatisticPage container">
                {marketPrice &&
                    <div className="Chart">
                        <Sparklines data={marketPrice.map(v => v.y)} >
                            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                            <SparklinesLine style={{ stroke: "#41c3f9", fill: "#41c3f9" }} />
                        </Sparklines>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        marketPrice: state.bitcoin.marketPrice
    }
}

const mapDispatchToProps = {
    getMarketPrice,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticPage)