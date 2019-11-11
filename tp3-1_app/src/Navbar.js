import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                {this.props.prenom}
            </button>
        );
    }
}

export default NavBar;