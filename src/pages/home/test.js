import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: '10px',
            left: '20px',
        }
    }


    showMessage = () => {
        alert("Followed " + this.props.time);
    };

    handleClick = () => {
        this.setState({
            left: '100px',
            right:'200px',
            bottom: '400px'
        }, () => {
            console.log(this.state)
        })
        setTimeout(this.showMessage, 3000);
    };

    render() {

        return <button onClick={this.handleClick}>Class Component</button>;
    }


}
