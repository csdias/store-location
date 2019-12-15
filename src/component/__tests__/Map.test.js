import React from 'react';
import {shallow} from 'enzyme';
import Map from '../Map';

describe('Map', function(){


    let mountedMap;

    beforeEach(() => {

        mountedMap = shallow(<Map></Map>);

    })

    it('Should render without crashing', function(){

        let mountedButton = shallow(<Map />);
    
    });
    
    it('Should render an image', function(){

        const images = mountedMap.find('img');
        expect(images.length).toBe(1);

    })

    // it('Should render the none map selected', function(){

    //     const maps = mountedMap.find('img [src="images/none.png"]');
    //     expect(maps.length).toBe(1);
    // });


})

