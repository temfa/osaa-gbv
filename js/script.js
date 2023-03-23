window.addEventListener("DOMContentLoaded", () => {
  let year = new Date();
  let newYear = year.getFullYear();
  let footer = document.getElementById("footer");
  let header = document.getElementById("header");
  let topHeader = document.getElementById("top-header");
  let navbar = document.getElementById("navbarSupportedContent");
  let user = window.sessionStorage.getItem("user");
  let correctUser = JSON.parse(user);

  header.innerHTML += `
    <div class="container">
          <div class="row">
            <p class="logo font-italic font-weight-bold col-lg-4 text-lg-left text-center">OSAA-GBV</p>
            <div class="col-lg-8 right-info-agiles mt-lg-0 mt-sm-3 mt-1">
              <div class="row">
                <div class="col-sm-5 nav-middle">
                  <i class="far fa-envelope-open text-center mr-md-4 mr-sm-2 mr-4"></i>
                  <div class="agile-addresmk">
                    <p>
                      <span class="font-weight-bold text-dark">Mail Us</span>
                      <a href="mailto:info@osgbv.ondostate.gov.ng">info@osgbv.ondostate.gov.ng</a>
                    </p>
                  </div>
                </div>
                <div class="col-sm-4 col-6 nav-middle mt-sm-0 mt-2">
                  <i class="fas fa-phone-volume text-center mr-md-4 mr-sm-2 mr-4"></i>
                  <div class="agile-addresmk">
                    <p>
                      <span class="font-weight-bold text-dark">Call Us</span>
                      +234-8034345100
                    </p>
                  </div>
                </div>
                <div class="col-sm-3 col-6 top-login-butt text-right mt-sm-2">
                ${correctUser !== null ? `<p>${correctUser.fullName}</p>` : `<a href="login.html" class="button-head-mow3 text-white">Login</a>`}
                </div>
              </div>
            </div>
          </div>
        </div>
    `;

  topHeader.innerHTML += `
            <div class="container">
                <div class="row">
                    <h1 class="text-capitalize text-white col-7"><i class="fas fa-book text-dark bg-white p-2 rounded-circle mr-3"></i>welcome to OSAA-GBV E-learning</h1>
                    <!-- social icons -->
                    <div class="social-icons text-right col-5">
                    <ul class="list-unstyled">
                        <li>
                        <a href="#" class="fab fa-facebook-f icon-border facebook rounded-circle"> </a>
                        </li>
                        <li class="mx-2">
                        <a href="#" class="fab fa-twitter icon-border twitter rounded-circle"> </a>
                        </li>
                        <li>
                        <a href="#" class="fab fa-google-plus-g icon-border googleplus rounded-circle"> </a>
                        </li>
                        <li class="ml-2">
                        <a href="#" class="fas fa-rss icon-border rss rounded-circle"> </a>
                        </li>
                    </ul>
                    </div>
                    <!-- //social icons -->
                </div>
            </div>
`;

  footer.innerHTML += `
    <div>
    <div class="container py-4">
        <div class="row py-xl-5 py-sm-3">
          <div class="col-lg-6 map">
            <h2 class="contact-title text-capitalize text-white font-weight-light mb-sm-4 mb-3">
              our
              <span class="font-weight-bold">directions</span>
            </h2>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Oke+eda,+Akure,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            <div class="conta-posi-w3ls p-4 rounded">
              <h5 class="text-white font-weight-bold mb-3">Address</h5>
              <p>Old Sectariat <span> Oke-Eda Akure </span>, Ondo State</p>
            </div>
          </div>
          <div class="col-lg-6 contact-agileits-w3layouts mt-lg-0 mt-4">
            <h4 class="contact-title text-capitalize text-white font-weight-light mb-sm-4 mb-3">
              get in
              <span class="font-weight-bold">touch</span>
            </h4>
            <p class="conta-para-style border-left pl-4">
              If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.
            </p>
            <div class="subscribe-w3ls my-xl-5 my-4">
              <h6 class="text-white text-capitalize mb-4">subscribe our newsletter</h6>
              <form action="#" method="post" class="subscribe_form">
                <input class="form-control" type="email" name="email" placeholder="Enter your email..." required="" />
                <button type="submit" class="btn btn-primary submit">Submit</button>
              </form>
            </div>
            <p class="para-agileits-w3layouts text-white"><i class="fas fa-map-marker pr-3"></i>Old Sectariat Oke-Eda Akure, Ondo State.</p>
            <p class="para-agileits-w3layouts text-white my-sm-3 my-2"><i class="fas fa-phone pr-3"></i>+234-8030419049</p>
            <p class="para-agileits-w3layouts text-white my-sm-3 my-2"><i class="fas fa-phone pr-3"></i>+234-8034345100</p>
            <p class="para-agileits-w3layouts">
              <i class="far fa-envelope-open pr-2"></i>
              <a href="mailto:info@osgbv.ondostate.gov.ng" class="text-white">info@osgbv.ondostate.gov.ng</a>
            </p>
          </div>
        </div>
      </div>
      <div class="copyright-agiles py-3">
        <div class="container">
          <div class="row">
            <p class="col-lg-8 copy-right-grids text-white text-lg-left text-center mt-lg-1">
              © ${newYear} OSAA-GBV. All Rights Reserved | Design by
              <a href="https://sita.ondostate.gov.ng/" target="_blank">SITA</a>
            </p>
            <!-- social icons -->
            <div class="social-icons text-lg-right text-center col-lg-4 mt-lg-0 mt-3">
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="fab fa-facebook-f icon-border facebook rounded-circle"> </a>
                </li>
                <li class="mx-2">
                  <a href="#" class="fab fa-twitter icon-border twitter rounded-circle"> </a>
                </li>
                <li>
                  <a href="#" class="fab fa-google-plus-g icon-border googleplus rounded-circle"> </a>
                </li>
                <li class="ml-2">
                  <a href="#" class="fas fa-rss icon-border rss rounded-circle"> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

  navbar.innerHTML += `
    <ul class="navbar-nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link text-white" href="index.html"
                  >Home
                  <!-- <span class="sr-only">(current)</span> -->
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="https://osgbv.ondostate.gov.ng/index.php/about/" target="_blank">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="courses.html">Courses</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Courses </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="language.html">Module 1</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="communication.html">Module 2</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="business.html">Module 3</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="software.html">Module 4</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="social_media.html">Module 5</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="photography.html">Module 6</a>
                </div>
              </li>-->
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="about.html">Instructors</a>
                  <a class="dropdown-item" href="index.html">What We Do</a>
                  <a class="dropdown-item" href="login.html">Login</a>
                  <a class="dropdown-item" href="register.html">Register</a>
                  <a class="dropdown-item" href="404.html">404 Page</a>
                  <a class="dropdown-item" href="coming_soon.html">Coming Soon</a>
                  <a class="dropdown-item" href="form.html">Admission Form</a>
                  <a class="dropdown-item" href="faq.html">Faq</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="gallery.html">Gallery</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link text-white" href="contact.html">Contact Us</a>
              </li>
            </ul>
`;
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("a");
  const listItem = document.querySelectorAll("li");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    const menuSplit = menuItem[i].href.split("/");
    if (menuItem[i].href === currentLocation) {
      if (menuSplit[menuSplit.length - 1] === "index.html") {
        listItem[i + 7].classList.add("active");
      } else if (menuSplit[menuSplit.length - 1] === "contact.html") {
        listItem[i - 1].classList.add("active");
      } else {
        listItem[i - 2].classList.add("active");
      }
    } else {
      listItem[6].classList.add("active");
    }
  }
});
