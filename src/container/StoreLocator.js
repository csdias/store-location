import React, { Component } from 'react';
import Header from '../component/Header';
import Button from '../component/Button';
import Map from '../component/Map';
import mapChooser from '../MapChooser';
import axios from 'axios';

class StoreLocator extends Component{

    constructor(props){

        super(props);

        this.state = {
            currentMap: 'none.png',
            shops: []
        };

        this.chooseMap = this.chooseMap.bind(this);

    }

    async componentDidMount(){

        let response = await axios.get('http://localhost:3000/data/shops.json');
        this.setState({ shops: response.data.shops });
        
    }

    chooseMap(e) {
        this.setState({ currentMap: mapChooser(e.target.value)});
    }

    render(){

        let buttons = this.state.shops.map((shop, idx) => { 
            return <Button handleClick={this.chooseMap} key={idx} location={shop.location} />
        });

        return (
            <>
            <Header /><div>{buttons}</div><Map imageName={this.state.currentMap} location={this.state.currentMap}/>
            </>
        )

    }

}

export default StoreLocator;