import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";

import meChar from "./meChars.json";
import CharCard from "./components/CharCard/CharCard.js";

//sets state for our components
class App extends Component {
  state = {
      meChar,
      clicked: [],
      score: 0,
      topScore: 0
  };

  updateTopScore = () => {
        console.log(this.state.score)
        console.log(this.state.topScore)
      if (this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score });
          console.log(this)
      }
  };

  //when you click on a player get the current player and remove them from the array
  imageClick = e => {
    const currentChar = e.target.alt;
    const pickedChar = this.state.clickedChar.indexOf(currentChar) > -1;

    //if you click on a player that has already been clicked, reset the game and shuffle players
    if (pickedChar) {
        this.setState({
            meChar: this.state.meChar.sort(function (a, b) {
                return 0.5 - Math.random();
            }),
            clickedChar: [],
            score: 0
        });
        alert("You already clicked this player! You lose. Try again!");
        this.updateTopScore();

        //if you click on an available player, your score is increased and players are shuffled
    } else {
        this.setState(
            {
                meChar: this.state.meChar.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                clickedChar: this.state.clickedChar.concat(
                    currentChar
                ),
                score: this.state.score + 1
            },
            //When user correctly clicks all 12 players their score is increased and the players are shuffled     
            () => {
                if (this.state.score === 12) {
                    alert("Congrats! You Win! You are a super fan!");
                    this.updateTopScore();
                    this.setState({
                        meChar: this.state.meChar.sort(function (a, b) {
                            return 0.5 - Math.random();
                        }),
                        clickedChar: [],
                        score: 0
                    });
                }
            }
        );
    }
};

  // Map over this.state.meChars and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.meChar.map(meChar => (
          <CharCard
            imageClick={this.imageClick}
            id={meChar.id}
            key={meChar.id}
            image={meChar.image}
            name={meChar.name}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
