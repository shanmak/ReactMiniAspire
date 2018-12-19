export const Library=(amount,term,interest)=>{
    var detail = {}
    var loanAmount =amount
        var numberOfweek = term
        var weekrateOfInterest = ((interest / 100) / 52)
        var top = Math.pow((1 + weekrateOfInterest), numberOfweek);
        var bottom = top - 1;
        var sp = top / bottom;
        detail.emiAmount = parseFloat((loanAmount * weekrateOfInterest) * sp).toFixed(2);
        detail.fullAmount = parseFloat(numberOfweek * detail.emiAmount).toFixed(2);
        detail.interestAmount = parseFloat(detail.fullAmount - loanAmount).toFixed(2);
        detail.interestRate =interest;
        detail.isValid=true;
  return( detail);
  }