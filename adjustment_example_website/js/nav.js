// this is the html code for the navbar, implemented this way, to have the same navbar for all the pages
// without needing to change them all individually


var navbar = ` 
<nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
    <a href="index.html" class="navbar-brand">
        <h1 class="m-0 display-5 text-uppercase text-white"><img src="img/ICATH_logo.jpg" alt="ITAC_image" width="100" height="100"/>ICATH2022</h1>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 px-0">
            <a href="index.html" class="nav-item nav-link">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <div class="nav-item dropdown">
                <a href="papers_and_posters.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Papers & Posters</a>
                <div class="dropdown-menu m-0 bg-dark bg-light-radial">
                    <a href="papers_and_posters.html#overview" class="dropdown-item text-white">Overview</a>
                    <a href="papers_and_posters.html#topics" class="dropdown-item text-white">Topics</a>
                    <a href="papers_and_posters.html#conf_publ" class="dropdown-item text-white">Confirmed Publications</a>
                    <a href="papers_and_posters.html#author_guidelines" class="dropdown-item text-white">Author Guidelines</a>
                    <a href="papers_and_posters.html#deadlines" class="dropdown-item text-white">Deadlines</a>
                    <a href="registration.html" class="dropdown-item text-white">Register</a>
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
            <a href="sign_in.html" class="nav-item nav-link">Sign in</a>
        </div>
    </div>
</nav>`
;

// inserting navbar in beginning of body
document.getElementById('navbar').innerHTML = navbar