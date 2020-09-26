import React from 'react';
import UI from './UI';
class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{ textAlign: 'center', fontSize: '40px', marginTop: '10px' }}>
                    Welcome To The Dice Game!
                </div>
                <div style={{ textAlign: 'center', fontSize: '25px' }}>Click the dice to roll it</div>
                <div>
                    <UI />
                </div>
            </div>
        );
    }
}

export default App;
