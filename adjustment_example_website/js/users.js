
// Class for saving researcher information
class Researcher {
    constructor(title, firstName, surname, email, affiliateOrganization){
        this.title = title;
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.affiliateOrganization = affiliateOrganization;
    }
}

// List of registered users
const researchers = [];

// Function that creates a new user and adds it to the array 'researchers'
function registerUser(){
    var newResearcher = new Researcher(document.getElementById('titleselect').value, 
        document.getElementById('firstName').value,
        document.getElementById('surname').value,
        document.getElementById('email').value,
        document.getElementById('affiliateOrganization').value);
    researchers.push(newResearcher);
    return false;}
