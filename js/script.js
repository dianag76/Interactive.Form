console.log('test');

const nameElement = document.getElementById('name');
const jobRole = document.getElementById ('title');
const otherJobRole= document.getElementById('other-job-role');
console.log(otherJobRole);
const design= document.getElementById('design');
const color= document.getElementById('color');
const colorOption= color.children// child property to list all colors 
console.log(colorOption);
const registerActivities= document.getElementById('activities')
const activityCost= document.getElementById ('activity-cost');
const payment= document.getElementById('payment-method');
const creditCard= document.getElementById('credit-card');
const paypal= document.getElementById('paypal');
const bitcoin= document.getElementById('bitcoin');



nameElement.focus(); 


otherJobRole.type='hidden';
color.disabled= true;
jobRole.addEventListener('change',(e)=>{
    if(e.target.value ==='other'){
        otherJobRole.type='text';
    }else{
        otherJobRole.type='hidden';
    }
    });

  
    design.addEventListener('change',(e) => {
       color.disabled= false;
        for (let i=0; i< colorOption[i].length; i++){
            if (e.target.value!== colorOption[i].getAttribute('data-theme')){
                colorOption[i].hidden=true;
                colorOption[i].removeAttribute('selected');
        } else {
            colorOption[i].hidden=false;
            colorOption[i].setAttribute('selected',true);
        };
    }});
            
            
        //     const target=e.target.value;
        //     const dataTheme=colorOption[i].getAtrribute('data-theme');
        //     console.log(target)
        //     console.log(dataTheme)
        
        //     if (target!==dataTheme){
        //         colorOption[i].hidden=true;
        //         colorOption[i].removeAttribute('selected');
        //     } else {
        //         colorOption[i].hidden= false; 
        //         colorOption[i].setAttribute('selected',true);
        //     }
        // }
        // })
//Register for activities section: Total cost of selected activities should be totalled
//and displayed for user 

let totalCost=0 
registerActivities.addEventListener('change',(e)=>{
    const click =e.target;
    const dataCost= +click.getAttribute('data-cost');
        click.checked ? totalCost += dataCost:totalCost -= dataCost;
        activityCost.innerHTML = `Total: $${totalCost}`;
});



//Payment Info 
// bitcoin.style.display = 'none';
// creditCard.style.display = 'display';

// //const preferred = payment.children[1].setAttribute('selected,selected');
// preferred.addEventListener(addEventListener('change',(e)=>{
//         let preferredPayment = e.target.value;
      
//         if (preferredPayment === "paypal") {
//           paypal.style.display = "";
//           creditCard.style.display = "none";
//           bitcoin.style.display = "none";
//         } else if (preferredPayment === "bitcoin") {
//           bitcoin.style.display = "";
//           paypal.style.display = "none";
//           creditCard.style.display = "none";
//         } else if (prefferedPayment === "credit-card") {
//           creditCard.style.display = "";
//           paypal.style.display = "none";
//           bitcoin.style.display = "none"