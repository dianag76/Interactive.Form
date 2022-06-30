console.log('test');

const nameElement = document.getElementById('name');
const nameHint= document.getElementById('name-hint');
const jobRole = document.getElementById ('title');
const otherJobRole= document.getElementById('other-job-role');
console.log(otherJobRole);
const design= document.getElementById('design');
const color= document.getElementById('color');
const colorOption= color.children// child property to list all colors 
console.log(colorOption);
const activities= document.getElementById('activities')
const activityCost= document.getElementById ('activity-cost');
const activitiesCost=document.getElementById('activities-cost');
const payment= document.getElementById('payment');
const creditCard= document.getElementById('credit-card');
const paypal= document.getElementById('paypal');
const bitcoin= document.getElementById('bitcoin');
const form= document.querySelector('form');
const checkbox= document.querySelector('checkbox');
const activitiesBox= document.getElementById('activities-box');
const activityHint= document.getElementById('activity-hint');
let email=document.getElementById('email');
const emailHint= document.getElementById('email-hint');
const zip= document.getElementById('zip');
const zipHint=document.getElementById('zip-hint');
const ccNum= document.getElementById('cc-num');
const ccHint= document.getElementById('cc-hint');
const cvv=document.getElementById('cvv');
const cvvHint= document.getElementById('cvv-hint');



nameElement.focus(); 


otherJobRole.type='hidden';

jobRole.addEventListener('change',(e)=>{
    if(e.target.value ==='other'){
        otherJobRole.type='text';
    }else{
        otherJobRole.type='hidden';
    }
    });

    color.disabled= true;
    design.addEventListener('change',(e) => {
       color.disabled= false;
        for (let i=0; i< colorOption.length; i++){
            if (e.target.value!== colorOption[i].getAttribute('data-theme')){
                colorOption[i].hidden=true;
                colorOption[i].removeAttribute('selected');
                console.log(design);
        } else {
            colorOption[i].hidden=false;
            colorOption[i].setAttribute('selected',true);
        };
    }});
            


let totalCost=0 
activities.addEventListener('change',(e)=>{
    let activityCost= +e.target.getAttribute('data-cost');
    if (e.target.checked){
        totalCost += activityCost;
    } else{
        totalCost-= activityCost;
    }
    activitiesCost.innerHTML= `Total:$${totalCost}`;
});



//Payment Info 

bitcoin.hidden = true;
paypal.hidden = true;

payment.children[1].setAttribute('selected', true);

payment.addEventListener('change',(e)=> {
        if (e.target.value === 'paypal') {
          paypal.hidden = false;
          bitcoin.hidden = true;
          creditCard.hidden= true;
        } else if (e.target.value==='bitcoin') {
          bitcoin.hidden = false;
          paypal.hidden = true;
          creditCard.hidden = true;
        } else {
          paypal.hidden = true;
          bitcoin.hidden = true;
          creditCard.hidden = false;
        }
    });

  
    //Form Validation- users will not be allowed to submit a form without submitting 
    // the required information.


    function nameValidation() {
        let nameValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameElement.value);
        if (nameValid) {
            validationPass(nameElement);
            nameHint.style.display= 'none';
          } else {
            validationFail(nameElement);
            nameHint.style.display= 'block';
          }
        return nameValid;
    }
    
    
    function emailValidation() {
        let emailValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
        if (emailValid) {
            validationPass(email);
            emailHint.style.display= 'none';
          } else {
            validationFail(email);
            emailHint.style.display= 'block';
          }
        return emailValid;
    }
    
   
    function activityValidation() {
        let activityValidation = totalCost > 0;
        if (activityValidation) {
            validationPass(activitiesBox); 
            activityHint.style.display= 'none';
          } else {
            validationFail(activitiesBox);
            activityHint.style.display= 'block';
          }
        return activityValidation;
        
    }
    
    
    function ccValidation() {
        let cardNumberValidation = /^\d{13,16}$/.test(ccNum.value);
        if (cardNumberValidation) {
            validationPass(ccNum);
            ccHint.style.display= 'none';
          } else {
            validationFail(ccNum);
            ccHint.style.display= 'block';
          }
        let zipCodeValidation = /^\d{5}$/.test(zipCode.value);
        if (zipCodeValidation) {
            validationPass(zipCode);
            zipHint.style.display= 'none';
          } else {
            validationFail(zipCode);
            zipHint.style.display= 'block';
          }
        let cvvValidation = /^\d{3}$/.test(cvv.value);
        if (cvvValidation) {
            validationPass(cvv);
            cvvHint.style.display= 'none';
          } else {
            validationFail(cvv);
            cvvHint.style.display= 'block';
          }
        return ccNumValidation && zipCodeValidation && cvvValidation;;
    }
    
   
    function validationPass(element){
        element.parentElement.classList.add('valid');
        element.parentElement.classList.remove('not-valid');
        element.parentElement.lastElementChild.style.display = 'none';
    }
    
    function validationFail(element) {
        element.parentElement.classList.add('not-valid');
        element.parentElement.classList.remove('valid');
        element.parentElement.lastElementChild.style.display = 'block';  
    }
    
    
    for (let i=0; i < activitiesBox.length; i++) {
        activitiesBox[i].addEventListener('focus', (e) => {
            activitiesBox[i].parentElement.classList = 'focus';
        });
        activitiesBox[i].addEventListener('blur', (e) => {
            activitiesBox[i].parentElement.classList.remove('focus');
        });
    }
    
   
    form.addEventListener('submit', (e) => {
        if(!validName()){
            e.preventDefault();
        }
        if (!emailValidation()) {
            e.preventDefault();
        }
        
        if (!activitiesValid()){
            e.preventDefault();
        }
        if (payment.value === 'credit-card'){
            if (!creditCardValid()){
                e.preventDefault();}
        if (!zipCodeValid()){
            e.preventDefault();
        }
        if (!cvvValid()){
            e.preventDefault();
        }
    }
    });