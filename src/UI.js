import React from 'react';
import Button from 'react-bootstrap/Button';
import YourScore from './YourScore';
import ComputerScore from './ComputerScore';
import './UI.css';

class UI extends React.Component {
    state = {
        yourScore: {
            //your dice
            score: 0,
        },
        computerScore: {
            //computer dice
            score: 0,
        },
        games: { value: 0 }, //numbers of games played
        winner: { winnerName: '' }, //name of the winner in a single match
        record: {
            wins: 0,
            losses: 0,
            draws: 0,
        },
    };
    onPhotoClick = () => {
        var yourDiceValue = Math.floor(Math.random() * 6) + 1;
        var computerDiceValue = Math.floor(Math.random() * 6) + 1;
        var winnerName,
            winsRecord = this.state.record.wins,
            lossesRecord = this.state.record.losses,
            drawsRecord = this.state.record.draws;

        if (yourDiceValue > computerDiceValue) {
            winnerName = 'You Won';
            this.setState({ record: { wins: winsRecord + 1, losses: lossesRecord, draws: drawsRecord } });
        }
        if (yourDiceValue < computerDiceValue) {
            winnerName = 'You Lost';
            this.setState({
                record: { wins: winsRecord, losses: lossesRecord + 1, draws: drawsRecord },
            });
        }
        if (yourDiceValue === computerDiceValue) {
            winnerName = 'Draw';
            this.setState({
                record: { wins: winsRecord, losses: lossesRecord, draws: drawsRecord + 1 },
            });
        }
        this.setState({
            yourScore: {
                score: yourDiceValue,
            },
            computerScore: {
                score: computerDiceValue,
            },
            games: { value: this.state.games.value + 1 },
            winner: { winnerName: winnerName },
        });
    };

    onResetButtonClick = () => {
        //reset both your+computer scores to 0,games to 0. winner to null
        this.setState({
            yourScore: {
                score: 0,
            },
            computerScore: {
                score: 0,
            },
            games: { value: 0 },
            winner: { winnerName: '' },
            record: { wins: 0, losses: 0, draws: 0 },
        });
    };

    render() {
        return (
            <div className="ui">
                <div>
                    <img
                        className="cube-photo"
                        alt=""
                        src="https://images-na.ssl-images-amazon.com/images/I/719-yI4ZV6L.png"
                        onClick={this.onPhotoClick}
                    ></img>
                </div>
                <div className="show-score">
                    <YourScore dice={this.state.yourScore.score} />
                    <div>
                        <div className="button">
                            <Button variant="outline-secondary" onClick={this.onResetButtonClick}>
                                Clear Scores
                            </Button>
                        </div>
                        <div className="games">Games played: {this.state.games.value}</div>
                        <div className="winner">
                            {(() => {
                                switch (this.state.winner.winnerName) {
                                    case 'You Won':
                                        return <div className="you-won">{this.state.winner.winnerName} </div>;
                                    case 'You Lost':
                                        return <div className="you-lost">{this.state.winner.winnerName}</div>;
                                    case 'Draw':
                                        return <div className="draw">{this.state.winner.winnerName}</div>;
                                    default:
                                        return;
                                }
                            })}
                        </div>
                    </div>
                    <ComputerScore dice={this.state.computerScore.score} />
                </div>
                <div className="record">
                    wins: {this.state.record.wins} losses: {this.state.record.losses} draws:{' '}
                    {this.state.record.draws}
                </div>
            </div>
        );
    }
}
export default UI;
