import React, { Component } from "react";


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }




  render() {
    return (
      <div className="container">
      <h4>Edit User</h4>
      <div className="col-md-12 fl-input">
      <label> First Name</label>
      <input type="text" name="first_name" value={this.state.first_name}/>
      </div>
      <div className="col-md-12 fl-input">
      <label> Last Name</label>
      <input type="text" name="last_name" value={this.state.last_name}/>
      </div>
      <div className="col-md-12 fl-input">
      <label> Email</label>
      <input type="text" name="email" value={this.state.email}/>
      </div>
      <div className="col-md-12 fl-input">
      <label>Phone Number</label>
      <input type="text" name="number" value={this.state.number}/>
      </div>
      <div className="col-md-12 fl-input">
      <label> Gender</label>
      <input type="radio" name="gender" value="Male" checked={this.state.gender=='Male'}/>Male
      <input type="radio" name="gender" value="Female" checked={this.state.gender=='Female'}/>Female
      <input type="radio" name="gender" value="Trans*Man" checked={this.state.gender=='Trans*Man'}/>Trans*Man
      </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

export default Add;
