import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header'


import {RepayCal} from '../Data/RepayCal'


class Repay extends Component {

constructor(){
  super()
  this.state={
      json:RepayCal(),
      isApply:false
    
  }
    
}
componentDidMount(){
  console.log('re',RepayCal())
  this.setState({json:RepayCal()})
  if(this.state.json.length > 0){
    console.log("scsd")
    this.setState({isApply:true})
  }
  localStorage.clear();
}

payment(index){

  var clickedItem=this.state.json[index]
  clickedItem.Paid=true;
    if(this.state.json.length-1 > index){ 
  var nextItem=this.state.json[index+1]
  nextItem.Paid=false;
    this.setState({...this.state.json,nextItem}) 
  }

  this.setState({...this.state.json,clickedItem})   
 
}
  showdetails(){

   let row= this.state.json.map((item,index)=>{     
     return(
               <div key={index}>    
               <hr></hr>           
               <div className="row">
                <p className="card-text text-center col-4 ">{item.term}</p>
                <p className="card-text  text-center col-4">{item.paymentAmount}</p>
                <button className="col-4 btn btn-secondary btn-sm" disabled={item.Paid} onClick={()=> {this.payment(index)}}>PAY</button>               
              </div>                   
              </div>           
     )          

    });
    
    return(

      <div>
       < Header/>
       <div className="cosdetails">
          <div className="container">
        <div className="detailBox">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">LOAN DETAILS</h5>              
                <div className="row">
                <p className=" col-4 ">DUE DATE</p>
                <p className=" col-4">AMOUNT</p>
                <p className="col-4 ">PAYMENT</p>             
              </div>     
              <hr></hr>
              {this.state.isApply? row :"YOU HAVE NO LOAN YET"}           
            </div>
          </div>
        </div>
      </div>  
      </div>      
      </div>          

    )
  }

  render() {

   


    return (
      <div> 
        <div>{this.showdetails()}</div>                
      </div>


    )
  }
}


export default withRouter(Repay)