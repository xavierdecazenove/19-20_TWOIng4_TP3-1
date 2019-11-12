import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: ""
        }
    }

    handleClick = (e) => {
        if (this.state.bgColor === "cornflowerblue") {
            this.setState({
                bgColor: "white"
            })
        } else {
            this.setState({
                bgColor: "cornflowerblue"
            })
        }
    }

    render() {
        return(
            <div className="box-profile"
                 style={{backgroundColor: this.state.bgColor}}>
                <img src={this.props.photo}
                     alt="photo-profile"/>
                <div className="box-profile-description">
                    <a>{this.props.prenom}</a>
                    <a>{this.props.nom}</a>
                    <a>{this.props.date_naissance}</a>
                </div>
                <div className="box-profile-style">
                    <button id="style"
                            onClick={this.handleClick}>
                        Change style
                    </button>
                </div>
            </div>
        );
    }
}

export default Profile;