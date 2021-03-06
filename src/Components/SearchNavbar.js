import React, { Component } from "react";
import { Avatar } from "antd";
import "./SearchNavbar.css";
import { UserOutlined } from '@ant-design/icons';
//import SearchforSongsArt from 'SearchforSongsArt.js'

/**
 * Navbar for Search pages
 */
class SearchNavbar extends Component {
  constructor(props){
    super(props);
 this.state = {
     file:"",
     stringg:"",
     yes:false,
     name:localStorage.getItem('tokenfromlogin')

};
}


/**
   * @property {Function} componentDidMount - get picture data form a fake server to the avatar
   * @param {}
   * @returns {}
   */
componentDidMount() {
  let url= "http://localhost:4000/data";
  fetch(url,{
    method:'GET',
    headers:{
     'Accept':'application/json',
      'Content-TYpe':'application/json',
     'Authorization' :'Token'
    }
  }).then((results)=> {
  results.json().then((response) =>{
    console.log(response)
    
this.setState({file:response.file});


 
})    
})
}
          /**
    * update the input from user
    * @function dosearch
    * @param {event} e - onChange event
    */

gotosearch =e =>{
  window.location.href = "/SearchforSongsArt";
}
          /**
    * update the input from user
    * @function onChangestrng
    * @param {event} e - onChange event
    */
onChangestring =e =>{
  this.setState({stringg:e.target.value});
  localStorage.setItem('stringg',this.state.stringg);
}

  render() {
    return (
      <div className="NavLayout">
        <div className="main-nav">
          <li>
            <a
              href="/Home"
              className="previous-btn prev"
              style={{ marginLeft: "35px" }}
            >
              &#8249;
            </a>
          </li>
          <li>
            <a href="/Home" className="next-btn next">
              &#8250;
            </a>
          </li>
          <li className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                id="keytosearch"
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search for Artists or Songs then Press Enter "
                  onChange={this.onChangestring}
                  onKeyPress={(e) =>{
                    if(e.key==="Enter"){
                      this.gotosearch()
                    }
                  }}
                />
                <i className="search_icon">
                  <i className="fas fa-search"></i>
                </i>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown">
              <button className="dropbtn">
                <Avatar  size="small" icon={<UserOutlined />} src={this.state.file} /> {this.state.name}
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="/account">Account</a>
                <a href="/login">Logout</a>
              </div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default SearchNavbar;
