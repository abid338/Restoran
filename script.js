// Navbar Links Array 
const navLinks = [
  { text: "HOME", href: "#home", active: true },
  { text: "ABOUT", href: "#about", active: false },
  { text: "SERVICE", href: "#service", active: false },
  { text: "MENU", href: "#menu", active: false }
];
function renderNavLinks() {
  const container = document.getElementById('navbar-main');
  let html = '';
  navLinks.forEach(link => {
    html += `
      <li class="nav-item">
        <a class="nav-link nav-link-custom ${link.active ? 'active' : ''} px-3" href="${link.href}">
          ${link.text}
        </a>
      </li>
    `;
  });
  html += `
    <li class="nav-item dropdown">
      <a class="nav-link nav-link-custom dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown">
        PAGES
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Booking</a></li>
        <li><a class="dropdown-item" href="#">Our Team</a></li>
        <li><a class="dropdown-item" href="#">Testimonial</a></li>
      </ul>
    </li>
  `;
  html += `
    <li class="nav-item">
      <a class="nav-link nav-link-custom px-3" href="#contact">CONTACT</a>
    </li>
  `;
  html += `
    <li class="nav-item ms-2">
      <a href="#book" class="btn btn-custom px-4 py-2 rounded">BOOK A TABLE</a>
    </li>
  `;
  container.innerHTML = html;
}
// services Array
const services = [
  {
    icon: "fas fa-user-tie",
    title: "Master Chefs",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: "fas fa-utensils",
    title: "Quality Food",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: "fas fa-shopping-cart",
    title: "Online Order",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Service",
    description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  }
];
// Function
function renderServices() {
  const container = document.getElementById('services-container');
  let html = '';
  services.forEach(service => {
    html += `
      <div class="col-lg-3 col-md-6">
        <div class="card border-0 shadow-sm h-100 text-center p-4">
          <div class="card-body">
            <div class="mb-3">
              <i class="${service.icon} service-icon"></i>
            </div>
            <h5 class="card-title fw-bold mb-3">${service.title}</h5>
            <p class="card-text text-muted">${service.description}</p>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
// Company Links Array 
const companyLinks = [
  { text: "About Us", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Reservation", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Terms & Condition", href: "#" }
];
function renderCompanyLinks() {
  const container = document.getElementById('company-links');
  let html = '';
  companyLinks.forEach(link => {
    html += `
      <li class="mb-2">
        <i class="fas fa-chevron-right me-2" style="font-size: 12px"></i>
        <a href="${link.href}" class="text-light text-decoration-none">${link.text}</a>
      </li>
    `;
  });
  container.innerHTML = html;
}
// contact info Array 
const contactInfo = [
  { icon: "fas fa-map-marker-alt", text: "J2 Block, Johar Town, Lahore" },
  { icon: "fas fa-phone", text: "+92 306 3813338" },
  { icon: "fas fa-envelope", text: "abid6527842@gmail.com" }
];
function renderContactInfo() {
  const container = document.getElementById('contact-info');
  let html = '';
  contactInfo.forEach(contact => {
    html += `
      <li class="mb-3">
        <i class="${contact.icon} me-3 footer-icon"></i>
        ${contact.text}
      </li>
    `;
  });
  container.innerHTML = html;
}
// social media Link array 
const socialMedia = [
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-youtube", href: "#" },
  { icon: "fab fa-linkedin-in", href: "#" }
];
function renderSocialMedia() {
  const container = document.getElementById('social-media');
  let html = '';
  socialMedia.forEach(social => {
    html += `
      <a href="${social.href}" class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center social-btn">
        <i class="${social.icon}"></i>
      </a>
    `;
  });
  container.innerHTML = html;
}
// Functions Call 
window.onload = function() {
  renderNavLinks();
  renderServices();
  renderCompanyLinks();
  renderContactInfo();
  renderSocialMedia();
};