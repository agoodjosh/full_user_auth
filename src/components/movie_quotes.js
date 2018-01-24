import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

class MovieQuotes extends Component {

    componentDidMount() {
        if (this.props.auth) {
            this.props.getQuote();
        }
    }

    render() {
        return (
            <div>
                <h1 className="center-align">Movie Quote</h1>
                <h3>{this.props.quote}</h3>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, { getQuote })(MovieQuotes);