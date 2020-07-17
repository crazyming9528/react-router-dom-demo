import React, { Component } from 'react';

class DragList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }


    render() {
        const data = this.props.dataSource || [];
        const list = data.map((item) => <li>{item.title}</li>);
        return (
            <ul>
                {list}
            </ul>
        );
    }
}


export default DragList;
