import React, { Component } from 'react';
import Header from '../component/Header';
import Button from '../component/Button';
import Map from '../component/Map';

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

    }

    render(){

        let buttons = this.shops.map((shop, idx) => { 
            return <Button key={idx} location={shop.location} />
        });

        return (
            <>
            <Header /><div>{buttons}</div><Map imageName={this.state.currentMap} location={this.props.location}/>
            </>
        )

    }

}

export default StoreLocator;