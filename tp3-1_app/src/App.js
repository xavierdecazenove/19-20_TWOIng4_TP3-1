import React from 'react';
import './App.css';
import Boby from './img/Boby.png';
import Camille from './img/Camille.png';
import Martine from './img/Martine.png';


class NavBar extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                {this.props.prenom}
            </button>
        );
    }
}

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
            <div className="box-profile" style={{backgroundColor: this.state.bgColor}}>
                <img src={this.props.photo} alt="photo_profile"/>
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

class LastComment extends React.Component {
    render() {
        return(
            <div className="box-last-comment">
                <a>{this.props.lastComment}</a>
                <button onClick={this.props.onClick}>👍 C'est super ! {this.props.likes}</button>
            </div>
        );
    }
}

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profile : [
        {
          photo: Camille,
          prenom: "Camille",
          nom: "DURAND",
          date_naissance: "15/06/1997",
          lastComment: "Coucou c'est moi ! Camille 😉",
          likes: 0
        },
        {
          photo: Martine,
          prenom: "Martine",
          nom: "VA A L'ECOLE",
          date_naissance: "01/03/1997",
          lastComment: "Besoin d'un cours particulier ? Venez en MP ♥️",
          likes: 0
        },
        {
          photo: Boby,
          prenom: "Boby",
          nom: "LE BRICOLEUR",
          date_naissance: "21/11/1997",
          lastComment: "J'ai un garage avec plein d'outils 🧰 ! Venez si vous avez des choses à réparer 🛠",
          likes: 0
        }
      ],
      show_profile: 0
    };
  }

  handleClick(i){
      this.setState({show_profile: i})
  }

  handleClickLikes(i){
      const profileCopy = this.state.profile.slice();
      profileCopy[i].likes++;
      this.setState({profile: profileCopy})
  }

  render() {
    return(
        <body className="Container">
          <header>
            <nav className="nav">
              <NavBar
                  prenom={this.state.profile[0].prenom}
                  onClick={() => this.handleClick(0)}/>
              <NavBar
                  prenom={this.state.profile[1].prenom}
                  onClick={() => this.handleClick(1)}/>
              <NavBar
                  prenom={this.state.profile[2].prenom}
                  onClick={() => this.handleClick(2)}/>
            </nav>
          </header>
          <div className="profile">
            <Profile
                photo={this.state.profile[this.state.show_profile].photo}
                prenom={this.state.profile[this.state.show_profile].prenom}
                nom={this.state.profile[this.state.show_profile].nom}
                date_naissance={this.state.profile[this.state.show_profile].date_naissance}
            />
            <LastComment
                lastComment={this.state.profile[this.state.show_profile].lastComment}
                likes={this.state.profile[this.state.show_profile].likes}
                onClick={() => this.handleClickLikes(this.state.show_profile)}/>
          </div>
        </body>
    );
  }
}

export default Container;
