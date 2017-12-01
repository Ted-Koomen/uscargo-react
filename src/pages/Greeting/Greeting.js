import React, { Component} from 'react';
import axios from 'axios'



class Greeting extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name:''
        }
    }

    componentDidMount() {
        axios.get(`https://uscargo-api.herokuapp.com${this.props.location.pathname}`)
            .then(response => {
                this.setState({
                    name: response.data.username
                })
            })
            .catch(err => {
                console.log(err)
            })     
    }
    
    render() {
        return (
            <div>
               <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Greeting