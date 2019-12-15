import React, { Component } from 'react';
import Header from '../component/Header';
import Button from '../component/Button';
import Map from '../component/Map';
import mapChooser from '../MapChooser';

class StoreLocator extends Component{

    constructor(props){

        super(props);

        this.state = {
            currentMap: 'none.png'
        };

        this.shops = [
            { location: 'Portland', adress: '123 Portland Av'},
            { location: 'Astoria', adress: '456 Astoria St'},
            { location: '', adress: ''}
        ];

        this.chooseMap = this.chooseMap.bind(this);

    }

    chooseMap(e) {
        this.setState({ currentMap: mapChooser(e.target.value)});
    }

    render(){

        let buttons = this.shops.map((shop, idx) => { 
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