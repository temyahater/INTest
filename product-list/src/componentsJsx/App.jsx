import React, { Component } from 'react';
import axios from 'axios';
import  NavBar  from './NavBar';
import Phone from './Phone';


export function sortHighPrice(phones,type){
  for(let i=0;i<phones.length;i++)
    for(let j=0;j<phones.length-i-1;j++)
      if(phones[j].price<phones[j+1].price){
        let temp=phones[j];
        phones[j]=phones[j+1];
        phones[j+1]=temp;
      }
  return phones;
}

export function sortLowPrice(phones,type){
  for(let i=0;i<phones.length;i++)
    for(let j=0;j<phones.length-i-1;j++)
      if(phones[j].price>phones[j+1].price){
        let temp=phones[j];
        phones[j]=phones[j+1];
        phones[j+1]=temp;
      }
  return phones;
}



export default class App extends Component {
  componentWillMount(){
    const {setPhones} = this.props;
    axios.get('/phones.json').then(res=>{
      setPhones(res.data);
    });
  }
  render(){
    const {phones, loading, setSort} = this.props;
    
    console.log(phones);

    return (
      <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <NavBar setSort={setSort} />
        <div style={{display: 'flex', justifyContent:'space-around', alignItems: 'center',flexWrap:'wrap' , width: '90%', height:'100%', marginTop:'5%'}}>
          <Phone image="iphone.jpeg" model="iPhone 11 Pro Max" description="the kal" price={1000} />
          {
            loading?phones.map((phone,i)=>{
            return <Phone key={i}  {...phone} />
            }):'Loading...'
          }
        </div>
      </div>
    );
  }
}

