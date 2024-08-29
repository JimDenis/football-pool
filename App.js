import React, { Component } from "react";

import "./App.css";
import Game from "./Game/Game";
import Score from "./Score/Score";
import Name from "./Name/Name";
import Modal from "../src/components/UI/Modal/Modal";
import PickSummary from "../src/components/PickSummary/PickSummary";
import ChangeWeek from "../src/components/ChangeWeek/ChangeWeek";
//import axios from "../src/axios-picks";

import Football from "./Assets/Images/Football.jpg";
//import Football from "./Assets/Images/Holloween.jpg";
//import Football from "./Assets/Images/Thanksgiving.jpg";
//import Football from "./Assets/Images/Christmas.jpg";

//import { weekPS1 } from "./data/WeekPS1";
//import { weekPS2 } from "./data/WeekPS2";
//import { weekPS3 } from "./data/WeekPS3";
//import { weekPS4 } from "./data/WeekPS4";

import { week1 } from "./data/Week1";
import { week2 } from "./data/Week2";
import { week3 } from "./data/Week3";
import { week4 } from "./data/Week4";
import { week5 } from "./data/Week5";
import { week6 } from "./data/Week6";
import { week7 } from "./data/Week7";
import { week8 } from "./data/Week8";
import { week9 } from "./data/Week9";
import { week10 } from "./data/Week10";
import { week11 } from "./data/Week11";
import { week12 } from "./data/Week12";
import { week13 } from "./data/Week13";
import { week14 } from "./data/Week14";
import { week15 } from "./data/Week15";
import { week16 } from "./data/Week16";
import { week17 } from "./data/Week17";
import { week18 } from "./data/Week18";

const styles = {
    footBall: {
        backgroundImage: `url(${Football})`,
        //backgroundRepeat: "repeat-y",
        // Football controls 2 below
        //backgroundRepeat: "no-repeat",
        //backgroundsize: "1500px 2750px"
        // Holloween controls 2 below
        backgroundRepeat: "no-repeat",
        backgroundSize: "2000px 2750px",
        // Thansgiving Turkey controls below
        //backgroundPosition: "Left",
        //backgroundSize: "200px 210px",
    },
};

class App extends Component {
    constructor(props) {
        super(props);

        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        if (mm < 10) {
            mm = "0" + mm;
        }

        if (dd < 10) {
            dd = "0" + dd;
        }

        let yyyymmdd = yyyy.toString() + mm.toString() + dd.toString();

        yyyymmdd = parseInt(yyyymmdd, 10);
        //yyyymmdd = 20200920;
        //console.log(yyyymmdd);

        switch (true) {
            //    case yyyymmdd < 20200817:
            //        this.state.games = weekPS1;
            //        this.state.week = "PS1";
            //        break;
            //    case yyyymmdd < 20200824:
            //        this.state.games = weekPS2;
            //        this.state.week = "PS2";
            //        break;
            //    case yyyymmdd < 20200831:
            //        this.state.games = weekPS3;
            //        this.state.week = "PS3";
            //        break;
            //    case yyyymmdd < 20200907:
            //        this.state.games = weekPS4;
            //        this.state.week = "PS4";
            //        break;
            case yyyymmdd < 20240909:
                this.state.games = week1;
                this.state.week = "1";
                break;
            case yyyymmdd < 20240916:
                this.state.games = week2;
                this.state.week = "2";
                break;
            case yyyymmdd < 20240923:
                this.state.games = week3;
                this.state.week = "3";
                break;
            case yyyymmdd < 20240930:
                this.state.games = week4;
                this.state.week = "4";
                break;
            case yyyymmdd < 20241007:
                this.state.games = week5;
                this.state.week = "5";
                break;
            case yyyymmdd < 20241014:
                this.state.games = week6;
                this.state.week = "6";
                break;
            case yyyymmdd < 20241021:
                this.state.games = week7;
                this.state.week = "7";
                break;
            case yyyymmdd < 20241028:
                this.state.games = week8;
                this.state.week = "8";
                break;
            case yyyymmdd < 20241104:
                this.state.games = week9;
                this.state.week = "9";
                break;
            case yyyymmdd < 20241111:
                this.state.games = week10;
                this.state.week = "10";
                break;
            case yyyymmdd < 20241118:
                this.state.games = week11;
                this.state.week = "11";
                break;
            case yyyymmdd < 20241125:
                this.state.games = week12;
                this.state.week = "12";
                break;
            case yyyymmdd < 20241202:
                this.state.games = week13;
                this.state.week = "13";
                break;
            case yyyymmdd < 20241209:
                this.state.games = week14;
                this.state.week = "14";
                break;
            case yyyymmdd < 20241216:
                this.state.games = week15;
                this.state.week = "15";
                break;
            case yyyymmdd < 20241223:
                this.state.games = week16;
                this.state.week = "16";
                break;
            case yyyymmdd < 20241230:
                this.state.games = week17;
                this.state.week = "17";
                break;
            default:
                this.state.games = week18;
                this.state.week = "18";
        }

        //console.log(this.state.week);

        this.state.weekOrig = this.state.week;
        this.state.gamesOrig = this.state.games;
    }

