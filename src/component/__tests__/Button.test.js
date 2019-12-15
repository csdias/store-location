import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', function(){

    let mountedButton;

    beforeEach(() => {

        mountedButton = shallow(<Button />);

    });

    it('Should render without crashing', function(){

        let mountedButton = shallow(<Button />);
        
    }); 

    it('Should render one button', function(){

        let buttons = mountedButton.find('button');

        expect(buttons.length).toBe(1);        
    }); 

    it('Should call a function passed to it when clicked', function() {

        const mockCallback= jest.fn();
        const mountedButtonWithCallback = shallow(<Button handleClick={mockCallback}/>)

        mountedButtonWithCallback.find('button').simulate('click');

        expect(mockCallback.mock.calls.length).toEqual(1);
    })


});

describe('When a location is passed to it', function() {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: "Location1"
        }

        mountedButton = shallow(<Button  {...props}/>)

        it('Should display the location', () => {

            const locationName = mountedButton.find('.location-button');

            expect(locationName.text()).toEqual("Location1");

        });

    });
});

describe('When no location is passed to it', function() {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: undefined
        }

        mountedButton = shallow(<Button  {...props}/>)

        it('Should display the location', () => {

            const locationName = mountedButton.find('.location-button');

            expect(locationName.text()).toEqual("All Locations");

        });

    });
});
