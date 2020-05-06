import React from 'react';


function TestItem(props){
return <h1>Hi, {props.name}!</h1>
}


class App extends React.Component {
  
  
  render(){
    
    return(
      <div>
        <TestItem name={this.props.name} />
        <TestItem name={this.props.name} />
        <TestItem name={this.props.name} />
      </div>
    );
  }
}

export default App;
