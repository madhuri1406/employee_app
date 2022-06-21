import React, { Component } from "react";
import { connect } from "react-redux";
import {getEmployeeList} from "../../redux/Actions/listAction";
import {Container} from "react-bootstrap";
import { AgGridReact } from 'ag-grid-react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import '../../index.css'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class List extends Component {
  constructor(props) {

    super(props);
    this.state = {
      columnDefs:[
             {
               headerName: 'First Name',
               field: 'first_name'
             },
             {
               headerName: 'Last Name',
               field: 'last_name'
             },
             {
               headerName: 'Email',
               field: 'email',
             },
             {
               headerName: 'Number',
               field: 'number'
            },
            {
               headerName: 'Gender',
               field: 'gender'
            },
            {headerName: "", headerClass: 'new-class',
        cellRendererFramework:(params)=>
        <div>
                  <button onClick={() =>this.update(params.data)}>Edit</button>
        </div>},
        {headerName: "", headerClass: 'new-class',
    cellRendererFramework:(params)=>
    <div>
              <DeleteIcon onClick={() =>this.handleDelete(params.data)} />
    </div>}
           ]
    };
  }



  componentWillMount() {
    this.props.getEmployeeList();

  }
componentWillReceiveProps(nextProps){
  console.log("hhhhhhhhhhhhhhhh",nextProps.employeeList);
  this.setState({
    employeeList:nextProps.employeeList
  })
}
update=(data)=>{console.log(data);
this.props.history.push({pathname :`/employee/Edit/${data.id}`,
  data :data
})
}

handleDelete=(data,i)=>{
let {employeeList}=this.state
employeeList.map((obj,i)=>{
  if (obj.id ==data.id) {
   employeeList.splice(i,1);


  }
  this.setState({employeeList:employeeList})
})


}
onEditButtonClick(params)
{
 this.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: 'make'
  });
}
handleAdd=()=>{
  this.props.history.push(`/employee/add`)
}
//  IconComponent=(id)=> {
//   console.log(id);
//   return <EditIcon width={10} onClick={this.handleEdit}/>;
// }
  render() {
    let {employeeList,columnDefs}=this.state;
    console.log(employeeList);
    return (
      <div className="Container">
      <div className="topView">
      <h4>Employee List</h4>
      <button className="addButton" onClick={this.handleAdd}>Add</button>
      </div>
      <div className="ag-theme-alpine "  style={{height:"100vh"}}>
            <AgGridReact

                rowData={employeeList}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>

</div>
    );
  }
}

const mapStateToProps = (state) => ({
  employeeList: state.listReducer.employeeList
});

export default connect(mapStateToProps, {
getEmployeeList
})(List);
