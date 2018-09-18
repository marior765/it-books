import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import './Books.scss';
import LilItem from './LilItem';
import { INIT_BOOKSDATA } from '../../reducers/consts';


class Books extends Component {
    state = {
        id: []
    }
    componentWillMount() {
        axios.get('/data')
            .then(response => this.props.initData(response.data))
    }
    render () {
        return(
            <div>
                {console.log(this.state.id)}
                {this.props.data.map(item => (
                    <LilItem 
                        key={item.ID}
                        src={item.link}
                        title={item.name}
                        description={item.description}
                     />
                ))}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        data: state.booksData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initData: (data) => dispatch({type: INIT_BOOKSDATA, payload: data})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);