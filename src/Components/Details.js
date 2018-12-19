import React, { Component } from 'react';


export default class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      detail: {},
      isValue:true,
      isApplied:false,
      showModal: false

    }
  }

  componentDidUpdate(prevProps) {   
    if (this.props.detail !== prevProps.detail) {
      this.setState({ detail: this.props.detail, isValue:false,isApplied:false})
    }
  }

  applyLoan=()=>{

    this.setState({isApplied:true,showModal:true})
    alert("Loan has been Processed successfully")
    }

  shoeDetails() {
    return (
      <div className="container">
        <div className="details">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title text-center">LOAN DETAILS</h5>
                   <hr></hr>
                   <hr></hr>
               <div className="row">
                <p className="card-text col-8 ">Interest Rate </p>
                <p className="card-text col-4">{this.state.isValue? '0%' : (this.state.detail.interestRate+'%')}</p>
              </div>            
                   <hr></hr>

                <div className="row">
                <p className="card-text col-8 ">Interest Amount</p>
                <p className="card-text col-4 ">{this.state.isValue? '0.00$' : (this.state.detail.interestAmount +'$')}</p>
              </div>
                   <hr></hr>
                <div className="row">
                <p className="card-text col-8 ">Weekly Repayment</p>
                <p className="card-text col-4 ">{this.state.isValue ? '0.00$' : (this.state.detail.emiAmount+'$')}</p>
              </div>
                    <hr></hr>
              <div className="row">
                <p className="card-text col-8 ">Total Amount Repayment </p>
                <p className="card-text col-4 ">{this.state.isValue? '0.00$' : (this.state.detail.fullAmount+'$')}</p>
              </div>
              <hr></hr>
               <div className="row">
              <button className="btn btn-primary col-3" disabled={this.state.isApplied} style={{marginLeft:"37%"}}  onClick={this.applyLoan}>Apply</button>          
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {

    let show;
    if(this.state.detail.isValid){
     show= this.shoeDetails()
    }else{
      show=null
    }

    return (
      <div> {show}</div>
    );
  }
}