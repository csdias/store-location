import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('ServiceLocator', function(){

    let mountedStoreLocator;

    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('Should render without crash', function(){
        let mountedStoreLocator = shallow(<StoreLocator />);
    }); 

    it('Should render a header', function(){
        let headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    it('Should render 3 buttons', function(){
        let buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(3);
    });

    it('Should render a map', function(){
        let map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);

    });

})

describe('ChooseMap', function(){

    it('Updates the state using the location passed to it', function(){

        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = { target: { value: 'testland'} };
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
        
    }) 

})

