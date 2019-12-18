//Map has imageName and location
//StoreLocator has { currentMap:none.png and  shops:[]} int its state
//Header, Buttons, Map and MapChooser
//axios
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from  '../component/Header';
import Map from '../component/Map';
import Button from '../component/Button';
import MapChooser from '../MapChooser';
import axios from 'axios';

class StoreLocator extends Component {

    constructor(props){

        super(props);

        this.state = { 
            currentMap: 'none.png', 
            shops: [] 
        };

        this.chooseMap = this.chooseMap.bind(this);

    }

    async componentDidMount(){
        //call axios
        const response = await axios.get('http://localhost:3000/data/shops.json');
`
        this.setState({ shops: response.data.shops });
    }

    chooseMap(e){

        this.setState({ currentMap: MapChooser(e.target.value) });

    }

    render(){
        const buttons = this.state.shops.map( (shop, idx) => { return <Button key={idx} handleClick={this.chooseMap} location={shop.location}  />} );


        return(<>
            <Header />{buttons}<Map imageName={this.state.currentMap} location={this.state.currentMap} />
                </>
        );

    }


}

export default StoreLocator;


//Original funcionando
// import React, { Component, useState, useEffect }  from 'react';
// import Header from '../component/Header';
// import Button from '../component/Button';
// import Map from '../component/Map';
// import mapChooser from '../MapChooser';
// import axios from 'axios';


//Functional component
//const StoreLocator = (props) => {

//     const [count, setCount] = useState(0);

    //useEffect(() => {

        //const alerter = () => {alert('got resized')}; 

        //window.document.addEventListener('resize', alerter);


        //cleaner
        //return () => {

            //window.document.removeEventListener('resize', alerter);

        //};

    //}, []); //second parameter -> array of things to be oberved

    //return(
        //<button onClick={ () => { setCount(2); } }>does this work? {count}</button>
    //);

//}


// class StoreLocator extends Component {

//     constructor(props){

//         super(props);

//         this.state = {
//             currentMap: 'none.png',
//             shops: []
//         };

//         this.chooseMap = this.chooseMap.bind(this);

//     }

//     async componentDidMount(){

//         let response = await axios.get('http://localhost:3000/data/shops.json');
//         this.setState({ shops: response.data.shops });
        
//     }

//     chooseMap(e) {
//         this.setState({ currentMap: mapChooser(e.target.value)});
//     }

//     teste(){
//         alert('teste');
//     }
    
//     render(){

//         this.teste();

//         let buttons = this.state.shops.map((shop, idx) => { 
//             return <Button handleClick={this.chooseMap} key={idx} location={shop.location} />
//         });

//         return (
//             <>
//             <Header /><div>{buttons}</div><Map imageName={this.state.currentMap} location={this.state.currentMap}/>
//             </>
//         )

//     }

// }

// export default StoreLocator;