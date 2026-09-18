import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <!-- =====================================================
       HERO
       ===================================================== -->

  <main class="home">

    <img
      class="hero-image"
      src="/tripsync-hero.png"
      alt="TripSync — Your Next Adventure Starts Here"
    />

    <div class="hero-fade"></div>

  </main>


  <!-- =====================================================
       JOURNEY SEARCH
       ===================================================== -->

  <section class="journey-section" id="journey">

    <div class="journey-container">

      <div class="journey-intro">

        <span class="section-eyebrow">
          PLAN YOUR JOURNEY
        </span>

        <h1>
          Where will<br />
          you go next?
        </h1>

        <p>
          Find your journey, choose your experience,
          and let TripSync take care of the rest.
        </p>

      </div>


      <div class="search-card">

        <!-- TRANSPORT -->

        <div class="transport-tabs">

          <button
            class="transport-tab active"
            data-type="bus"
            type="button"
          >
            <span class="tab-icon">🚌</span>
            <span>Bus</span>
          </button>

          <button
            class="transport-tab"
            data-type="train"
            type="button"
          >
            <span class="tab-icon">🚆</span>
            <span>Train</span>
          </button>

          <button
            class="transport-tab"
            data-type="flight"
            type="button"
          >
            <span class="tab-icon">✈</span>
            <span>Flight</span>
          </button>

        </div>


        <!-- FROM / TO -->

        <div class="route-row">

          <div class="location-field">

            <span class="field-label">
              FROM
            </span>

            <input
              id="fromLocation"
              type="text"
              placeholder="Departure city"
              autocomplete="off"
            />

          </div>


          <button
            class="swap-button"
            id="swapLocations"
            type="button"
            aria-label="Swap locations"
          >
            ⇄
          </button>


          <div class="location-field">

            <span class="field-label">
              TO
            </span>

            <input
              id="toLocation"
              type="text"
              placeholder="Destination city"
              autocomplete="off"
            />

          </div>

        </div>


        <!-- DATE / PASSENGERS -->

        <div class="details-row">

          <div class="detail-field">

            <span class="field-label">
              DEPARTURE
            </span>

            <input
              id="travelDate"
              type="date"
            />

          </div>


          <div class="detail-field">

            <span class="field-label">
              PASSENGERS
            </span>

            <select id="passengers">

              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5 Passengers</option>
              <option value="6">6 Passengers</option>

            </select>

          </div>

        </div>


        <button
          class="search-button"
          id="searchTrips"
          type="button"
        >

          <span>
            SEARCH TRIPS
          </span>

          <span class="search-arrow">
            →
          </span>

        </button>

      </div>

    </div>

  </section>


  <!-- =====================================================
       RESULTS
       ===================================================== -->

  <section
    class="results-section"
    id="results"
  >

    <div class="results-container">

      <div class="results-heading">

        <span class="section-eyebrow">
          YOUR JOURNEY
        </span>

        <h2>
          Available Trips
        </h2>

        <p id="resultMessage">
          Choose your route above to discover
          available journeys.
        </p>

      </div>


      <div
        class="results-empty"
        id="resultsEmpty"
      >

        <div class="empty-symbol">
          ✦
        </div>

        <h3>
          Your next adventure is waiting.
        </h3>

        <p>
          Enter your journey details above
          and we'll show you what's available.
        </p>

      </div>


      <div
        class="trip-results"
        id="tripResults"
      ></div>

    </div>

  </section>


  <!-- =====================================================
       CHOOSE YOUR EXPERIENCE
       ===================================================== -->

  <section
    class="experience-section"
    id="experience"
  >

    <div class="experience-container">

      <div class="experience-header">

        <span class="section-eyebrow">
          TRIPSYNC SMART SELECTION
        </span>

        <h2>
          Choose Your<br />
          Experience
        </h2>

        <p>
          Tell us what matters to you.
          TripSync will find the seat that matches
          the way you want to travel.
        </p>

      </div>


      <!-- EXPERIENCE OPTIONS -->

      <div class="experience-options">


        <button
          class="experience-option"
          data-preference="window"
          type="button"
        >
          <span class="preference-icon">◫</span>

          <span>
            <strong>Window</strong>
            <small>Enjoy the view</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="quiet"
          type="button"
        >
          <span class="preference-icon">◌</span>

          <span>
            <strong>Quiet</strong>
            <small>Peaceful surroundings</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="legroom"
          type="button"
        >
          <span class="preference-icon">↔</span>

          <span>
            <strong>Extra Legroom</strong>
            <small>More space to relax</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="exit"
          type="button"
        >
          <span class="preference-icon">→</span>

          <span>
            <strong>Near Exit</strong>
            <small>Easy access</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="together"
          type="button"
        >
          <span class="preference-icon">♧</span>

          <span>
            <strong>Sit Together</strong>
            <small>Keep your group close</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="budget"
          type="button"
        >
          <span class="preference-icon">◇</span>

          <span>
            <strong>Budget Friendly</strong>
            <small>Keep the journey affordable</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


        <button
          class="experience-option"
          data-preference="premium"
          type="button"
        >
          <span class="preference-icon">✦</span>

          <span>
            <strong>Premium</strong>
            <small>Travel in comfort</small>
          </span>

          <span class="preference-check">✓</span>
        </button>


      </div>


      <!-- FIND SEAT -->

      <button
        class="find-seat-button"
        id="findSeat"
        type="button"
      >

        <span>
          FIND MY BEST SEAT
        </span>

        <span>
          →
        </span>

      </button>


      <!-- SMART RESULT -->

      <div
        class="smart-match"
        id="smartMatch"
      >

        <span class="match-label">
          ✨ SMART MATCH
        </span>

        <h3>
          Seat 12A
        </h3>

        <p>
          Window • Extra Legroom • Away from busy areas
        </p>

        <div class="match-score">
          <strong>92%</strong>
          preference match
        </div>

      </div>

    </div>

  </section>
