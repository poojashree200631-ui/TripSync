import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <!-- =====================================================
       NAVBAR
       ===================================================== -->

  <header class="navbar">

    <a href="#home" class="logo">
      <div class="logo-icon">✦</div>
      Trip<span>Sync</span>
    </a>

    <nav class="nav-links">
      <a href="#home">Home</a>
      <a href="#discover">Discover</a>
      <a href="#experience">Your Experience</a>
      <a href="#how-it-works">How It Works</a>
    </nav>

    <div class="nav-actions">
      <button class="nav-btn" id="loginBtn">
        Log in
      </button>

      <button class="nav-btn primary" id="signupBtn">
        Get Started
      </button>
    </div>

  </header>


  <main>

    <!-- =====================================================
         HERO
         ===================================================== -->

    <section class="hero" id="home">

      <div class="hero-content">

        <div class="hero-badge">
          ✦ TRAVEL, SYNCHRONIZED AROUND YOU
        </div>

        <h1>
          Go somewhere
          <span>worth remembering.</span>
        </h1>

        <p>
          Discover journeys, choose how you want to travel,
          and let TripSync create an experience that feels
          made for you.
        </p>

        <div class="hero-buttons">

          <a href="#plan" class="btn btn-primary">
            I want to travel
            <span>→</span>
          </a>

          <a href="#experience" class="btn btn-light">
            Discover TripSync
          </a>

        </div>

        <div class="hero-trust">

          <div class="trust-item">
            <strong>3</strong>
            <span>ways to travel</span>
          </div>

          <div class="trust-divider"></div>

          <div class="trust-item">
            <strong>∞</strong>
            <span>ways to experience it</span>
          </div>

        </div>

      </div>


      <!-- HERO VISUAL -->

      <div class="hero-visual">

        <div class="hero-image-card">

          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
            alt="Mountain travel destination"
          />

          <div class="image-overlay"></div>

          <div class="destination-label">

            <span>✦ NEXT ADVENTURE</span>

            <h3>Somewhere beautiful.</h3>

            <p>
              The journey matters too.
            </p>

          </div>

        </div>


        <div class="floating-card floating-card-top">

          <div class="floating-icon">✈️</div>

          <div>
            <small>YOUR JOURNEY</small>
            <strong>Ready to begin?</strong>
          </div>

        </div>


        <div class="floating-card floating-card-bottom">

          <span class="mini-avatar">✦</span>

          <div>
            <strong>TripSync Match</strong>
            <small>Experience tailored to you</small>
          </div>

          <b>96%</b>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PLAN YOUR JOURNEY
         ===================================================== -->

    <section class="plan-section" id="plan">

      <div class="plan-card">

        <div class="plan-heading">

          <div>
            <span class="eyebrow">PLAN YOUR JOURNEY</span>

            <h2>
              Where do you want to go?
            </h2>
          </div>

          <p>
            Search buses, trains and flights —
            all in one place.
          </p>

        </div>


        <div class="travel-modes">

          <button class="travel-mode active" data-mode="Bus">
            <span>🚌</span>
            Bus
          </button>

          <button class="travel-mode" data-mode="Train">
            <span>🚆</span>
            Train
          </button>

          <button class="travel-mode" data-mode="Flight">
            <span>✈️</span>
            Flight
          </button>

        </div>


        <div class="journey-form">

          <div class="journey-field">

            <label>FROM</label>

            <div class="input-wrap">
              <span>📍</span>

              <input
                id="fromCity"
                type="text"
                placeholder="Departure city"
              />
            </div>

          </div>


          <button class="swap-journey" id="swapJourney">
            ⇄
          </button>


          <div class="journey-field">

            <label>TO</label>

            <div class="input-wrap">
              <span>📍</span>

              <input
                id="toCity"
                type="text"
                placeholder="Where to?"
              />
            </div>

          </div>


          <div class="journey-field">

            <label>WHEN</label>

            <div class="input-wrap">
              <span>📅</span>

              <input
                id="travelDate"
                type="date"
              />
            </div>

          </div>


          <div class="journey-field">

            <label>TRAVELERS</label>

            <div class="input-wrap">
              <span>👥</span>

              <select id="travelerCount">

                <option value="1">
                  1 Traveler
                </option>

                <option value="2">
                  2 Travelers
                </option>

                <option value="3">
                  3 Travelers
                </option>

                <option value="4">
                  4 Travelers
                </option>

                <option value="5">
                  5 Travelers
                </option>

              </select>

            </div>

          </div>


          <button
            class="journey-search"
            id="journeySearch"
          >
            Search
            <span>→</span>
          </button>

        </div>

      </div>

    </section>


    <!-- =====================================================
         DISCOVER
         ===================================================== -->

    <section class="discover-section" id="discover">

      <div class="section-heading left-heading">

        <div>

          <span class="eyebrow">
            FIND YOUR NEXT PLACE
          </span>

          <h2>
            Go beyond the usual.
          </h2>

        </div>

        <p>
          Inspiration for the journeys waiting
          to become memories.
        </p>

      </div>


      <div class="destination-grid">


        <article class="destination-card destination-large">

          <img
            src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85"
            alt="Tropical destination"
          />

          <div class="destination-gradient"></div>

          <div class="destination-content">

            <span>ISLAND ESCAPE</span>

            <h3>
              Find your little
              piece of paradise.
            </h3>

            <p>
              Slow mornings. Blue water.
              New memories.
            </p>

          </div>

        </article>


        <article class="destination-card">

          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85"
            alt="European city"
          />

          <div class="destination-gradient"></div>

          <div class="destination-content">

            <span>CITY ESCAPE</span>

            <h3>
              Wander somewhere new.
            </h3>

          </div>

        </article>


        <article class="destination-card">

          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85"
            alt="Mountain lake"
          />

          <div class="destination-gradient"></div>

          <div class="destination-content">

            <span>ADVENTURE</span>

            <h3>
              Take the scenic route.
            </h3>

          </div>

        </article>

      </div>

    </section>


    <!-- =====================================================
         CHOOSE YOUR EXPERIENCE
         ===================================================== -->

    <section class="experience-section" id="experience">

      <div class="experience-intro">

        <span class="eyebrow">
          THE TRIPSYNC DIFFERENCE
        </span>

        <h2>
          Don't just choose
          <span>a seat.</span>
        </h2>

        <p>
          Choose how you want the journey to feel.
        </p>

        <p class="experience-description">
          Tell TripSync what matters to you and we'll
          find available options that match your preferences.
        </p>

      </div>


      <div class="experience-panel">

        <div class="experience-panel-header">

          <div>
            <span>YOUR PREFERENCES</span>

            <h3>
              What matters to you?
            </h3>
          </div>

          <span class="preference-count">
            1 selected
          </span>

        </div>


        <div class="preference-grid">

          <button
            class="preference-chip selected"
            data-preference="Window"
          >
            <span>🪟</span>
            <strong>Window</strong>
            <small>Enjoy the view</small>
          </button>


          <button
            class="preference-chip"
            data-preference="Quiet"
          >
            <span>😴</span>
            <strong>Quiet</strong>
            <small>Peaceful journey</small>
          </button>


          <button
            class="preference-chip"
            data-preference="Extra Legroom"
          >
            <span>🦵</span>
            <strong>Extra legroom</strong>
            <small>More space</small>
          </button>


          <button
            class="preference-chip"
            data-preference="Near Exit"
          >
            <span>🚪</span>
            <strong>Near exit</strong>
            <small>Easy access</small>
          </button>


          <button
            class="preference-chip"
            data-preference="Sit Together"
          >
            <span>👥</span>
            <strong>Sit together</strong>
            <small>Keep your group close</small>
          </button>


          <button
            class="preference-chip"
            data-preference="Budget"
          >
            <span>💰</span>
            <strong>Budget-friendly</strong>
            <small>Keep it affordable</small>
          </button>

        </div>


        <button
          class="find-seat-button"
          id="findSeatButton"
        >
          Find my experience
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- =====================================================
         SMART MATCH
         ===================================================== -->

    <section class="smart-section">

      <div class="smart-container">


        <div class="smart-visual">

          <div class="smart-card">

            <div class="smart-card-top">

              <span>
                ✦ TRIPSYNC MATCH
              </span>

              <span class="match-percent">
                96%
              </span>

            </div>


            <div class="smart-seat-area">

              <div class="seat-column">

                <div class="smart-seat">
                  11A
                </div>

                <div class="smart-seat selected">
                  12A
                </div>

                <div class="smart-seat">
                  13A
                </div>

              </div>


              <div class="seat-middle">

                <div class="smart-seat">
                  11B
                </div>

                <div class="smart-seat">
                  12B
                </div>

                <div class="smart-seat">
                  13B
                </div>

              </div>


              <div class="seat-middle">

                <div class="smart-seat">
                  11C
                </div>

                <div class="smart-seat">
                  12C
                </div>

                <div class="smart-seat">
                  13C
                </div>

              </div>


              <div class="seat-column">

                <div class="smart-seat">
                  11D
                </div>

                <div class="smart-seat">
                  12D
                </div>

                <div class="smart-seat">
                  13D
                </div>

              </div>

            </div>


            <div class="smart-result">

              <div>

                <small>BEST MATCH</small>

                <h3>
                  Seat 12A
                </h3>

                <p>
                  Window • Extra legroom
                </p>

              </div>

              <div class="match-icon">
                ✓
              </div>

            </div>

          </div>

        </div>


        <div class="smart-content">

          <span class="eyebrow">
            SMART SEAT MATCHING
          </span>

          <h2>
            A seat chosen
            <span>around you.</span>
          </h2>

          <p>
            TripSync considers your preferences,
            available seats and travel conditions to
            recommend an option that fits your journey.
          </p>


          <div class="smart-steps">

            <div class="smart-step">

              <div>
                01
              </div>

              <section>
                <h4>
                  Tell us what you prefer
                </h4>

                <p>
                  Window, quiet, legroom,
                  group seating and more.
                </p>
              </section>

            </div>


            <div class="smart-step">

              <div>
                02
              </div>

              <section>
                <h4>
                  We match available seats
                </h4>

                <p>
                  Your preferences meet real
                  seat availability.
                </p>
              </section>

            </div>


            <div class="smart-step">

              <div>
                03
              </div>

              <section>
                <h4>
                  You choose the final seat
                </h4>

                <p>
                  TripSync recommends.
                  You decide.
                </p>
              </section>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         GROUP TRAVEL
         ===================================================== -->

    <section class="group-section">

      <div class="group-container">

        <div class="group-content">

          <span class="eyebrow">
            TRAVEL TOGETHER
          </span>

          <h2>
            Your group.
            <span>One smart plan.</span>
          </h2>

          <p>
            Four people don't have to mean four
            separate seat choices.
          </p>

          <p>
            TripSync can consider everyone's preferences
            and find a practical seating arrangement
            while keeping your group together.
          </p>

          <div class="group-list">

            <div>
              <span>✓</span>
              Individual preferences
            </div>

            <div>
              <span>✓</span>
              Group seating optimization
            </div>

            <div>
              <span>✓</span>
              Real seat availability
            </div>

          </div>

        </div>


        <div class="group-visual">

          <div class="group-header">

            <div>
              <small>PASSENGERS</small>
              <strong>4 travelers</strong>
            </div>

            <span>
              ✦ OPTIMIZED
            </span>

          </div>


          <div class="group-map">

            <div class="group-row">

              <span>9A</span>
              <span>9B</span>
              <span>9C</span>
              <span>9D</span>

            </div>


            <div class="group-row recommended">

              <span>10A</span>
              <span>10B</span>
              <span>10C</span>
              <span>10D</span>

            </div>


            <div class="group-row">

              <span>11A</span>
              <span>11B</span>
              <span>11C</span>
              <span>11D</span>

            </div>


            <div class="group-row">

              <span>12A</span>
              <span>12B</span>
              <span>12C</span>
              <span>12D</span>

            </div>

          </div>


          <div class="group-result">

            <span>BEST GROUP ARRANGEMENT</span>

            <strong>
              10A • 10B • 10C • 10D
            </strong>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         HOW IT WORKS
         ===================================================== -->

    <section class="how-section" id="how-it-works">

      <div class="section-heading">

        <span class="eyebrow">
          THE JOURNEY
        </span>

        <h2>
          From “I want to travel”
          to “I'm going.”
        </h2>

      </div>


      <div class="how-grid">

        <div class="how-card">

          <span class="how-number">
            01
          </span>

          <div class="how-icon">
            🗺️
          </div>

          <h3>
            Discover
          </h3>

          <p>
            Find a destination and explore
            the journeys that can take you there.
          </p>

        </div>


        <div class="how-card">

          <span class="how-number">
            02
          </span>

          <div class="how-icon">
            ✨
          </div>

          <h3>
            Personalize
          </h3>

          <p>
            Choose the experience you want
            instead of settling for a random seat.
          </p>

        </div>


        <div class="how-card">

          <span class="how-number">
            03
          </span>

          <div class="how-icon">
            🎟️
          </div>

          <h3>
            Reserve
          </h3>

          <p>
            Confirm your passengers, seat and
            journey in one connected flow.
          </p>

        </div>


        <div class="how-card">

          <span class="how-number">
            04
          </span>

          <div class="how-icon">
            🌍
          </div>

          <h3>
            Go
          </h3>

          <p>
            Your ticket lives in My Tickets.
            Your next adventure begins.
          </p>

        </div>

      </div>

    </section>


    <!-- =====================================================
         FINAL CTA
         ===================================================== -->

    <section class="final-section">

      <div class="final-card">

        <span class="eyebrow">
          YOUR NEXT ADVENTURE
        </span>

        <h2>
          Somewhere out there
          is waiting for you.
        </h2>

        <p>
          Search it. Choose it. Sync it.
        </p>

        <a href="#plan" class="btn btn-primary">
          I want to travel
          <span>→</span>
        </a>

      </div>

    </section>

  </main>


  <!-- =====================================================
       FOOTER
       ===================================================== -->

  <footer>

    <div class="footer-main">

      <div class="footer-brand">

        <a href="#home" class="logo">
          <div class="logo-icon">✦</div>
          Trip<span>Sync</span>
        </a>

        <p>
          Smart travel, built around
          the way you want to experience it.
        </p>

      </div>


      <div class="footer-column">

        <h4>EXPLORE</h4>

        <a href="#discover">
          Destinations
        </a>

        <a href="#plan">
          Bus
        </a>

        <a href="#plan">
          Train
        </a>

        <a href="#plan">
          Flight
        </a>

      </div>


      <div class="footer-column">

        <h4>TRIPSYNC</h4>

        <a href="#experience">
          Your Experience
        </a>

        <a href="#how-it-works">
          How It Works
        </a>

        <a href="#">
          My Tickets
        </a>

        <a href="#">
          Support
        </a>

      </div>


      <div class="footer-column">

        <h4>ACCOUNT</h4>

        <a href="#">
          Log in
        </a>

        <a href="#">
          Create account
        </a>

        <a href="#">
          Profile
        </a>

      </div>

    </div>


    <div class="footer-bottom">

      <span>
        © 2026 TripSync
      </span>

      <span>
        Built with Java • Spring Boot • MySQL
      </span>

    </div>

  </footer>
