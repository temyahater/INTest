import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setPhones} from './actions/phonesAction'
import axios from 'axios';
import  NavBar  from './components/NavBar';
import Card from './components/Card';


class App extends Component {
  componentWillMount(){
    const {setPhones} = this.props;
    axios.get('/phones.json').then(res=>{
      setPhones(res.data);
    });
  }
  render(){
    const {phones, loading} = this.props;
    return (
      <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <NavBar />
        <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center',flexWrap:'wrap' , width: '90%', height:'100%', marginTop:'5%'}}>
          <Card image="iphone.jpeg" model="iPhone 11 Pro Max" description="the kal" price="1000$"/>
          {
            loading?phones.map((phone,i)=>{
            return <Card key={i}  {...phone} />
            }):'Loading...'
          }
        </div>
        <ul style={{listStyleType: 'none',fontSize: '20px'}}>
          
        </ul>
      </div>
    );
  }
}

const mapState = ({phones})=>({
  phones: phones.phones,
  loading: phones.loading
});

const mapDispatch = dispatch=>({
  setPhones: phones=> dispatch(setPhones(phones))
});

export default connect(mapState, mapDispatch)(App);
