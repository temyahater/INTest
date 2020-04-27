import React, { Component } from 'react';

class NavBar extends Component {

  state = {sort: 'def'};

  handleItemClick = (name)=>{
    const {setSort}=this.props;
    this.setState({sort: name});
    setSort(name);
  };

  render(){

    return (
      <nav className="shadow-lg navbar navbar-expand-lg navbar-light bg-light" style={{width: '100%', position:'fixed', zIndex:'1'}}>
      <a className="navbar-brand" href="#navik">Product-list</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div name="navik" className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#navik">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#navik">All price:</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#navik">Stack:</a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
          <button className="btn btn-outline-dark ml-2" onClick={()=>{ this.handleItemClick('def'); console.log(this.state)}}>Def</button>
          <button className="btn btn-outline-dark ml-2" onClick={()=>{ this.handleItemClick('cheap'); console.log(this.state);}}>Cheap</button>
          <button className="btn btn-outline-dark ml-2" onClick={()=>{ this.handleItemClick('expensive'); console.log(this.state)}}>Expensive</button>
        </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;