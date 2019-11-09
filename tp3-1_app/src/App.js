import React from 'react';
import './App.css';


class Container extends React.Component{
  render() {
    return(
        <div className="container">
          <Navbar />
          <Main />
        </div>
    );
  }
}

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(i){
    // Dès qu'on clique sur un button
  }

  render() {
    const profil = [{name: "Boby"}, {name: "Martine"}, {name: "Camille"}];

    const profils = profil.map( profil =>
        <button>
          {profil.name}
        </button>
    );

    return(
        <div className="nav">
          {profils}
        </div>
    );
  }
}

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photo: "/img/boby.jpg",
      prenom: "Xavier",
      nom: "DE CAZENOVE",
      date_naissance: "10/07/1997",
      lastComment: "Bla bla bla..."
    };
  }
  render() {
    return(
        <div className="main">
          <div className="box-profil">
            <img src={this.state.photo} alt="photo_profil"/>
            <div className="box-profil-description">
              <a>{this.state.prenom}</a>
              <a>{this.state.nom}</a>
              <a>{this.state.date_naissance}</a>
            </div>
            <div className="box-profil-style">
              <button>Style</button>
            </div>
            <div>

            </div>
          </div>
          <div className="box-last-comment">
            <a>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </a>
            <button>C'est super !</button>
          </div>
        </div>
    );
  }
}

class Profil extends React.Component{

}

class LastComment extends React.Component{

}

export default Container;
