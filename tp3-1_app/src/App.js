import React from 'react';
import './App.css';
import Boby from './img/Boby.png';
import Camille from './img/Camille.png';
import Martine from './img/Martine.png';
import LastComment from "./LastComment.js";
import Profile from "./Profile.js";
import NavBar from "./Navbar.js";

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
    const profiles = [];

    for (const [index, value] of this.state.profile.entries()) {
      profiles.push(<NavBar prenom={value.prenom}
                            onClick={() => this.handleClick(index)}
      />)
    }

    return(
        <body className="Container">
          <header>
            <nav className="nav">
              {profiles}
            </nav>
          </header>
          <main className="profile">
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
          </main>
        </body>
    );
  }
}

export default Container;