// Navbar Links Array 
const navLinks = [
  { text: "HOME", href: "#home", active: true },
  { text: "ABOUT", href: "#about", active: false },
  { text: "SERVICE", href: "#service", active: false },
  { text: "MENU", href: "#menu", active: false },
  
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

// Ambiance Section Data
const ambianceData = {
  sectionTitle: "Our Atmosphere",
  mainHeading: "Experience The Perfect Ambiance",
  mainDescription: "Step into a world where elegance meets comfort. Our restaurant's carefully designed interior creates an atmosphere that transforms every meal into a memorable experience. From the warm ambient lighting to the sophisticated décor, every element has been thoughtfully curated to provide you with the ultimate dining experience.",
  secondaryDescription: "Whether you're celebrating a special occasion, enjoying an intimate dinner for two, or hosting a business gathering, our versatile spaces adapt to your needs. The gentle background music, comfortable seating arrangements, and attentive service combine to create an environment where conversation flows naturally and memories are made.",
  features: [
    {
      icon: "fas fa-lightbulb",
      title: "Perfect Lighting",
      description: "Carefully designed ambiance"
    },
    {
      icon: "fas fa-music",
      title: "Live Music",
      description: "Soothing background melodies"
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=500&fit=crop",
      alt: "Restaurant Interior",
      title: "Main Dining Hall"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop",
      alt: "Dining Area",
      title: "Intimate Setting"
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=500&fit=crop",
      alt: "Elegant Seating",
      title: "VIP Section"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=500&fit=crop",
      alt: "Cozy Ambiance",
      title: "Evening Atmosphere"
    }
  ]
};

function renderAmbianceSection() {
  // Render section titles
  document.getElementById('ambiance-section-title').textContent = ambianceData.sectionTitle;
  document.getElementById('ambiance-main-heading').textContent = ambianceData.mainHeading;
  document.getElementById('ambiance-main-desc').textContent = ambianceData.mainDescription;
  document.getElementById('ambiance-secondary-desc').textContent = ambianceData.secondaryDescription;
  
  // Render features
  const featuresContainer = document.getElementById('ambiance-features');
  let featuresHtml = '';
  ambianceData.features.forEach(feature => {
    featuresHtml += `
      <div class="col-6">
        <div class="ambiance-feature">
          <i class="${feature.icon} text-warning fs-2 mb-3"></i>
          <h5 class="fw-bold">${feature.title}</h5>
          <p class="text-muted small">${feature.description}</p>
        </div>
      </div>
    `;
  });
  featuresContainer.innerHTML = featuresHtml;
  
  // Render gallery
  renderAmbianceGallery();
}

function renderFoodQualitySection() {
  // Render section titles
  document.getElementById('food-section-title').textContent = foodQualityData.sectionTitle;
  document.getElementById('food-main-heading').textContent = foodQualityData.mainHeading;
  document.getElementById('food-main-desc').textContent = foodQualityData.mainDescription;
  document.getElementById('food-secondary-desc').textContent = foodQualityData.secondaryDescription;
  
  // Render highlights
  const highlightsContainer = document.getElementById('food-highlights');
  let highlightsHtml = '';
  foodQualityData.highlights.forEach(highlight => {
    highlightsHtml += `
      <div class="d-flex align-items-start mb-3">
        <i class="${highlight.icon} text-warning fs-4 me-3 mt-1"></i>
        <div>
          <h6 class="fw-bold mb-1">${highlight.title}</h6>
          <p class="text-muted small mb-0">${highlight.description}</p>
        </div>
      </div>
    `;
  });
  highlightsContainer.innerHTML = highlightsHtml;
  
  // Render gallery
  renderFoodQualityGallery();
}

function renderChefStaffSection() {
  // Render section titles
  document.getElementById('chef-section-title').textContent = chefStaffData.sectionTitle;
  document.getElementById('chef-main-heading').textContent = chefStaffData.mainHeading;
  document.getElementById('chef-sub-heading').textContent = chefStaffData.subHeading;
  document.getElementById('chef-main-desc').textContent = chefStaffData.mainDescription;
  document.getElementById('chef-secondary-desc').textContent = chefStaffData.secondaryDescription;
  
  // Render team members
  renderTeamMembers();
}

function renderAmbianceGallery() {
  const container = document.getElementById('ambiance-gallery');
  let html = '';
  ambianceData.gallery.forEach(image => {
    html += `
      <div class="col-6">
        <div class="ambiance-gallery-item">
          <img src="${image.src}" alt="${image.alt}" title="${image.title}" />
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Food Quality Section Data
const foodQualityData = {
  sectionTitle: "Quality Assurance",
  mainHeading: "Fresh Ingredients, Exceptional Taste",
  mainDescription: "At the heart of our culinary excellence lies our unwavering commitment to quality. We source only the finest, freshest ingredients from trusted local suppliers and international markets. Every vegetable, every cut of meat, and every spice is carefully selected to meet our exacting standards.",
  secondaryDescription: "Our state-of-the-art kitchen is equipped with modern facilities that maintain the highest hygiene standards. From farm to table, we monitor every step of the process to ensure that what reaches your plate is nothing short of perfection. Our chefs take pride in preparing each dish with meticulous attention to detail, preserving natural flavors while creating culinary masterpieces.",
  highlights: [
    {
      icon: "fas fa-check-circle",
      title: "Farm-Fresh Ingredients",
      description: "Sourced daily from trusted local farms"
    },
    {
      icon: "fas fa-check-circle",
      title: "Hygiene Standards",
      description: "International food safety certifications"
    },
    {
      icon: "fas fa-check-circle",
      title: "Quality Control",
      description: "Rigorous inspection at every stage"
    }
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=400&fit=crop",
      alt: "Fresh Ingredients",
      title: "Organic Vegetables"
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=400&fit=crop",
      alt: "Professional Kitchen",
      title: "Modern Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=400&fit=crop",
      alt: "Delicious Food",
      title: "Gourmet Preparation"
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop",
      alt: "Gourmet Dishes",
      title: "Fine Dining"
    }
  ]
};

function renderFoodQualityGallery() {
  const container = document.getElementById('food-quality-gallery');
  let html = '';
  foodQualityData.gallery.forEach(image => {
    html += `
      <div class="col-6">
        <div class="food-quality-item">
          <img src="${image.src}" alt="${image.alt}" title="${image.title}" />
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Chef and Staff Section Data
const chefStaffData = {
  sectionTitle: "Our Team",
  mainHeading: "Meet Our Master Chefs & Staff",
  subHeading: "Behind every exceptional dish is a team of passionate culinary experts dedicated to excellence",
  mainDescription: "Our team is the cornerstone of our success. Led by award-winning master chefs with decades of combined experience, our kitchen brigade brings together talent from around the world. Each chef specializes in different cuisines, allowing us to offer an authentic and diverse menu that satisfies even the most discerning palates.",
  secondaryDescription: "Beyond our culinary experts, our front-of-house team ensures that your dining experience is seamless from the moment you walk through our doors. Our professional waitstaff are trained in the art of hospitality, attentive to your needs without being intrusive, and knowledgeable about every dish and beverage we serve.",
  team: [
    {
      name: "Chef Marco Rodriguez",
      role: "Executive Head Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
      description: "Award-winning chef with 20+ years of culinary excellence",
      specialty: "Mediterranean Cuisine"
    },
    {
      name: "Chef Sarah Thompson",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1560398982-5e91eb0fec75?w=400&h=400&fit=crop",
      description: "Specializing in contemporary fusion cuisine",
      specialty: "Asian Fusion"
    },
    {
      name: "Michael Chen",
      role: "Head Waiter",
      image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&h=400&fit=crop",
      description: "Dedicated to providing exceptional dining experiences",
      specialty: "Customer Service"
    },
    {
      name: "Chef Isabella Martinez",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop",
      description: "Master of desserts and sweet creations",
      specialty: "French Pastry"
    }
  ]
};

function renderTeamMembers() {
  const container = document.getElementById('team-gallery');
  let html = '';
  chefStaffData.team.forEach(member => {
    html += `
      <div class="col-lg-3 col-md-6">
        <div class="team-card">
          <div class="team-card-img">
            <img src="${member.image}" alt="${member.name}" />
          </div>
          <div class="team-card-body">
            <h5 class="team-card-title">${member.name}</h5>
            <p class="team-card-role">${member.role}</p>
            <p class="team-card-description">${member.description}</p>
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
  renderAmbianceSection();
  renderFoodQualitySection();
  renderChefStaffSection();
  renderCompanyLinks();
  renderContactInfo();
  renderSocialMedia();
};