/*   UC1 Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number
and email...*/

class AddressBook {
    
    constructor (firstname,lastname,address,city,state,zipcode,phoneNumber,emailId) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
    this.phoneNumber = phoneNumber;
    this.emailId = emailId;
}

/*  UC2 Ability to ensure Valid Contacts are added... */

get firstname() { return this._firstname; }
set firstname(firstname) {
    let pattern1 = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (pattern1.test(firstname))
        this._firstname = firstname;
    else console.log('FirstName is Incorrect!');

}

get lastname() { return this._lastname; }
set lastname(lastname) {
    let pattern2 = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (pattern2.test(lastname))
        this._lastname = lastname;
    else console.log('LastName is Incorrect!');
}

get address() { return this._address; }
set address(address) {
    let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if (pattern3.test(address))
        this._address = address;
    else console.log('Address is Incorrect!');
}

get city() { return this._city; }
set city(city) {
    let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if (pattern4.test(city))
        this._city = city;
    else console.log('City is Incorrect!');
}

get state() { return this._state; }
set state(state) {
    let pattern5 = RegExp('^[A-Z]{1}[a-z]{4,}$');
    if (pattern5.test(state))
        this._state = state;
    else console.log('State is Incorrect!');
}

get zipcode() { return this._zipcode; }
set zipcode(zipcode) {
    let pattern6 = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    if (pattern6.test(zipcode))
        this._zipcode = zipcode;
    else console.log('Zipcode is Incorrect!');
}

get phoneNumber() { return this._phoneNumber; }
set phoneNumber(phoneNumber) {
    let pattern7 = RegExp('^[+][0-9]{1,}\\s?[1-9]{1}[0-9]{9}$');
    if (pattern7.test(phoneNumber))
        this._phoneNumber = phoneNumber;
    else console.log('PhoneNumber is Incorrect!');
}

get emailId() { return this._emailId; }
set emailId(emailId) {
    let pattern8 = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
    if (pattern8.test(emailId))
        this._emailId = emailId;
    else console.log('EmailId is Incorrect!');
}

toString() {
    return "firstname= " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
        ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
        ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
}

}

/* UC3 Ability to create a New Address Book array and add new Contacts to it */

let contactArray = new Array();

const addressBook1 = new AddressBook("Shivraj","Jadhav","Solapur","Solapur","Maharashtra","413203","+91 7387557696","shivjadhav2806@gmail.com");
contactArray.push(addressBook1); 

const addressBook2 = new AddressBook("Kalpesh","Gandhi","Mumbai","Mumbai","Maharashtra","422104","+91 7741993813","kal@gmail.com");
contactArray.push(addressBook2); 

const addressBook3 = new AddressBook("Vedant","Chavan","Satara","Satara","Maharashtra","458365","+91 9268592659","ved@gmail.com");
contactArray.push(addressBook3); 

console.log("Number Of AddressBook : ")
console.log(contactArray.length);
for (var i = 0; i < contactArray.length; i++) {
    console.log(contactArray[i]);
}

/* UC4 Ability to find existing contact person using their name and edit it */

let result = contactArray.filter((e) => e.firstname == "Kalpesh");
console.log("result : "+result);

if (result && result.length > 0) {
    result[0].firstname = 'Rahul';
    result[0].address = 'Sinnar';
}

console.log("New Array after Updation: " + contactArray);

/* UC5 Ability to find a person with name and delete it from the array */

contactArray = contactArray.filter((e) => e.firstname != "Vedant");
console.log("New Array After Delete: " + contactArray);

/* UC6 Ability to find number of contacts in the address book */

let numOfContacts = contactArray.length;
console.log("Number of Contacts in the AddressBook: " + numOfContacts);

/* UC7 Ability to ensure there is no Duplicate Entry of the same Person in the Address Book */

const addressbook4 = new AddressBook("Shivraj","Jadhav","Solapur","Solapur","Maharashtra","413203","+91 7387557696","shivjadhav2806@gmail.com");
if (!contactArray.some(el => el.firstname == "Shivraj"))
contactArray.push(addressbook4);
else
console.log("Value already Exists!");

/* UC8 Ability to search Person in a particular City or State - Use Array Functions of filter */

let checkCity = contactArray.filter((e) => e.city == 'Solapur');
console.log("Contact from the addressBook as per Given city: " + checkCity);

let checkState = contactArray.filter((e) => e.state == 'Maharashtra');
console.log("Contact from the addressBook as per given state: " + checkState);

/* UC9 Ability to get number of contact persons i.e. count by City or State - Search Result will show count by city and by */

let counter = 0;
for (let i = 0; i < contactArray.length; i++) {
if (contactArray[i].city == 'Solapur')
    counter++;
}
console.log("Number of contacts for the given City in the AddressBook: " + counter);

let counter1 = 0;
for (let i = 0; i < contactArray.length; i++) {
if (contactArray[i].state == 'Maharashtra')
    counter1++;
}
console.log("Number of contacts for the given State in the AddressBook: " + counter1);