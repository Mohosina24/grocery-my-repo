let total = 0;
function cardClick(card){
    const selectedCard = document.getElementById("click-items");
    const cardName = card.childNodes[3].childNodes[3].innerText;
   
    const li = document.createElement("li");
    li.innerText = cardName;
    selectedCard.appendChild(li);
    const price =card.childNodes[3].childNodes[5].innerText.split(" ")[0];
   total = parseInt(total) + parseInt(price);

   document.getElementById("total").innerText = total;
//  
   const enableBtn = document.getElementById("make-btn");
   
   if(total > 0){
      
      enableBtn.removeAttribute('disabled');
   
   }  
   else{
      enableBtn.setAttribute('disabled',true);
     

   }
   const discontBtn = document.getElementById("apply-btn");
   if (total >= 3000){
      discontBtn.removeAttribute('disabled');
   }
   else{
      discontBtn.setAttribute('disabled',true)
   }

   document.getElementById("text-field").addEventListener('keyup', function(event){
      const text = event.target.value;
      const cuponBtn = document.getElementById("apply-btn");
     
     
      if(text === "SELL200" )
      {
        console.log ("valid cupon code");
        
        
      }
     else{
            alert("invaild cupon code");
     }

  

     
   })
 
}



document.getElementById("apply-btn").addEventListener('click', function(){
  

   const discountPersent = 0.2 * total;
            document.getElementById("discount").innerText = discountPersent.toFixed(2);
           const discountTotal = total - discountPersent;
            document.getElementById("discount-total").innerText = discountTotal.toFixed(2);
})

document.getElementById("back-btn").addEventListener('click', function(){
   window.location.href = "index.html";
})