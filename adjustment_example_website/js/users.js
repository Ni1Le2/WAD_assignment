
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
    constructor(title, author, content){
        this.title = title;
        this.author = author;
        this.content = content;
        this.reviewScore = 0;
    }
}

// Function that creates a new user and adds it to localstorage
function registerUser(){
    var newResearcher = new Researcher(document.getElementById('titleselect').value, 
        document.getElementById('firstName').value,
        document.getElementById('surname').value,
        document.getElementById('email').value,
        document.getElementById('affiliateOrganization').value);
    userStorage.push(newResearcher);
    localStorage.setItem("users", JSON.stringify(userStorage));
    userListBuilder(newResearcher.title + ' ' + newResearcher.firstName + ' ' + newResearcher.surname);
    // window.location.href = "index.html";
    return false;}



// Function that saves a new paper in localstorage
function addPaper(){
    var paperAuthor = currentUser;
    var newPaper = new Paper(document.getElementById('papername').value,
        paperAuthor, document.getElementById('myFile').value);
    paperStorage.push(newPaper);
    localStorage.setItem("papers", JSON.stringify(paperStorage));
    paperListBuilder('<h6 class="text-uppercase">'+ newPaper.title +'</h6><a>By: '+ paperAuthor.title + ' '+ paperAuthor.firstName + ' ' + paperAuthor.surname + ', ' + paperAuthor.affiliateOrganization + '<br><br>'+ newPaper.content +'<br><br>' + paperAuthor.email +'</a><br><br>');
    
    return false;}

// Storage destinations for users and papers
let userStorage = localStorage.getItem("users")
? JSON.parse(localStorage.getItem("users"))
: [];

let paperStorage = localStorage.getItem("papers")
? JSON.parse(localStorage.getItem("papers"))
: [];

// Helper functions for posting users and papers as a list
const userListBuilder = (text) => {
    const userInfo = document.createElement("li");
    userInfo.innerHTML = text + ' <button onclick="deleteUser(this)">x</button>';
    document.getElementById('usersHere').appendChild(userInfo);
  };

const paperListBuilder = (text) => {
    const paperInfo = document.createElement("div");
    paperInfo.innerHTML = '<div>'+ text + ' <button onclick="deletePaper(this)">x</button>' + '</div>';
    document.getElementById('papersHere').appendChild(paperInfo);
  };

// Functions that check which page the user is viewing and acts accordingly by posting the saved users or papers
if(window.location.pathname == '/adjustment_example_website/registration.html'){
const getNotes = JSON.parse(localStorage.getItem("users"));
  getNotes.forEach((user) => {
    userListBuilder(user.title + ' ' + user.firstName + ' ' + user.surname);
  });
} else{
    const getUsers = JSON.parse(localStorage.getItem("users"));
    getUsers.forEach((user) => {
        currentUser = user;
      });
};

if(window.location.pathname == '/adjustment_example_website/papers_and_posters.html'){
    const getNotes = JSON.parse(localStorage.getItem("papers"));
      getNotes.forEach((paper) => {
        paperListBuilder('<h6 class="text-uppercase">'+ paper.title +'</h6><a>By: '+ paper.author.title + ' '+ paper.author.firstName + ' ' + paper.author.surname + ', ' + paper.author.affiliateOrganization + '<br><br>'+ paper.content +'<br><br>' + paper.author.email +'</a><br><br>');
      });
    };

// Helper functions for deleting users and papers
const deleteUser = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    userStorage.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(userStorage));
    el.remove();
  };

const deletePaper = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    paperStorage.splice(index, 1);
    localStorage.setItem("papers", JSON.stringify(paperStorage));
    el.remove();
  };