`;


// =========================================================
// TRAVEL MODE SELECTION
// =========================================================

const travelModes =
  document.querySelectorAll(".travel-mode");

let selectedMode = "Bus";

travelModes.forEach((mode) => {

  mode.addEventListener("click", () => {

    travelModes.forEach((item) => {
      item.classList.remove("active");
    });

    mode.classList.add("active");

    selectedMode = mode.dataset.mode;

  });

});


// =========================================================
// SWAP FROM / TO
// =========================================================

const swapButton =
  document.querySelector("#swapJourney");

if (swapButton) {

  swapButton.addEventListener("click", () => {

    const from =
      document.querySelector("#fromCity");

    const to =
      document.querySelector("#toCity");

    const temporary = from.value;

    from.value = to.value;
    to.value = temporary;

  });

}


// =========================================================
// JOURNEY SEARCH
// =========================================================

const journeySearch =
  document.querySelector("#journeySearch");

if (journeySearch) {

  journeySearch.addEventListener("click", () => {

    const from =
      document.querySelector("#fromCity").value.trim();

    const to =
      document.querySelector("#toCity").value.trim();

    const date =
      document.querySelector("#travelDate").value;

    const travelers =
      document.querySelector("#travelerCount").value;


    if (!from || !to || !date) {

      alert(
        "Please enter your departure, destination and travel date."
      );

      return;

    }


    if (
      from.toLowerCase() ===
      to.toLowerCase()
    ) {

      alert(
        "Departure and destination cannot be the same."
      );

      return;

    }


    const journey = {
      mode: selectedMode,
      from,
      to,
      date,
      travelers
    };


    sessionStorage.setItem(
      "tripSyncJourney",
      JSON.stringify(journey)
    );


    alert(
      `TripSync is ready to search! ✨\n\n` +
      `${selectedMode}: ${from} → ${to}\n` +
      `Date: ${date}\n` +
      `Travelers: ${travelers}`
    );

  });

}


// =========================================================
// EXPERIENCE PREFERENCES
// =========================================================

const preferenceChips =
  document.querySelectorAll(".preference-chip");

const preferenceCount =
  document.querySelector(".preference-count");


function updatePreferenceCount() {

  const selected =
    document.querySelectorAll(
      ".preference-chip.selected"
    );

  if (preferenceCount) {

    preferenceCount.textContent =
      `${selected.length} selected`;

  }

}


preferenceChips.forEach((chip) => {

  chip.addEventListener("click", () => {

    chip.classList.toggle("selected");

    updatePreferenceCount();

  });

});


// =========================================================
// FIND MY EXPERIENCE
// =========================================================

const findSeatButton =
  document.querySelector("#findSeatButton");

if (findSeatButton) {

  findSeatButton.addEventListener("click", () => {

    const selected =
      [...document.querySelectorAll(
        ".preference-chip.selected"
      )].map(
        (chip) =>
          chip.dataset.preference
      );


    if (selected.length === 0) {

      alert(
        "Choose at least one preference first."
      );

      return;

    }


    sessionStorage.setItem(
      "tripSyncPreferences",
      JSON.stringify(selected)
    );


    alert(
      `Perfect! ✨\n\n` +
      `TripSync will look for:\n` +
      selected.map(
        (item) => `• ${item}`
      ).join("\n")
    );

  });

}


// =========================================================
// LOGIN / SIGN UP
// =========================================================

const loginBtn =
  document.querySelector("#loginBtn");

const signupBtn =
  document.querySelector("#signupBtn");


if (loginBtn) {

  loginBtn.addEventListener("click", () => {

    alert(
      "TripSync Login will be connected to the backend next. 🔐"
    );

  });

}


if (signupBtn) {

  signupBtn.addEventListener("click", () => {

    alert(
      "TripSync account creation will be connected next. ✨"
    );

  });

}


// =========================================================
// SMOOTH SCROLLING
// =========================================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


// =========================================================
// CURRENT DATE — PREVENT PAST TRAVEL DATES
// =========================================================

const travelDate =
  document.querySelector("#travelDate");

if (travelDate) {

  const today =
    new Date().toISOString().split("T")[0];

  travelDate.min = today;

}


// =========================================================
// INITIALIZE
// =========================================================

updatePreferenceCount();

console.log(
  "✦ TripSync — Smart travel starts here."
);