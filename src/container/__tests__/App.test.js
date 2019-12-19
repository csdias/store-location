import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', function(){

  it('Should render without crashing', function(){

    let mountedApp = shallow(<App></App>);


  });

  it('Should render StoreLocatorClass without crashing', function(){

    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocatorClass');

    expect(locators.length).toBe(1);

  });

  it('Should render StoreLocatorFunction without crashing', function(){

    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocatorFunction');

    expect(locators.length).toBe(1);

  });


})


