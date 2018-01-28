import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/order';
import Index from './Index';

const store = configureStore();
export default class Root extends Component{
  render(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
