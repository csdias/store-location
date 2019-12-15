import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';

describe('Header', function(){
    let mountedHeader;

    beforeEach(() => {
        mountedHeader = shallow(<Header />);
    })

    it('Should render without crashing', function(){
        let mountedHeader = shallow(<Header />);
    });
    
    // it('Should render the logo', function(){
    //     //const images = mountedHeader.find('img [src="images/wired-brain-coffee-logo.png"]');
        
    //     const images = mountedHeader.find('img [src="images/wired-brain-coffee-logo.png"]');
    //     expect(images.length).toBe(1);
    // });


})

