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
const checkbox= document.querySelectorAll('input[type="checkbox"]');
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

//adding focus state to the name field 
nameElement.focus(); 

//Hidding "Other Job Role" field by default 
otherJobRole.type='hidden';

//"Job Role" menu is displayed, if "Other Job Role" is chosen, this is allow for new field input.
jobRole.addEventListener('change',(e)=>{
    if(e.target.value ==='other'){
        otherJobRole.type='text';
    }else{
        otherJobRole.type='hidden';
    }
    });


    //T-shirt section allows user to pick design followed by colors available. 
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
            

//Total cost of selected activities in "Register for Activities" is totaled and display for the user
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

//Preferred payment(credit card) and requirements are displayed. Other options are hidden until chosen. 
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

  
//Form Validation- Users will not be allowed to submit form without the required information.

form.addEventListener('submit', (e) => {
    function NameValid() {
        return regexName = /^[a-zA-z ,.'-]+$/.test(nameElement);
    };
    function EmailValid() {
        return regexEmail = /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
    };
    function ActivityChecked() {
        if (totalCost === 0) {
            return false;
        } else {
            return true;
        }
    };
    function CCNumValid() {
        return regexCCNum = /^\d{13,16}$/.test(ccNum);
    };
    function ZipValid() {
        return regexZip = /^\d{5}$/.test(zip);
    };
    function CVVValid() {
        return regexCVV = /^\d{3}$/.test(cvv);
    };
  
    if (!NameValid()) {
        e.preventDefault();
        notValid(nameElement);
    } else {
        isValid(nameElement);
    };

    if (!EmailValid()) {
        e.preventDefault();
        notValid(email);
    } else {
        isValid(email);
    };
    if (!ActivityChecked()) {
        e.preventDefault();
        notValid(activitiesBox);
    } else {
        isValid(activitiesBox);
    };

    if (payment.children[1].selected === true) {
        if (!CCNumValid()) {
            e.preventDefault();
            notValid(ccNum);
        } else {
            isValid(ccNum);
        };
        if (!ZipValid()) {
            e.preventDefault();
            notValid(zip);
        } else {
            isValid(zip);
        };
        if (!CVVValid()) {
            e.preventDefault();
            notValid(cvv);
        } else {
            isValid(cvv);
        };
    };
});

function notValid(field) {
    field.parentNode.classList.add('not-valid');
    field.parentNode.classList.remove('valid');
    field.parentNode.lastElementChild.style.display = 'block';
}
function isValid(field) {
    field.parentNode.classList.add('valid');
    field.parentNode.classList.remove('not-valid');
    field.parentNode.lastElementChild.style.display = 'none';
}


//Checkboxes in "Register for Activitiy" section are in focus to imporve accessibility.
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus', (e) => {
        checkbox[i].parentNode.classList.add('focus');
    });
    checkbox[i].addEventListener('blur', (e) => {
        checkbox[i].parentNode.classList.remove('focus');
    });
};

