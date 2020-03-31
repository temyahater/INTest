import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setPhones} from './actions/phonesAction'


class App extends Component {
  render(){
    const {phones} = this.props.phones;
    const {setPhones} = this.props;
    const newPhones = [{
      id: 2,
      model: 'Apple ' + new Date()
    }];
    return (
      <div className="main-container">
        <h1>{phones[0].model}</h1><br />
        <button onClick={setPhones.bind(this, newPhones)}>click here</button>
      </div>
    );
  }
}

const mapState = state=>({
  ...state
});

const mapDispatch = dispatch=>({
  setPhones: phones=> dispatch(setPhones(phones))
});

export default connect(mapState, mapDispatch)(App);
