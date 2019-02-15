import React, {
  Component
} from 'react';
import {
  characters,
  navMessages
} from './data'
import NavResults from "./components/NavResults";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import "./App.css";

class App extends Component {

  state = {
    characters: characters,
    guessedIds: [],
    maxScore: 0,
    currScore: 0,
    navMsgCode: 0,
    navMsgs: navMessages,
  };


  componentDidMount() {
    this.setState({
      characters: this.state.characters.sort((a, b) => 0.5 - Math.random())
    })
  }

  cardClick = (id) => {
    const currentScore = this.state.currScore < 12 ?
      this.state.currScore + 1 : 1;

    if (!(this.state.guessedIds.includes(id))) {

      const maxScore = this.state.maxScore;
      this.setState({
        guessedIds: currentScore < 12 ? [...this.state.guessedIds, id] : [],
        navMsgCode: currentScore < 12 ? 2 : 3,
        currScore: currentScore,
        maxScore: currentScore >= maxScore ? currentScore : maxScore
      });
    } else {
      this.setState({
        guessedIds: [],
        navMsgCode: 1,
        currScore: 0
      });
    }

    this.setState({
      characters: this.state.characters.sort((a, b) => 0.5 - Math.random())
    })
  }

  render() {
    return ( <
      div className = "container" >
      <
      NavResults messages = {
        this.state.navMsgs
      }
      msgCode = {
        this.state.navMsgCode
      }
      currScore = {
        this.state.currScore
      }
      maxScore = {
        this.state.maxScore
      }
      /> <
      Header / >
      <
      GameBoard characters = {
        this.state.characters
      }
      cardClick = {
        this.cardClick
      }
      currScore = {
        this.state.currScore
      }
      maxScore = {
        this.state.maxScore
      }
      /> < /
      div >
    );
  }
}

export default App;