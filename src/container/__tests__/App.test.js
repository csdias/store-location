import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', function(){

  it('Should render without crashing', function(){

    let mountedApp = shallow(<App></App>);


  });

  it('Should render ServiceLocator without crashing', function(){

    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');

    expect(locators.length).toBe(1);

  });


})


