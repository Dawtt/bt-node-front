import React, { Component } from 'react';
import fire from '../config/Fire'

class FirebaseHome extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

  }

  logout(){
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
      <p> Logged in to Firebase </p>
      <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default FirebaseHome;
