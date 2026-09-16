import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="navbar">
    <a href="#" class="logo">
      <div class="logo-icon">✦</div>
      Trip<span>Sync</span>
    </a>

    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#trips">Explore</a>
      <a href="#experience">Experience</a>
      <a href="#how-it-works">How It Works</a>
    </nav>

    <div class="nav-actions">
      <button class="nav-btn">Login</button>
      <button class="nav-btn primary">Sign Up</button>
    </div>
  </header>

  <main>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-content">

        <div class="hero-badge">
          ✦ Smart travel. Better journeys.
        </div>

        <h1>
          Your journey,
          <br />
          <span>synced perfectly.</span>
        </h1>

        <p>
          Book buses, trains and flights in one seamless experience.
          Tell TripSync how you want to travel — we'll help find the
          experience that fits you.
        </p>

        <div class="hero-buttons">
          <a href="#search" class="btn btn-primary">
            Start Exploring →
          </a>

          <a href="#experience" class="btn btn-light">
            Discover TripSync
          </a>
        </div>

      </div>
    </section>

    <!-- SEARCH -->
    <div class="search-wrapper" id="search">
      <div class="search-card">

        <div class="search-tabs">
          <button class="search-tab active">🚌 Bus</button>
          <button class="search-tab">🚆 Train</button>
          <button class="search-tab">✈️ Flight</button>
        </div>

        <div class="search-fields">

          <div class="field">
            <label>FROM</label>
            <input type="text" placeholder="Departure city" />
          </div>

          <div class="field">
            <label>TO</label>
            <input type="text" placeholder="Destination city" />
          </div>

          <div class="field">
            <label>DATE</label>
            <input type="date" />
          </div>

          <div class="field">
            <label>PASSENGERS</label>
            <select>
              <option>1 Passenger</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4 Passengers</option>
              <option>5+ Passengers</option>
            </select>
          </div>

          <button class="search-button">
            Search
          </button>

        </div>

      </div>
    </div>

    <!-- EXPERIENCE -->
    <section class="experience-section" id="trips">

      <div class="section-heading">
        <div class="eyebrow">ONE PLATFORM</div>

        <h2>
          Travel your way.
        </h2>

        <p>
          One place for every journey, whether you're crossing a city
          or crossing the country.
        </p>
      </div>

      <div class="experience-grid">

        <article class="experience-card">
          <div class="experience-icon">🚌</div>

          <h3>Bus</h3>

          <p>
            Find comfortable routes and choose the experience
            that matches your preferences.
          </p>

          <div class="card-arrow">→</div>
        </article>

        <article class="experience-card">
          <div class="experience-icon">🚆</div>

          <h3>Train</h3>

          <p>
            Discover available journeys and choose seats or berths
            based on how you want to travel.
          </p>

          <div class="card-arrow">→</div>
        </article>

        <article class="experience-card">
          <div class="experience-icon">✈️</div>

          <h3>Flight</h3>

          <p>
            Search flights and let TripSync help you find a seat
            that fits your journey.
          </p>

          <div class="card-arrow">→</div>
        </article>

      </div>

    </section>

    <!-- CHOOSE YOUR EXPERIENCE -->
    <section class="preference-section" id="experience">

      <div class="section-heading">
        <div class="eyebrow">THE TRIPSYNC DIFFERENCE</div>

        <h2>
          Choose your experience.
        </h2>

        <p>
          Don't just choose a seat. Tell us what matters to you.
        </p>
      </div>

      <div class="preference-container">

        <div class="preference-content">

          <h2>
            Your seat should match your journey.
          </h2>

          <p>
            TripSync looks at your preferences and available seats
            to recommend an option that fits you best.
          </p>

          <div class="preference-list">

            <button class="preference-chip selected">
              🪟 Window
            </button>

            <button class="preference-chip">
              😴 Quiet
            </button>

            <button class="preference-chip">
              🚪 Near Exit
            </button>

            <button class="preference-chip">
              🦵 Extra Legroom
            </button>

            <button class="preference-chip">
              👥 Sit Together
            </button>

            <button class="preference-chip">
              💰 Budget
            </button>

            <button class="preference-chip">
              ⭐ Premium
            </button>

          </div>

        </div>

        <div class="recommendation-card">

          <div class="recommendation-top">

            <strong>TripSync AI</strong>

            <span class="match-badge">
              96% MATCH
            </span>

          </div>

          <h3>✨ Best Match — Seat 12A</h3>

          <p>
            Selected based on your travel preferences.
          </p>

          <div class="seat-preview">

            <div class="seat">11A</div>
            <div class="seat">11B</div>
            <div class="seat">11C</div>
            <div class="seat">11D</div>

            <div class="seat selected">12A</div>
            <div class="seat">12B</div>
            <div class="seat">12C</div>
            <div class="seat">12D</div>

            <div class="seat">13A</div>
            <div class="seat">13B</div>
            <div class="seat">13C</div>
            <div class="seat">13D</div>

          </div>

          <div class="recommendation-details">

            <div class="detail">
              <small>POSITION</small>
              <strong>Window</strong>
            </div>

            <div class="detail">
              <small>SPACE</small>
              <strong>Extra Legroom</strong>
            </div>

            <div class="detail">
              <small>PRICE</small>
              <strong>₹899</strong>
            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- HOW IT WORKS -->
    <section class="steps-section" id="how-it-works">

      <div class="section-heading">

        <div class="eyebrow">SIMPLE BY DESIGN</div>

        <h2>
          How TripSync works.
        </h2>

        <p>
          From search to boarding, everything stays connected.
        </p>

      </div>

      <div class="steps">

        <div class="step">
          <div class="step-number">01</div>
          <h3>Search</h3>
          <p>
            Enter your destination and travel date.
          </p>
        </div>

        <div class="step">
          <div class="step-number">02</div>
          <h3>Choose</h3>
          <p>
            Tell TripSync what kind of experience you prefer.
          </p>
        </div>

        <div class="step">
          <div class="step-number">03</div>
          <h3>Book</h3>
          <p>
            Select your recommended seat and confirm your trip.
          </p>
        </div>

        <div class="step">
          <div class="step-number">04</div>
          <h3>Travel</h3>
          <p>
            Your ticket stays safely inside My Tickets.
          </p>
        </div>

      </div>

    </section>

    <!-- GROUP TRAVEL -->
    <section class="group-section">

      <div class="group-container">

        <div class="group-content">

          <div class="eyebrow">
            TRAVEL TOGETHER
          </div>

          <h2>
            Four people.
            One smart seating plan.
          </h2>

          <p>
            Travelling with friends or family shouldn't mean fighting
            over seats. TripSync can consider everyone's preferences
            and find a practical arrangement together.
          </p>

          <div class="group-features">

            <div class="group-feature">
              <span>✓</span>
              Group seating optimization
            </div>

            <div class="group-feature">
              <span>✓</span>
              Individual preferences
            </div>

            <div class="group-feature">
              <span>✓</span>
              Available-seat matching
            </div>

            <div class="group-feature">
              <span>✓</span>
              One booking for everyone
            </div>

          </div>

        </div>

        <div class="group-visual">

          <div class="group-visual-header">
            <strong>Recommended arrangement</strong>
            <span>4 passengers</span>
          </div>

          <div class="group-seats">

            <div class="group-seat">9A</div>
            <div class="group-seat">9B</div>
            <div class="group-seat">9C</div>
            <div class="group-seat">9D</div>

            <div class="group-seat recommended">10A</div>
            <div class="group-seat friend">10B</div>
            <div class="group-seat friend">10C</div>
            <div class="group-seat recommended">10D</div>

            <div class="group-seat">11A</div>
            <div class="group-seat">11B</div>
            <div class="group-seat">11C</div>
            <div class="group-seat">11D</div>

            <div class="group-seat">12A</div>
            <div class="group-seat">12B</div>
            <div class="group-seat">12C</div>
            <div class="group-seat">12D</div>

          </div>

        </div>

      </div>

    </section>

    <!-- BOOKING PREVIEW -->
    <section class="booking-section">

      <div class="section-heading">

        <div class="eyebrow">YOUR JOURNEY</div>

        <h2>
          Everything in one place.
        </h2>

        <p>
          Once your booking is confirmed, your journey stays organized.
        </p>

      </div>

      <div class="booking-container">

        <div class="booking-card">

          <div class="booking-header">

            <h3>Upcoming Journey</h3>

            <span class="booking-status">
              ✓ CONFIRMED
            </span>

          </div>

          <div class="booking-body">

            <div class="route">

              <div class="location">
                <h4>Bengaluru</h4>
                <p>BLR • 08:30 AM</p>
              </div>

              <div class="route-line">
                <span>✈</span>
                <small>2h 45m</small>
              </div>

              <div class="location right">
                <h4>Goa</h4>
                <p>GOI • 11:15 AM</p>
              </div>

            </div>

            <div class="booking-meta">

              <div class="meta-item">
                <small>DATE</small>
                <strong>18 Oct 2026</strong>
              </div>

              <div class="meta-item">
                <small>SEAT</small>
                <strong>12A • Window</strong>
              </div>

              <div class="meta-item">
                <small>PASSENGERS</small>
                <strong>1 Passenger</strong>
              </div>

              <div class="meta-item">
                <small>BOOKING ID</small>
                <strong>TS-2048</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="cta-section">

      <div class="cta-box">

        <h2>
          Your next adventure starts here.
        </h2>

        <p>
          Search smarter. Choose better. Travel together.
          Welcome to TripSync.
        </p>

        <a href="#search" class="btn btn-light">
          Plan My Journey →
        </a>

      </div>

    </section>

  </main>

  <!-- FOOTER -->
  <footer>

    <div class="footer-container">

      <div class="footer-brand">

        <a href="#" class="logo">
          <div class="logo-icon">✦</div>
          Trip<span>Sync</span>
        </a>

        <p>
          A smarter way to plan, book and experience your journey.
        </p>

      </div>

      <div class="footer-column">
        <h4>TRAVEL</h4>
        <a href="#">Bus</a>
        <a href="#">Train</a>
        <a href="#">Flight</a>
        <a href="#">Explore</a>
      </div>

      <div class="footer-column">
        <h4>TRIPSYNC</h4>
        <a href="#">About</a>
        <a href="#">How It Works</a>
        <a href="#">My Tickets</a>
        <a href="#">Support</a>
      </div>

      <div class="footer-column">
        <h4>ACCOUNT</h4>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
        <a href="#">Bookings</a>
        <a href="#">Profile</a>
      </div>

    </div>

    <div class="footer-bottom">

      <span>
        © 2026 TripSync. Built for better journeys.
      </span>

      <span>
        Java • Spring Boot • MySQL
      </span>

    </div>

  </footer>
`;


// =========================================================
// INTERACTIONS
// =========================================================

const preferenceChips = document.querySelectorAll(".preference-chip");

preferenceChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
  });
});


// Transport tabs

const transportTabs = document.querySelectorAll(".search-tab");

transportTabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    transportTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");
  });
});


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});