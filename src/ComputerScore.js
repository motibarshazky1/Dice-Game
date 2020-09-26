import React from 'react';
import images from './Images';

class ComputerScore extends React.Component {
    render() {
        return (
            <div>
                <div className="computer-score">Computer: {this.props.dice}</div>
                <div>
                    <img className="cube-photo" alt="" src={images[this.props.dice - 1]}></img>
                </div>
            </div>
        );
    }
}
export default ComputerScore;
