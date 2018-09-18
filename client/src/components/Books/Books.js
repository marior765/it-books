import React, { Component } from 'react'
import axios from 'axios';


class Books extends Component {
    state = {
        id: []
    }
    componentWillMount() {
        axios.get('/data')
            .then(response => this.setState({ id: response.data }))
    }
    render () {
        return(
            <div>
                <p>gfgs</p>
                {console.log(this.state.id)}
                {this.state.id.map((item, id) => (
                    <p key={id}>{item._id}</p>
                ))}
            </div>
        )
    }
} 

export default Books;