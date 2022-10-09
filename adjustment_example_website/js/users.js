
// Class for saving researcher information
class Researcher {
    constructor(title, firstName, surname, email, affiliateOrganization){
        this.title = title;
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.affiliateOrganization = affiliateOrganization;
        this.papers = [];
    }
}

// Class for uploaded papers
class Paper {
    constructor(title, author, file){
        this.title = title;
        this.author = author;
        this.file = file;
        this.reviewScore = 0;
    }
}

// List of registered users
const exampleResearcher = new Researcher("Mr.", "John", "Doe", "johndoe@hotmail.com", "Doecorp");
exampleResearcher.papers.push(new Paper("Study of something.", exampleResearcher, "papers/example1.pdf"));
const researchers = [exampleResearcher];

// Function that creates a new user and adds it to the array 'researchers'
function registerUser(){
    var newResearcher = new Researcher(document.getElementById('titleselect').value, 
        document.getElementById('firstName').value,
        document.getElementById('surname').value,
        document.getElementById('email').value,
        document.getElementById('affiliateOrganization').value);
    researchers.push(newResearcher);
    window.location.href = "index.html";
    return false;}


// Function that adds a new paper under the logged in researcher's name
function addPaper(){
    var paperAuthor = researchers[researchers.length-1];
    var newPaper = new Paper(document.getElementById('papername').value,
        paperAuthor,
        document.getElementById('myFile'));
    paperAuthor.papers.push(newPaper);
    document.getElementById('papersHere').insertAdjacentHTML('afterend',
        '<div><h6 class="text-uppercase">'+ newPaper.title +'</h6><a>By: '+ paperAuthor.title + ' '+ paperAuthor.firstName + ' ' + paperAuthor.surname + ', ' + paperAuthor.affiliateOrganization +'</a><br><a href="papers/example1.pdf" download>Download</a><br><a>'+ paperAuthor.email +'</a><br><br></div>');
    return false;}

