import {Library} from './Library'
export const RepayCal=()=>{
  var amount= localStorage.amount
  var term= localStorage.term
  var interest= localStorage.interest
  console.log(amount,interest,term) 
   var emiDetails= Library(amount,term,interest)

   var Details=[];

 

   for (let i = 0; i < term ; i++) { 

      var d = new Date();
      d.setDate((d.getDate()+(i*7)) + ((7-d.getDay())%7+1) % 7);
      var x=d.toISOString().split('T')[0]

      var weekamount={}    
      weekamount.term=x;
    
      weekamount.paymentAmount=emiDetails.emiAmount;
      if(i===0){
         weekamount.Paid=false
      }else{
         weekamount.Paid=true;
      } 

      Details.push(weekamount);
   }

   return(Details)
   }