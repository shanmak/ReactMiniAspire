import React, { Component } from 'react';
import Details from '../Components/Details';
import Header from '../Components/Header'
import {Library} from '../Data/Library'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      term: '',
      interest: 7.33,
      isCheck: false,
      emiAmount: null,
      details: {}
    };
   
  }


  handleChangeAmount = (event) => {

    const financialAmount = (event.target.validity.valid) ? event.target.value : '';
    this.setState({ amount: financialAmount });
  }
  handleChangeTerm = (event) => {
    const financialTerm = (event.target.validity.valid) ? event.target.value : '';
    this.setState({ term: financialTerm });

  }

  handleSubmit = (event) => {
    localStorage.amount=this.state.amount;  
    localStorage.term=this.state.term 
    localStorage.interest=this.state.interest 

    if (this.state.term !== '' && this.state.amount !== '') {   
    
      
      this.setState({ details:Library(this.state.amount,this.state.term,this.state.interest) })    
      this.setState({isCheck: false})    
    }else{    
      
      this.setState({isCheck: true})
      var detailobj = this.state.details
      detailobj.isValid=false;
      this.setState({details: detailobj})
    }
  }
  render() {
    return (<div>
      < Header />
      <div>
        <div className="loan-form">
          <div className="form">
            <div className="form-group row">
              <label className="col-3 col-form-label">Amount</label>
              <div className="col-9">
                <input className="form-control" type="text" pattern="^[0-9]*$" placeholder="Amount"
                  value={this.state.amount} onChange={this.handleChangeAmount} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">Term</label>
              <div className="col-9">
                <input className="form-control" type="text"  pattern="^[0-9]*$" placeholder="Number of Week" value={this.state.term} onChange={this.handleChangeTerm} />
              </div>
            </div>

            <div className="form-group">
              <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Check</button>              
            </div>
              <div className="form-group">
            <span style={{color: 'red',marginRight: "10px"}}>{this.state.isCheck?'Please Enter All Value': ''}</span>
            </div>
          </div>
        </div>
        <Details detail={this.state.details} />
      </div>
    </div>

    );
  }
}

export default Home;