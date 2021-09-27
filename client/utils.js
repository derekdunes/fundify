export function getLabelsArray() {

    const labelArray = [];

    //get all the label contents
    for (let i = 1; i < 15; i++){ 
        var labelId = 'label' + (i);

        const label = document.getElementById(labelId);

        //console.log(label.innerHTML);
        labelArray.push(label.innerHTML);

    }

    return labelArray;
}

//controls the visibility and Updating of the edit buttons 
export function editandUpdateSwitch(id) {
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

export function calcDonation(donationFreq, amount) {

    //check the donation
    if(donationFreq === 'monthly') {
        return amount * 12;//monthly for  year
    } else { //yearly and one-off is once
        return amount
    }
}

export function updateConfirmPageLabels(formData, newAmount) {

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

export function isFormDataEmpty(formData){
    const formLabelArray = ['first-name', 'last-name', 'address', 'city', 'state', 'country', 'postal-code', 'phone-number', 'email', 'pref', 'currency', 'freq', 'amount', 'comment']

 
    for (let index = 0; index < formLabelArray.length; index++) {
        
        var formValue = formData.get(formLabelArray[index]).trim();
        
        //console.log(formValue);

        if(formValue.length === 0){
            //first show error message
            //console.log(formLabelArray[index]);
            var span = document.getElementById(formLabelArray[index]);
            span.hidden = false;
            return true;
        }

    }

    return false;
}

