import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MapChooser from '../MapChooser';
import Header from '../component/Header';
import Map from '../component/Map';
import Button from '../component/Button';

const StoreLocatorFunction = () => {

    const [state, setState] = useState({ currentMap: 'none.png', shops: [] });

    useEffect(() => {

        async function fetchData(){
            const response =  await axios.get('http://localhost:3000/data/shops.json');

            setState({ shops: response.data.shops });
        }

        fetchData()

        return () => {};

    }, []);

    const chooseMap = (e) => {

        setState({ currentMap: MapChooser(e.target.value)});

    }

    const buttons = state.shops.map((shop, idx) => {  return <Button key={idx} handleClick={ chooseMap } location={shop.location} />})

    return ( <><Header/>{buttons} <Map imageName={state.currentMap} location={state.currentMap} /></> )

}


class StoreLocatorClass extends Component {

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
        this.setState({ currentMap: MapChooser(e.target.value)});
    }

    teste(){
        alert('teste');
    }
    
    render(){

        //this.teste();

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

export { StoreLocatorClass, StoreLocatorFunction };
//export default StoreLocator;