    state = {
        games: [],
        weekOrig: "",
        gamesOrig: [],
        pickComplete: false,
        numberPicked: 0,
        allGamesPicked: false,
        weekPicked: "",
        weekChanged: false,
        name: "none",
        score: -1,
    };

    pickHomeHandler = (teamIndex) => {
        const games = [...this.state.games];
        games[teamIndex].picked = this.state.games[teamIndex].home;
        this.setState({ games: games });
        this.pickCounter();
    };

    pickAwayHandler = (teamIndex) => {
        const games = [...this.state.games];
        games[teamIndex].picked = this.state.games[teamIndex].away;
        this.setState({ games: games });
        this.pickCounter();
    };

    pickCounter = () => {
        let i = 0;
        let counter = 0;
        let noneCount = 0;
        let allDone = false;

        for (i = 0; i < this.state.games.length; i++) {
            if (this.state.games[i].picked === "none") {
                noneCount = noneCount + 1;
            } else {
                counter = counter + 1;
            }
        }

        if (noneCount === 0) {
            allDone = true;
        }

        this.setState({ allGamesPicked: allDone });
        this.setState({ numberPicked: counter });
    };

    pickCompleteHandler = () => {
        this.setState({ pickComplete: true });
    };

    pickCancelHandler = () => {
        this.setState({ pickComplete: false });
    };

    pickContinueHandler = () => {
        let picks = [];

        let i = 0;
        for (i = 0; i < this.state.games.length; i++) {
            picks[i] = this.state.games[i].picked;
        }

        //const DBInfo = {
        //    week: this.state.week,
        //    picks: picks,
        //    player: this.state.name,
        //};

        //Write to clipboard for copy/paste
        //var DBInfoText = JSON.stringify(DBInfo);
        //navigator.clipboard.writeText(DBInfoText);

        //axios
        //    .post("/picks.json", DBInfo)
        //    .then((response) => {
        //        console.log(response);
        //        alert("Your picks were sent to Jim");
        //    })
        //    .catch((error) => {
        //        console.log(error);
        //        alert("Your picks were NOT sent to Jim");
        //    });

        this.pickReset();
    };

    pickReset = () => {
        const games = [...this.state.games];

        let i = 0;

        for (i = 0; i < games.length; i++) {
            games[i].picked = "none";
        }

        this.setState({ games: games });
        this.setState({ allGamesPicked: false });
        this.setState({ numberPicked: 0 });
        this.setState({ pickComplete: false });
        this.setState({ score: -1 });
    };

    pickNameHandler = (event) => {
        this.setState({ name: event.target.value });
    };

    pickScoreHandler = (event) => {
        this.setState({ score: event.target.value });
    };

    changeWeekHandler = (event) => {
        this.setState({ weekChanged: true });
    };

    cancelkWeekPicked = (event) => {
        this.setState({ weekChanged: false });
    };

    changeWeekPicked = (event) => {
        this.setState({ weekPicked: event.target.value });
    };