`;


/* =========================================================
   TRANSPORT SELECTION
   ========================================================= */

const transportTabs =
  document.querySelectorAll(".transport-tab");

let selectedTransport = "bus";

transportTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    transportTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    selectedTransport =
      tab.dataset.type;

  });

});


/* =========================================================
   SWAP LOCATIONS
   ========================================================= */

document
  .querySelector("#swapLocations")
  .addEventListener("click", () => {

    const from =
      document.querySelector("#fromLocation");

    const to =
      document.querySelector("#toLocation");

    const temporary =
      from.value;

    from.value =
      to.value;

    to.value =
      temporary;

  });


/* =========================================================
   SEARCH TRIPS
   ========================================================= */

document
  .querySelector("#searchTrips")
  .addEventListener("click", () => {

    const from =
      document
        .querySelector("#fromLocation")
        .value
        .trim();

    const to =
      document
        .querySelector("#toLocation")
        .value
        .trim();

    const date =
      document
        .querySelector("#travelDate")
        .value;

    const passengers =
      document
        .querySelector("#passengers")
        .value;

    const results =
      document.querySelector("#tripResults");

    const empty =
      document.querySelector("#resultsEmpty");

    const message =
      document.querySelector("#resultMessage");


    if (!from || !to || !date) {

      message.textContent =
        "Please enter your departure, destination and travel date.";

      empty.classList.add("show-error");

      results.innerHTML = "";

      return;

    }


    empty.classList.remove("show-error");


    const transportName =
      selectedTransport.charAt(0).toUpperCase()
      + selectedTransport.slice(1);


    message.textContent =
      `${from} → ${to} • ${passengers} passenger${passengers === "1" ? "" : "s"} • ${transportName}`;


    results.innerHTML = `

      <div class="demo-result-card">

        <div class="demo-result-top">

          <div>

            <span class="result-type">
              ${selectedTransport.toUpperCase()}
            </span>

            <h3>
              ${from}
              <span>→</span>
              ${to}
            </h3>

          </div>


          <div class="result-price">

            From

            <strong>
              ₹899
            </strong>

          </div>

        </div>


        <div class="result-divider"></div>


        <div class="result-info">

          <div>

            <span>
              DEPARTS
            </span>

            <strong>
              06:30 AM
            </strong>

          </div>


          <div>

            <span>
              DURATION
            </span>

            <strong>
              7h 45m
            </strong>

          </div>


          <div>

            <span>
              ARRIVES
            </span>

            <strong>
              02:15 PM
            </strong>

          </div>


          <button
            class="choose-trip"
            id="chooseExperience"
            type="button"
          >

            <span>
              CHOOSE EXPERIENCE
            </span>

            <span>
              →
            </span>

          </button>

        </div>

      </div>

    `;


    /* =============================================
       CHOOSE EXPERIENCE BUTTON
       ============================================= */

    document
      .querySelector("#chooseExperience")
      .addEventListener("click", () => {

        document
          .querySelector("#experience")
          .scrollIntoView({
            behavior: "smooth"
          });

      });


    document
      .querySelector("#results")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


/* =========================================================
   EXPERIENCE SELECTION
   ========================================================= */

const experienceOptions =
  document.querySelectorAll(".experience-option");

const selectedPreferences = new Set();


experienceOptions.forEach((option) => {

  option.addEventListener("click", () => {

    const preference =
      option.dataset.preference;


    if (
      selectedPreferences.has(preference)
    ) {

      selectedPreferences.delete(preference);

      option.classList.remove("selected");

    } else {

      selectedPreferences.add(preference);

      option.classList.add("selected");

    }

  });

});


/* =========================================================
   SMART SEAT MATCH
   ========================================================= */

document
  .querySelector("#findSeat")
  .addEventListener("click", () => {

    const match =
      document.querySelector("#smartMatch");


    if (selectedPreferences.size === 0) {

      match.classList.remove("visible");

      alert(
        "Choose at least one travel preference first."
      );

      return;

    }


    match.classList.add("visible");


    match.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  });