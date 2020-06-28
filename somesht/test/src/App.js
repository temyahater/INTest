import React from 'react';


function TestItem(props){
  return props.show?<h1>Hi, {props.name} {props.surname}!</h1>:null;  
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: this.props.name, surname: this.props.surname, loading: false, show: false};
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(){
    this.setState((state,props)=>{
      return {name: document.getElementById('1').value, show: !state.show};
    });
  }
  
  componentWillMount(){
    console.log('WillMount');
  }
  
  componentDidMount(){
    console.log('DidMount');
  }

  componentWillUpdate(){
    console.log('WillUpdate');
  }

  componentDidUpdate(){
    console.log('DidUpdate');
  }

  render(){
    setTimeout(()=>{
      this.setState({loading: true});
    }, 3000);
    return(
      <div onKeyPress={this.handleClick}>
        {this.state.loading?<TestItem name={this.state.name} surname={this.state.surname} show={this.state.show} />:'...loading'}
        <input id="1" />
      </div>
    );
  }
}

export default App;