    changeTheWeek = (event) => {
        event.preventDefault();

        var games = this.state.week;
        this.setState({ weekChanged: false });

        switch (this.state.weekPicked) {
            case "1":
                games = week1;
                this.setState({ week: "1" });
                break;
            case "2":
                games = week2;
                this.setState({ week: "2" });
                break;
            case "3":
                games = week3;
                this.setState({ week: "3" });
                break;
            case "4":
                games = week4;
                this.setState({ week: "4" });
                break;
            case "5":
                games = week5;
                this.setState({ week: "5" });
                break;
            case "6":
                games = week6;
                this.setState({ week: "6" });
                break;
            case "7":
                games = week7;
                this.setState({ week: "7" });
                break;
            case "8":
                games = week8;
                this.setState({ week: "8" });
                break;
            case "9":
                games = week9;
                this.setState({ week: "9" });
                break;
            case "10":
                games = week10;
                this.setState({ week: "10" });
                break;
            case "11":
                games = week11;
                this.setState({ week: "11" });
                break;
            case "12":
                games = week12;
                this.setState({ week: "12" });
                break;
            case "13":
                games = week13;
                this.setState({ week: "13" });
                break;
            case "14":
                games = week14;
                this.setState({ week: "14" });
                break;
            case "15":
                games = week15;
                this.setState({ week: "15" });
                break;
            case "16":
                games = week16;
                this.setState({ week: "16" });
                break;
            case "17":
                games = week17;
                this.setState({ week: "17" });
                break;
            case "18":
                games = week18;
                this.setState({ week: "18" });
                break;
            default:
                games = this.state.gamesOrig;
                this.setState({ week: this.state.weekOrig });
        }
        this.setState({ games: games });
        this.weekReset();
    };

    weekReset = () => {
        this.setState({ allGamesPicked: false });
        this.setState({ numberPicked: 0 });
        this.setState({ pickComplete: false });
        this.setState({ score: -1 });
    };

    render() {
        return (
            <div style={styles.footBall} className="App">
                <h1>WELCOME TO THE 2024 FOOTBALL POOL VERSION 24.01</h1>

                <h2>
                    Welcome to week {this.state.week} there are{" "}
                    {this.state.games.length} games this week{"  "}
                    <button onClick={this.changeWeekHandler}>
                        Play a different week
                    </button>
                </h2>
                <h2>You have picked {this.state.numberPicked} games so far</h2>

                <Modal
                    show={this.state.pickComplete}
                    modalClosed={this.pickCancelHandler}
                >
                    <PickSummary
                        games={this.state.games}
                        week={this.state.week}
                        name={this.state.name}
                        score={this.state.score}
                        clickContinue={this.pickContinueHandler}
                        clickCancel={this.pickCancelHandler}
                    />
                </Modal>
                {this.state.allGamesPicked &&
                this.state.name !== "none" &&
                this.state.score > -1 ? (
                    <button
                        enabled="true"
                        className="SubmitButtonAble"
                        onClick={this.pickCompleteHandler}
                    >
                        SUBMIT PICKS
                    </button>
                ) : (
                    <button
                        disabled
                        className="SubmitButton"
                        onClick={this.pickCompleteHandler}
                    >
                        SUBMIT PICKS
                    </button>
                )}

                {this.state.games.map((game, index) => {
                    return (
                        <Game
                            clickHome={() => this.pickHomeHandler(index)}
                            num={game.num}
                            home={game.home}
                            away={game.away}
                            picked={game.picked}
                            key={game.num}
                            clickAway={() => this.pickAwayHandler(index)}
                        />
                    );
                })}
                <Name
                    value={this.state.name}
                    picked={this.state.name}
                    changed={this.pickNameHandler}
                />
                <Score
                    value={this.state.score}
                    picked={this.state.score}
                    changed={this.pickScoreHandler}
                />
                <Modal show={this.state.weekChanged}>
                    {this.state.weekChanged ? (
                        <ChangeWeek
                            formSubmit={this.changeTheWeek}
                            changed={this.changeWeekPicked}
                            clickCancel={this.cancelkWeekPicked}
                        />
                    ) : null}
                </Modal>
            </div>
        );
    }
}

export default App;
