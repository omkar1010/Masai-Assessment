
function generatePassword (n, includeNumbers = true, includeSymbols = true){
  
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       const lowercase = "abcdefghijklmnopqrstuvwxyz";
       const numbers = "0123456789";
       const specialChars = "@#$!%^&*()_+-=[]{}<>?";
       let password  = ""
       
       let allchar = uppercase + lowercase
       // console.log(allchar)
       
       // for the uppercase letter
       
       password += uppercase[Math.floor(Math.random() * uppercase.length)]
    
      
      
      if(includeNumbers){
        allchar += numbers
        password += numbers[Math.floor(Math.random() * numbers.length)]
      }
      
        
        if(includeSymbols){
          allchar += specialChars
          password += specialChars[Math.floor(Math.random() * specialChars.length)]
        }
         //  console.log(password)
         
         for(let i = password.length; i<n; i++){
           password += allchar[Math.floor(Math.random() * allchar.length)]
         }
         
         console.log(password)
         return password
   }
   
   console.log(generatePassword(7,true,true))