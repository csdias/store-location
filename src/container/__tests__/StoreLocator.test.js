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

    it('Should render 2 buttons', function(){
        let buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(2);
    });

    it('Should render a map', function(){
        let map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);

    });

})

