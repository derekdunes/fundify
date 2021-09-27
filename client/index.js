const form = document.querySelectorAll('.donate-form');
const submitInput = form[0].querySelector('button[type="submit"]')
const fillDonationSection = document.querySelector('section[id="fill-donation"]');
const confirmDonationSection = document.querySelector('section[id="confirm-donation"]');
const cancelDonationSection = document.getElementById("cancel-section");
const confirmedDonationSection = document.getElementById("confirm-section"); 
const errorSection = document.getElementById("error-section"); 

document.addEventListener('DOMContentLoaded', function () {
    
    submitInput.addEventListener('click', getFormData, false);

}, false);

function getFormData(e) {
    e.preventDefault();

    var formData = new FormData(form[0]);

    //check the freq of payment(monthly or yearly) and calculate the new amont for donation
    var newAmount = calcDonation(formData.get('freq'), formData.get('amount'))//frequency, amount

    //update the confirm pages
    updateConfirmPageLabels(formData, newAmount);

    //perform currency conversion

    //get the form data and hide the fund section/ and show the confirm section and empty the fill-donation section
    fillDonationSection.hidden=true;
    fillDonationSection.innerHTML = "";
    confirmDonationSection.hidden=false;
    

}

function updateConfirmPageLabels(formData, newAmount) {

    var firstName = formData.get('first-name') 
    var lastName = formData.get('last-name');
    var address = formData.get('address');
    var city = formData.get('city');
    var state = formData.get('state');
    var country = formData.get('country');
    var postalCode = formData.get('postal-code')
    var phone = formData.get('phone-number');
    var email = formData.get('email');
    var contactPref = formData.get('pref');
    var currency = formData.get('currency');
    var donationFreq = formData.get('freq');

    //var amount = formData.get('amount'); //use the new amount instead of the old amount
    var comment = formData.get('comment');

    const formDataArray = [firstName, lastName, address, city, state, country, postalCode, phone, email, contactPref, currency, donationFreq, newAmount, comment]

    for (let i = 0; i < 14; i++){

        var labelId = "label" + (i+1);
        //console.log(labelClassName);
        //console.log(formDataArray[i]);
        const labelTag = document.getElementById(labelId);
        labelTag.innerHTML = formDataArray[i];

    }
}

function calcDonation(donationFreq, amount) {

    //check the donation
    if(donationFreq === 'monthly') {
        return amount * 12;//monthly for  year
    } else { //yearly and one-off is once
        return amount
    }
}

//controls the visibility and Updating of the edit buttons 
function editandUpdateSwitch(id) {
    //console.log(id);
    var labelId = 'label' + id;
    var inputId = 'input' + id;
    var buttonId = 'btn-' + id;

    const label = document.getElementById(labelId);
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);

    // console.log(label);
    // console.log(input);
    // console.log(button);

    //if button is Edit change the value to Update
    //if button is Update change the value to Edit

    var buttonName = button.innerHTML;

    if(buttonName === 'Edit') {
        //change name to update and make the input visible
        //set the value of the label to the input
        button.innerHTML = 'Update';
        input.hidden = false;
        input.value = label.innerHTML; //check for the type of input to determine how to its content .value or .innerhtml 

    } else {
        //inverse
        button.innerHTML = 'Edit';
        input.hidden = true;
        label.innerHTML = input.value;
    }
 
}

function cancelDonation() {
    //hide the confirmation section and empty its content
    confirmDonationSection.hidden=true;
    confirmDonationSection.innerHTML="";
    cancelDonationSection.hidden=false;
}

function confirmDonation() {
    //Get and save the content
    //fetch('');

    const labelArray = [];

    //get all the label contents
    for (let i = 1; i < 15; i++){ 
        var labelId = 'label' + (i);

        const label = document.getElementById(labelId);

        //console.log(label.innerHTML);
        labelArray.push(label.innerHTML);

    }


    //save to db
    fetch('http://localhost:5000/save', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(labelArray)
    })
    .then(response => {
        if (!response.ok) {
            //show the error page
            confirmDonationSection.hidden=true;
            confirmDonationSection.innerHTML="";
            errorSection.hidden=false;
            throw new Error("HTTP error" + response.stats);
            
        }
        //console.log(response.json());
        
        //continue confirmation
        //hide the confirmation section and empty its content
        confirmDonationSection.hidden=true;
        confirmDonationSection.innerHTML="";
        confirmedDonationSection.hidden=false;
    })
    .then(data => console.log(data))
    .catch(err => {
        //if there is an error show the error page
        confirmDonationSection.hidden=true;
        confirmDonationSection.innerHTML="";
        errorSection.hidden=false;
        console.log(err);
    });
    

}

// const _calcDonation = calcDonation;
// export { _calcDonation as calcDonation };