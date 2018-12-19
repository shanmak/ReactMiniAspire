export const UserAccount=(userName,password)=>{

    var account=[{
        "userName":"user",
        "password":"user"
        
    },{
        "userName":"admin",
        "password":"admin"
        
    },{
        "userName":"aspire",
        "password":"aspire"
        
    },{
        "userName":"maxs",
        "password":"maxs"
        
    }
]
var check;
 account.forEach(user => {
    if (user.userName ===userName ){
    if(user.password === password) {
        check= true
    } else {
        check=false;
    }
  }
}
  
  )
 
  return(
      check
    )
}