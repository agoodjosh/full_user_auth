import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';


const Nav = props => {
    const navStyles = {
        padding: '0 10px'
    };

    function renderAuthLinks() {
        if (props.auth) {
            return (
                <li>
                    <Link onClick={props.logOut} to="/" >Log Out</Link>
                </li>
            )
        }

        return [
            <li key="0">
                <Link to="/sign-in">Sign In</Link>
            </li>,
            <li key="1">
                <Link to="/sign-up">Sign Up</Link>
            </li>
        ];
    };

    return (
        <nav style={navStyles} className="blue darken-4">
            <Link className="brand-logo" to="/" >Movie Quotes</Link>
            <ul className="right">
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/movie-quotes">Movie Quotes</Link>
                </li>
                {renderAuthLinks()}
            </ul>
        </nav>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
};

export default connect(mapStateToProps, { logOut })(Nav);