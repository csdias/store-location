import React from 'react';
import {shallow, mount} from 'enzyme';
import { StoreLocatorClass, StoreLocatorFunction } from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocatorFunction', function(){

    let mountedStoreLocatorFunction;

    beforeEach(() => {

        mountedStoreLocatorFunction = shallow(<StoreLocatorFunction />);

    });

    it('Should render StoreLocatorFunction properly', function(){

        mountedStoreLocatorFunction = shallow(<StoreLocatorFunction />);
    
    });

    // it('Should call axios.get on useEffect', function(){ 

    //     return mountedStoreLocatorFunction.instance().useEffect().then(function(){
    //         expect(axios.get).toHaveBeenCalled();
    //     });

    // });

})

describe('StoreLocatorClass', function(){

    let mountedStoreLocator;

    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocatorClass />);
    });

    it('Should render without crash', function(){
        mountedStoreLocator = shallow(<StoreLocatorClass />);
    }); 

    it('Should render a header', function(){
        let headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    it('Should render 0 buttons', function(){
        let buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(0);
    });

    it('Should render a map', function(){
        let map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);

    });

    //practising
    it('Should render properly', () => {

        const tree = renderer.create(<StoreLocatorClass />).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('Should make a call to axios', () => {
        
    });

    it('renders correctly', function(){

        let tree = renderer.create(<StoreLocatorClass />).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('Calls axios.get from componentDidMount', function(){

        return mountedStoreLocator.instance().componentDidMount().then(function(){
            expect(axios.get).toHaveBeenCalled();
        });

    })

    it('Calls axios.get from componentDidMount with corret url', function(){

        return mountedStoreLocator.instance().componentDidMount().then(function(){
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        });

    }); 

    it('update the state with api data', function(){
        return mountedStoreLocator.instance().componentDidMount().then(function(){
            expect(mountedStoreLocator.state()).toHaveProperty('shops', 
                [
                    { location: 'Portland', address: '123 Portland Av'},
                    { location: 'Astoria', address: '456 Astoria St'},
                    { location: '', address: ''}
                ]            
            );
        });

    });

})

describe('ChooseMap', function(){

    it('Updates the state using the location passed to it', function(){

        let mountedStoreLocator = shallow(<StoreLocatorClass />);
        let mockEvent = { target: { value: 'testland'} };
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
        
    }) 

})

