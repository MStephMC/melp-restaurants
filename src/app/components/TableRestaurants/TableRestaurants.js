import React, { Component } from 'react';
import TableRestaurantsView from './TableRestaurantsView';

// import axios from "axios";
import restaurants from "../../../data/dataRestaurants.json"

class TableRestaurants extends Component {
    
    state = {
        restaurant: []
    }

    async componentDidMount() {
        // const resp = await axios.get('https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20')
        // console.log("state!!!!!!!!!!!!!", resp.data)
        const restaurant = await restaurants;
        console.log("variable restaurant!!!!!!!!!!!!!", restaurant)
        this.setState({ restaurant }) 
    }

    render(){
        return <TableRestaurantsView restaurants={this.state.restaurant}/>
    }
}
export default TableRestaurants;