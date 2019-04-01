import React, { Component }  from 'react';
import Window from './Window';

class Popup extends Component {
    state = {
        isOpen: false
    };

    render() {
        const pop = this.state.isOpen && <Window/>;
        console.log('---', 1);
        return (

            <div>
                <button onClick = {this.revert}>
                    {this.state.isOpen ?  'Close' : 'Open' }
                </button>
                {pop}
            </div>
        )
    };

    revert = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Popup;