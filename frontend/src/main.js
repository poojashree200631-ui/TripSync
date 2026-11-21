import "./style.css";

/* =========================================================
   TRIPSYNC
   SMART TRAVEL + SEAT SELECTION
   BUS • TRAIN • FLIGHT
   ========================================================= */

const app = document.querySelector("#app");

/* =========================================================
   TRANSPORT DATA
   ========================================================= */

const transportData = {
  bus: {
    name: "Bus",
    icon: "🚌",
    vehicle: "Premium Coach",
    price: 899,
    duration: "7h 45m",
    departure: "06:30 AM",
    arrival: "02:15 PM"
  },

  train: {
    name: "Train",
    icon: "🚆",
    vehicle: "AC Sleeper Coach A1",
    price: 649,
    duration: "6h 20m",
    departure: "06:30 AM",
    arrival: "12:50 PM"
  },

  flight: {
    name: "Flight",
    icon: "✈",
    vehicle: "Economy Cabin",
    price: 4299,
    duration: "2h 10m",
    departure: "06:30 AM",
    arrival: "08:40 AM"
  }
};


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let selectedTransport = "bus";

const selectedPreferences = new Set();

let currentSeats = [];

let bestSeat = null;

let bestGroupSeats = [];

let selectedSeats = [];

let searchedJourney = {
  from: "",
  to: "",
  date: "",
  passengers: 1
};


/* =========================================================
   MAIN HTML
   ========================================================= */

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

          <span>
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
       EXPERIENCE
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


      <!-- =================================================
           SEAT SELECTION
           ================================================= -->

      <div
        class="seat-selection-section"
        id="seatSelection"
      >

        <div class="seat-selection-header">

          <span class="section-eyebrow">
            SMART SEAT SELECTION
          </span>

          <h2>
            Select Your Seat
          </h2>

          <p id="seatIntro">
            TripSync is analyzing available seats
            against your preferences.
          </p>

        </div>


        <div class="seat-layout-wrapper">


          <!-- =================================================
               VEHICLE
               ================================================= -->

          <div class="seat-layout-card">

            <div class="vehicle-header">

              <div>

                <span id="vehicleType">
                  🚌 BUS
                </span>

                <strong id="vehicleName">
                  Premium Coach
                </strong>

              </div>

              <span
                class="vehicle-route"
                id="vehicleRoute"
              >
                Your journey
              </span>

            </div>


            <div
              class="vehicle-layout"
              id="vehicleLayout"
            ></div>


            <div class="seat-legend">

              <div>
                <span class="legend-seat available"></span>
                Available
              </div>

              <div>
                <span class="legend-seat selected"></span>
                Selected
              </div>

              <div>
                <span class="legend-seat occupied"></span>
                Occupied
              </div>

              <div>
                <span class="legend-seat recommended"></span>
                Best match
              </div>

            </div>

          </div>


          <!-- =================================================
               SUMMARY
               ================================================= -->

          <aside class="seat-summary-card">

            <span class="summary-eyebrow">
              YOUR SELECTION
            </span>

            <h3 id="selectedSeatTitle">
              Choose a seat
            </h3>


            <div
              class="selected-seat-preview"
              id="selectedSeatPreview"
            >
              <span>—</span>
            </div>


            <div
              class="best-match-box"
              id="bestMatchBox"
            >

              <span class="best-match-label">
                ✨ BEST MATCH
              </span>

              <strong id="bestMatchSeat">
                —
              </strong>

              <p id="bestMatchDetails">
                Select your preferences to get
                a recommendation.
              </p>

              <div class="match-percentage">

                <strong id="matchScore">
                  0%
                </strong>

                <span>
                  preference match
                </span>

              </div>

            </div>


            <div class="seat-price-row">

              <span>
                Ticket
              </span>

              <strong id="seatPrice">
                ₹899
              </strong>

            </div>


            <button
              class="confirm-seat-button"
              id="confirmSeat"
              type="button"
            >

              <span>
                CONFIRM SEAT
              </span>

              <span>
                →
              </span>

            </button>

          </aside>

        </div>


        <!-- =================================================
             GROUP MATCH
             ================================================= -->

        <div
          class="group-optimization-card"
          id="groupOptimization"
        >

          <div class="group-optimization-content">

            <span class="group-label">
              👥 TRIPSYNC GROUP OPTIMIZATION
            </span>

            <h3>
              Best seats for your group
            </h3>

            <p id="groupDescription">
              TripSync will find the best available
              arrangement for your passengers.
            </p>

          </div>


          <div
            class="group-seat-list"
            id="groupSeatList"
          ></div>


          <div class="group-match-bottom">

            <div>

              <span>
                GROUP MATCH
              </span>

              <strong id="groupScore">
                0%
              </strong>

            </div>


            <button
              id="selectGroup"
              class="select-group-button"
              type="button"
            >
              SELECT THESE SEATS →
            </button>

          </div>

        </div>
        <!-- PASSENGER DETAILS -->

<div class="passenger-details-section" id="passengerDetails">

  <div class="passenger-details-header">
    <span class="section-eyebrow">TRAVEL INFORMATION</span>
    <h2>Passenger Details</h2>
    <p>Enter the details of everyone travelling.</p>
  </div>

  <div id="passengerForms"></div>

  <button
    class="continue-booking-button"
    id="continueBooking"
    type="button"
  >
    CONTINUE TO BOOKING SUMMARY →
  </button>

</div>

<!-- BOOKING SUMMARY -->

<div class="booking-summary-section" id="bookingSummary">

  <h2>Booking Summary</h2>

  <div id="summaryJourney"></div>

  <div id="summarySeats"></div>

  <div id="summaryPassengers"></div>

  <div id="summaryTotal"></div>

  <button id="finalConfirmBooking">
    CONFIRM BOOKING
  </button>

</div>

        <!-- =================================================
             CONFIRMATION
             ================================================= -->

        <div
          class="booking-confirmation"
          id="bookingConfirmation"
        >

          <div class="confirmation-symbol">
            ✓
          </div>

          <span class="section-eyebrow">
            SEAT SELECTION READY
          </span>

          <h3>
            Your seats are ready.
          </h3>

          <p id="confirmationText">
            Your selected seats have been reserved
            for this demo journey.
          </p>

          <button
            class="back-to-selection"
            id="backToSelection"
            type="button"
          >
            CHANGE SEAT
          </button>

        </div>

      </div>

    </div>

  </section>

`;


/* =========================================================
   DOM REFERENCES
   ========================================================= */

const transportTabs =
  document.querySelectorAll(".transport-tab");

const experienceOptions =
  document.querySelectorAll(".experience-option");


/* =========================================================
   TRANSPORT SWITCHING
   ========================================================= */

transportTabs.forEach((tab) => {

  tab.addEventListener("click", () => {

    transportTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    selectedTransport =
      tab.dataset.type;

    /*
      If seat selection has already been opened,
      rebuild the appropriate vehicle immediately.
    */

    const seatSelection =
      document.querySelector("#seatSelection");

    if (
      seatSelection.classList.contains("visible")
    ) {

      renderSeatSelection();

    }

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
  .addEventListener("click", async () => {

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
      parseInt(
        document
          .querySelector("#passengers")
          .value
      );


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


    searchedJourney = {
      from,
      to,
      date,
      passengers
    };


    empty.classList.remove("show-error");


    const data =
      transportData[selectedTransport];


    message.textContent =
      `${from} → ${to} • ${passengers} passenger${passengers === 1 ? "" : "s"} • ${data.name}`;


    results.innerHTML = `

      <div class="demo-result-card">

        <div class="demo-result-top">

          <div>

            <span class="result-type">
              ${data.icon}
              ${selectedTransport.toUpperCase()}
            </span>

            <h3>
              ${escapeHTML(from)}
              <span>→</span>
              ${escapeHTML(to)}
            </h3>

          </div>


          <div class="result-price">

            From

            <strong>
              ₹${data.price.toLocaleString("en-IN")}
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
              ${data.departure}
            </strong>

          </div>


          <div>

            <span>
              DURATION
            </span>

            <strong>
              ${data.duration}
            </strong>

          </div>


          <div>

            <span>
              ARRIVES
            </span>

            <strong>
              ${data.arrival}
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

experienceOptions.forEach((option) => {

  option.addEventListener("click", () => {

    const preference =
      option.dataset.preference;


    if (
      selectedPreferences.has(preference)
    ) {

      selectedPreferences.delete(
        preference
      );

      option.classList.remove(
        "selected"
      );

    } else {

      selectedPreferences.add(
        preference
      );

      option.classList.add(
        "selected"
      );

    }

  });

});


/* =========================================================
   BUS DATA
   ========================================================= */

function createBusSeats() {

  const seats = [];

  const occupied =
    new Set([
      "2B",
      "4C",
      "7A",
      "9D",
      "11B"
    ]);


  for (
    let row = 1;
    row <= 12;
    row++
  ) {

    ["A", "B", "C", "D"]
      .forEach((letter) => {

        const id =
          `${row}${letter}`;


        seats.push({

          id,

          type: "bus-seat",

          available:
            !occupied.has(id),

          window:
            letter === "A" ||
            letter === "D",

          aisle:
            letter === "B" ||
            letter === "C",

          quiet:
            row >= 8,

          extraLegroom:
            row === 1 ||
            row === 6,

          nearExit:
            row === 10 ||
            row === 11,

          premium:
            row <= 3,

          budget:
            row >= 9

        });

      });

  }


  return seats;

}


/* =========================================================
   TRAIN DATA
   ========================================================= */

function createTrainSeats() {

  const seats = [];

  const occupied =
    new Set([
      "1L",
      "2U",
      "4M",
      "6SL",
      "7SU",
      "9L"
    ]);


  for (
    let bay = 1;
    bay <= 10;
    bay++
  ) {

    seats.push({

      id: `${bay}L`,

      label: "LOWER",

      type: "train-berth",

      available:
        !occupied.has(`${bay}L`),

      window: true,

      quiet: bay >= 7,

      extraLegroom: true,

      nearExit: bay === 1,

      premium: bay <= 2,

      budget: bay >= 7

    });


    seats.push({

      id: `${bay}M`,

      label: "MIDDLE",

      type: "train-berth",

      available:
        !occupied.has(`${bay}M`),

      window: true,

      quiet: bay >= 7,

      extraLegroom: false,

      nearExit: bay === 1,

      premium: bay <= 2,

      budget: bay >= 7

    });


    seats.push({

      id: `${bay}U`,

      label: "UPPER",

      type: "train-berth",

      available:
        !occupied.has(`${bay}U`),

      window: true,

      quiet: bay >= 7,

      extraLegroom: false,

      nearExit: bay === 1,

      premium: bay <= 2,

      budget: bay >= 7

    });


    seats.push({

      id: `${bay}SL`,

      label: "SIDE LOWER",

      type: "train-berth",

      available:
        !occupied.has(`${bay}SL`),

      window: true,

      quiet: bay >= 7,

      extraLegroom: true,

      nearExit: bay === 1,

      premium: false,

      budget: true

    });


    seats.push({

      id: `${bay}SU`,

      label: "SIDE UPPER",

      type: "train-berth",

      available:
        !occupied.has(`${bay}SU`),

      window: true,

      quiet: bay >= 7,

      extraLegroom: false,

      nearExit: bay === 1,

      premium: false,

      budget: true

    });

  }


  return seats;

}


/* =========================================================
   FLIGHT DATA
   ========================================================= */

function createFlightSeats() {

  const seats = [];

  const occupied =
    new Set([
      "1C",
      "2A",
      "3F",
      "5B",
      "6D",
      "8A",
      "9E",
      "11C"
    ]);


  for (
    let row = 1;
    row <= 12;
    row++
  ) {

    ["A", "B", "C", "D", "E", "F"]
      .forEach((letter) => {

        const id =
          `${row}${letter}`;


        seats.push({

          id,

          type: "flight-seat",

          available:
            !occupied.has(id),

          window:
            letter === "A" ||
            letter === "F",

          aisle:
            letter === "C" ||
            letter === "D",

          quiet:
            row >= 8,

          extraLegroom:
            row === 1 ||
            row === 7,

          nearExit:
            row === 7,

          premium:
            row <= 3,

          budget:
            row >= 9

        });

      });

  }


  return seats;

}


/* =========================================================
   GET SEATS
   ========================================================= */

function getSeats() {

  if (
    selectedTransport === "bus"
  ) {

    return createBusSeats();

  }


  if (
    selectedTransport === "train"
  ) {

    return createTrainSeats();

  }


  return createFlightSeats();

}


/* =========================================================
   PREFERENCE SCORE
   ========================================================= */

function calculateSeatScore(seat) {

  const preferences =
    Array.from(
      selectedPreferences
    );


  if (
    preferences.length === 0
  ) {

    return 0;

  }


  let matched = 0;

  let totalWeight = 0;


  preferences.forEach(
    (preference) => {

      let weight = 1;

      let matches = false;


      if (
        preference === "window"
      ) {

        matches =
          Boolean(seat.window);

      }


      if (
        preference === "quiet"
      ) {

        matches =
          Boolean(seat.quiet);

      }


      if (
        preference === "legroom"
      ) {

        matches =
          Boolean(seat.extraLegroom);

      }


      if (
        preference === "exit"
      ) {

        matches =
          Boolean(seat.nearExit);

      }


      if (
        preference === "premium"
      ) {

        matches =
          Boolean(seat.premium);

      }


      if (
        preference === "budget"
      ) {

        matches =
          Boolean(seat.budget);

      }


      /*
        Group preference receives
        special handling by the
        group optimizer.
      */

      if (
        preference === "together"
      ) {

        return;

      }


      totalWeight += weight;


      if (matches) {
        matched += weight;
      }

    }
  );


  if (
    totalWeight === 0
  ) {

    return 0;

  }


  return Math.round(
    (
      matched /
      totalWeight
    ) * 100
  );

}


/* =========================================================
   BEST INDIVIDUAL SEAT
   ========================================================= */

function findBestSeat(
  seats
) {

  const available =
    seats.filter(
      (seat) =>
        seat.available
    );


  if (
    available.length === 0
  ) {

    return null;

  }


  available.sort(
    (a, b) => {

      const scoreA =
        calculateSeatScore(a);

      const scoreB =
        calculateSeatScore(b);


      if (
        scoreB !== scoreA
      ) {

        return scoreB - scoreA;

      }


      if (
        Boolean(b.extraLegroom) !==
        Boolean(a.extraLegroom)
      ) {

        return b.extraLegroom
          ? 1
          : -1;

      }


      if (
        Boolean(b.premium) !==
        Boolean(a.premium)
      ) {

        return b.premium
          ? 1
          : -1;

      }


      return getNumericPart(a.id) -
        getNumericPart(b.id);

    }
  );


  return available[0];

}


/* =========================================================
   BUS GROUP OPTIMIZATION
   ========================================================= */

function findBusGroup(
  seats,
  passengerCount
) {

  const available =
    seats.filter(
      (seat) =>
        seat.available
    );


  if (
    available.length <
    passengerCount
  ) {

    return [];

  }


  const rows = {};


  available.forEach(
    (seat) => {

      const row =
        getNumericPart(seat.id);


      if (!rows[row]) {
        rows[row] = [];
      }


      rows[row].push(seat);

    }
  );


  const candidates = [];


  Object.keys(rows).forEach(
    (rowNumber) => {

      const rowSeats =
        rows[rowNumber];


      rowSeats.sort(
        (a, b) =>
          getLetterPart(a.id)
            .localeCompare(
              getLetterPart(b.id)
            )
      );


      /*
        Check every possible
        group inside this row.
      */

      for (
        let start = 0;
        start <=
        rowSeats.length -
        passengerCount;
        start++
      ) {

        const group =
          rowSeats.slice(
            start,
            start +
            passengerCount
          );


        if (
          group.length ===
          passengerCount
        ) {

          const score =
            calculateGroupScore(
              group
            );


          candidates.push({

            seats: group,

            score,

            together: true

          });

        }

      }

    }
  );


  /*
    If we cannot fit everyone
    in one row, search nearby rows.
  */

  if (
    candidates.length === 0
  ) {

    return findNearestBusGroup(
      available,
      passengerCount
    );

  }


  candidates.sort(
    (a, b) =>
      b.score - a.score
  );


  return candidates[0].seats;

}


/* =========================================================
   NEAREST GROUP FALLBACK
   ========================================================= */

function findNearestBusGroup(
  seats,
  passengerCount
) {

  const sorted =
    [...seats].sort(
      (a, b) =>
        calculateSeatScore(b) -
        calculateSeatScore(a)
    );


  /*
    Prefer nearby rows.
  */

  const firstSeat =
    sorted[0];


  if (!firstSeat) {
    return [];
  }


  const baseRow =
    getNumericPart(
      firstSeat.id
    );


  const nearby =
    sorted.filter(
      (seat) =>
        Math.abs(
          getNumericPart(seat.id) -
          baseRow
        ) <= 1
    );


  return (
    nearby.length >= passengerCount
      ? nearby.slice(
          0,
          passengerCount
        )
      : sorted.slice(
          0,
          passengerCount
        )
  );

}


/* =========================================================
   TRAIN GROUP OPTIMIZATION
   ========================================================= */

function findTrainGroup(
  seats,
  passengerCount
) {

  const available =
    seats.filter(
      (seat) =>
        seat.available
    );


  if (
    available.length <
    passengerCount
  ) {

    return [];

  }


  /*
    Prefer berths from the
    same bay for group travel.
  */

  const bays = {};


  available.forEach(
    (seat) => {

      const bay =
        getNumericPart(
          seat.id
        );


      if (!bays[bay]) {
        bays[bay] = [];
      }


      bays[bay].push(seat);

    }
  );


  const candidates = [];


  Object.values(bays).forEach(
    (baySeats) => {

      if (
        baySeats.length >=
        passengerCount
      ) {

        const group =
          baySeats.slice(
            0,
            passengerCount
          );


        candidates.push({

          seats: group,

          score:
            calculateGroupScore(
              group
            ),

          together: true

        });

      }

    }
  );


  if (
    candidates.length
  ) {

    candidates.sort(
      (a, b) =>
        b.score - a.score
    );


    return candidates[0].seats;

  }


  /*
    Fallback:
    choose highest scoring
    available berths.
  */

  return [...available]
    .sort(
      (a, b) =>
        calculateSeatScore(b) -
        calculateSeatScore(a)
    )
    .slice(
      0,
      passengerCount
    );

}


/* =========================================================
   FLIGHT GROUP OPTIMIZATION
   ========================================================= */

function findFlightGroup(
  seats,
  passengerCount
) {

  const available =
    seats.filter(
      (seat) =>
        seat.available
    );


  if (
    available.length <
    passengerCount
  ) {

    return [];

  }


  const rows = {};


  available.forEach(
    (seat) => {

      const row =
        getNumericPart(
          seat.id
        );


      if (!rows[row]) {
        rows[row] = [];
      }


      rows[row].push(seat);

    }
  );


  const candidates = [];


  Object.values(rows).forEach(
    (rowSeats) => {

      rowSeats.sort(
        (a, b) =>
          getLetterPart(a.id)
            .localeCompare(
              getLetterPart(b.id)
            )
      );


      if (
        rowSeats.length >=
        passengerCount
      ) {

        /*
          Prefer contiguous
          aircraft seating.
        */

        for (
          let start = 0;
          start <=
          rowSeats.length -
          passengerCount;
          start++
        ) {

          const group =
            rowSeats.slice(
              start,
              start +
              passengerCount
            );


          candidates.push({

            seats: group,

            score:
              calculateGroupScore(
                group
              ),

            together: true

          });

        }

      }

    }
  );


  if (
    candidates.length
  ) {

    candidates.sort(
      (a, b) =>
        b.score - a.score
    );


    return candidates[0].seats;

  }


  return [...available]
    .sort(
      (a, b) =>
        calculateSeatScore(b) -
        calculateSeatScore(a)
    )
    .slice(
      0,
      passengerCount
    );

}


/* =========================================================
   GROUP SCORE
   ========================================================= */

function calculateGroupScore(
  group
) {

  if (
    group.length === 0
  ) {

    return 0;

  }


  const seatScore =
    group.reduce(
      (
        total,
        seat
      ) =>
        total +
        calculateSeatScore(
          seat
        ),
      0
    ) /
    group.length;


  /*
    Group gets a bonus because
    all seats are together.
  */

  const togetherBonus =
    selectedPreferences.has(
      "together"
    )
      ? 10
      : 0;


  return Math.min(
    100,
    Math.round(
      seatScore +
      togetherBonus
    )
  );

}


/* =========================================================
   RENDER SEAT SELECTION
   ========================================================= */

async function renderSeatSelection() {

  currentSeats =
    getSeats();

// Check seats already booked in the database

try {
  const response = await fetch(
    "http://localhost:8080/api/bookings"
  );

  if (!response.ok) {
    throw new Error("Could not load bookings.");
  }

  const bookings = await response.json();

  const bookedSeats = bookings.filter(
    (booking) =>
      booking.fromLocation?.toLowerCase() ===
        searchedJourney.from?.toLowerCase() &&
      booking.toLocation?.toLowerCase() ===
        searchedJourney.to?.toLowerCase() &&
      booking.transport?.toLowerCase() ===
        selectedTransport.toLowerCase() &&
      booking.travelDate === searchedJourney.date &&
      booking.status === "Confirmed"
  );

  currentSeats.forEach((seat) => {
    if (
      bookedSeats.some(
        (booking) => booking.seatNumber === seat.id
      )
    ) {
      seat.available = false;
    }
  });

} catch (error) {
  alert("Could not check booked seats. Please try again.");
  console.error(error);
  return;
}
  selectedSeats = [];

  bestGroupSeats = [];


  /*
    Find best individual seat.
  */

  bestSeat =
    findBestSeat(
      currentSeats
    );


  /*
    Find group arrangement if
    multiple passengers.
  */

  const passengerCount =
    searchedJourney.passengers ||
    parseInt(
      document.querySelector(
        "#passengers"
      ).value
    );


  if (
    passengerCount > 1
  ) {

    if (
      selectedTransport === "bus"
    ) {

      bestGroupSeats =
        findBusGroup(
          currentSeats,
          passengerCount
        );

    }


    if (
      selectedTransport === "train"
    ) {

      bestGroupSeats =
        findTrainGroup(
          currentSeats,
          passengerCount
        );

    }


    if (
      selectedTransport === "flight"
    ) {

      bestGroupSeats =
        findFlightGroup(
          currentSeats,
          passengerCount
        );

    }

  }


  /*
    Update vehicle information.
  */

const data = transportData[selectedTransport];


  document.querySelector(
    "#vehicleType"
  ).textContent =
    `${data.icon} ${data.name.toUpperCase()}`;


  document.querySelector(
    "#vehicleName"
  ).textContent =
    data.vehicle;


  const routeText =
    searchedJourney.from &&
    searchedJourney.to
      ? `${searchedJourney.from} → ${searchedJourney.to}`
      : "Your journey";


  document.querySelector(
    "#vehicleRoute"
  ).textContent =
    routeText;


  document.querySelector(
    "#seatPrice"
  ).textContent =
    `₹${data.price.toLocaleString(
      "en-IN"
    )}`;


  /*
    Render correct vehicle.
  */

  const layout =
    document.querySelector(
      "#vehicleLayout"
    );


  layout.className =
    "vehicle-layout";


  if (
    selectedTransport === "bus"
  ) {

    layout.classList.add(
      "bus-layout"
    );

    renderBusLayout(
      currentSeats
    );

  }


  if (
    selectedTransport === "train"
  ) {

    layout.classList.add(
      "train-layout"
    );

    renderTrainLayout(
      currentSeats
    );

  }


  if (
    selectedTransport === "flight"
  ) {

    layout.classList.add(
      "flight-layout"
    );

    renderFlightLayout(
      currentSeats
    );

  }


  updateBestMatch();

  updateGroupMatch();

  attachSeatListeners();

}

// =================================================
// PASSENGER DETAILS
// =================================================

function renderPassengerForms() {
  const passengerForms = document.getElementById("passengerForms");

  if (!passengerForms) return;

  const passengerCount =
    Number(document.getElementById("passengers")?.value || 1);

  passengerForms.innerHTML = "";

  for (let i = 1; i <= passengerCount; i++) {
    passengerForms.innerHTML += `
      <div class="passenger-card">
        <h3>Passenger ${i}</h3>

        <label>Full Name</label>
        <input
          type="text"
          name="passengerName${i}"
          placeholder="Enter full name"
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="passengerAge${i}"
          placeholder="Enter age"
          min="1"
          max="120"
          required
        />

        <label>Gender</label>
        <select name="passengerGender${i}" required>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    `;
  }
}


/* =========================================================
   BUS LAYOUT
   ========================================================= */

function renderBusLayout(
  seats
) {

  const layout =
    document.querySelector(
      "#vehicleLayout"
    );


  let rowsHTML = "";


  for (
    let row = 1;
    row <= 12;
    row++
  ) {

    const rowSeats =
      seats.filter(
        (seat) =>
          getNumericPart(
            seat.id
          ) === row
      );


    rowsHTML += `

      <div class="bus-row">

        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}A`
          )
        )}

        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}B`
          )
        )}

        <div class="aisle-space">
          ${row}
        </div>

        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}C`
          )
        )}

        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}D`
          )
        )}

      </div>

    `;

  }


  layout.innerHTML = `

    <div class="bus-front">

      <span>
        FRONT
      </span>

      <div class="driver-area">
        DRIVER
      </div>

    </div>


    <div class="bus-seat-map">

      ${rowsHTML}

    </div>

  `;

}


/* =========================================================
   TRAIN LAYOUT
   ========================================================= */

function renderTrainLayout(
  seats
) {

  const layout =
    document.querySelector(
      "#vehicleLayout"
    );


  let baysHTML = "";


  for (
    let bay = 1;
    bay <= 10;
    bay++
  ) {

    const lower =
      seats.find(
        (seat) =>
          seat.id ===
          `${bay}L`
      );


    const middle =
      seats.find(
        (seat) =>
          seat.id ===
          `${bay}M`
      );


    const upper =
      seats.find(
        (seat) =>
          seat.id ===
          `${bay}U`
      );


    const sideLower =
      seats.find(
        (seat) =>
          seat.id ===
          `${bay}SL`
      );


    const sideUpper =
      seats.find(
        (seat) =>
          seat.id ===
          `${bay}SU`
      );


    baysHTML += `

      <div class="train-bay">

        <div class="bay-number">
          BAY ${bay}
        </div>


        <div class="berth-stack">

          ${renderBerth(
            lower
          )}

          ${renderBerth(
            middle
          )}

          ${renderBerth(
            upper
          )}

        </div>


        <div class="side-berths">

          ${renderBerth(
            sideLower
          )}

          ${renderBerth(
            sideUpper
          )}

        </div>

      </div>

    `;

  }


  layout.innerHTML = `

    <div class="train-front">

      <span>
        TRAIN COACH • A1
      </span>

      <strong>
        COACH ENTRANCE
      </strong>

    </div>


    <div class="train-map">

      ${baysHTML}

    </div>

  `;

}


/* =========================================================
   FLIGHT LAYOUT
   ========================================================= */

function renderFlightLayout(
  seats
) {

  const layout =
    document.querySelector(
      "#vehicleLayout"
    );


  let rowsHTML = "";


  for (
    let row = 1;
    row <= 12;
    row++
  ) {

    const rowSeats =
      seats.filter(
        (seat) =>
          getNumericPart(
            seat.id
          ) === row
      );


    rowsHTML += `

      <div
        class="
          flight-row
          ${
            row === 7
              ? "exit-row"
              : ""
          }
        "
      >

        <span class="row-number">
          ${row}
        </span>


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}A`
          ),
          "air-seat"
        )}


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}B`
          ),
          "air-seat"
        )}


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}C`
          ),
          "air-seat"
        )}


        <div class="air-aisle"></div>


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}D`
          ),
          "air-seat"
        )}


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}E`
          ),
          "air-seat"
        )}


        ${renderSeat(
          rowSeats.find(
            (seat) =>
              seat.id ===
              `${row}F`
          ),
          "air-seat"
        )}

      </div>

    `;

  }


  layout.innerHTML = `

    <div class="flight-front">

      <span>
        FRONT OF AIRCRAFT
      </span>

      <div class="aircraft-cockpit">
        COCKPIT
      </div>

    </div>


    <div class="flight-cabin">

      <div class="cabin-label">
        PREMIUM + ECONOMY CABIN
      </div>

      ${rowsHTML}

    </div>

  `;

}


/* =========================================================
   GENERIC SEAT RENDER
   ========================================================= */

function renderSeat(
  seat,
  extraClass = ""
) {

  if (!seat) {
    return "";
  }


  const isBest =
    bestSeat &&
    bestSeat.id === seat.id;


  const isGroupBest =
    bestGroupSeats.some(
      (item) =>
        item.id === seat.id
    );


  const isSelected =
    selectedSeats.some(
      (item) =>
        item.id === seat.id
    );


  let stateClass =
    "available";


  if (
    !seat.available
  ) {

    stateClass =
      "occupied";

  } else if (
    isSelected
  ) {

    stateClass =
      "selected";

  } else if (
    isGroupBest ||
    isBest
  ) {

    stateClass =
      "recommended";

  }


  return `

    <button

      class="
        travel-seat
        ${stateClass}
        ${extraClass}
        ${
          seat.window
            ? "has-window"
            : ""
        }
        ${
          seat.extraLegroom
            ? "has-legroom"
            : ""
        }
        ${
          seat.premium
            ? "has-premium"
            : ""
        }
      "

      data-seat-id="${seat.id}"

      type="button"

      ${
        !seat.available
          ? "disabled"
          : ""
      }

      title="${
        seat.available
          ? `${seat.id} • ${calculateSeatScore(seat)}% preference match`
          : `${seat.id} • Occupied`
      }"

    >

      <span>
        ${seat.id}
      </span>

      ${
        isBest ||
        isGroupBest
          ? `<small>✦</small>`
          : ""
      }

    </button>

  `;

}


/* =========================================================
   TRAIN BERTH RENDER
   ========================================================= */

function renderBerth(
  seat
) {

  if (!seat) {
    return "";
  }


  const isBest =
    bestSeat &&
    bestSeat.id === seat.id;


  const isGroupBest =
    bestGroupSeats.some(
      (item) =>
        item.id === seat.id
    );


  const isSelected =
    selectedSeats.some(
      (item) =>
        item.id === seat.id
    );


  let stateClass =
    "available";


  if (
    !seat.available
  ) {

    stateClass =
      "occupied";

  } else if (
    isSelected
  ) {

    stateClass =
      "selected";

  } else if (
    isBest ||
    isGroupBest
  ) {

    stateClass =
      "recommended";

  }


  return `

    <button

      class="
        train-berth
        ${stateClass}
      "

      data-seat-id="${seat.id}"

      type="button"

      ${
        !seat.available
          ? "disabled"
          : ""
      }

    >

      <strong>
        ${seat.id}
      </strong>

      <small>
        ${seat.label}
      </small>

      ${
        isBest ||
        isGroupBest
          ? `<em>BEST</em>`
          : ""
      }

    </button>

  `;

}


/* =========================================================
   BEST MATCH UPDATE
   ========================================================= */

function updateBestMatch() {

  const seatElement =
    document.querySelector(
      "#bestMatchSeat"
    );


  const scoreElement =
    document.querySelector(
      "#matchScore"
    );


  const detailsElement =
    document.querySelector(
      "#bestMatchDetails"
    );


  if (!bestSeat) {

    seatElement.textContent =
      "No seats";

    scoreElement.textContent =
      "0%";

    detailsElement.textContent =
      "No available seats found.";

    return;

  }


  const score =
    calculateSeatScore(
      bestSeat
    );


  seatElement.textContent =
    bestSeat.id;


  scoreElement.textContent =
    `${score}%`;


  const features = [];


  if (bestSeat.window) {
    features.push("Window");
  }


  if (bestSeat.quiet) {
    features.push("Quiet");
  }


  if (bestSeat.extraLegroom) {
    features.push(
      "Extra Legroom"
    );
  }


  if (bestSeat.nearExit) {
    features.push(
      "Near Exit"
    );
  }


  if (bestSeat.premium) {
    features.push(
      "Premium"
    );
  }


  detailsElement.textContent =
    features.length
      ? features.join(" • ")
      : "Available seat with a good overall match.";

}


/* =========================================================
   GROUP MATCH UPDATE
   ========================================================= */

function updateGroupMatch() {

  const groupCard =
    document.querySelector(
      "#groupOptimization"
    );


  const passengerCount =
    searchedJourney.passengers ||
    parseInt(
      document.querySelector(
        "#passengers"
      ).value
    );


  /*
    Hide group optimizer for
    single passengers.
  */

  if (
    passengerCount <= 1 ||
    bestGroupSeats.length <= 1
  ) {

    groupCard.classList.remove(
      "visible"
    );

    return;

  }


  groupCard.classList.add(
    "visible"
  );


  const groupList =
    document.querySelector(
      "#groupSeatList"
    );


  groupList.innerHTML =
    bestGroupSeats
      .map(
        (seat, index) => `

          <div class="group-seat-pill">

            <span>
              Passenger ${index + 1}
            </span>

            <strong>
              ${seat.id}
            </strong>

          </div>

        `
      )
      .join("");


  const score =
    calculateGroupScore(
      bestGroupSeats
    );


  document.querySelector(
    "#groupScore"
  ).textContent =
    `${score}%`;


  document.querySelector(
    "#groupDescription"
  ).textContent =
    selectedPreferences.has(
      "together"
    )
      ? `${passengerCount} passengers • seats together • optimized for your preferences`
      : `${passengerCount} passengers • best available group arrangement based on your preferences`;

}


/* =========================================================
   SEAT CLICK LISTENERS
   ========================================================= */

function attachSeatListeners() {

  const buttons =
    document.querySelectorAll(
      "[data-seat-id]"
    );


  buttons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const seatId =
            button.dataset.seatId;


          const seat =
            currentSeats.find(
              (item) =>
                item.id === seatId
            );


          if (
            !seat ||
            !seat.available
          ) {

            return;

          }


          /*
            Number of passengers
            determines whether we
            allow multiple seats.
          */

          const passengerCount =
            searchedJourney.passengers ||
            parseInt(
              document.querySelector(
                "#passengers"
              ).value
            );


          if (
            selectedSeats.some(
              (item) =>
                item.id === seat.id
            )
          ) {

            selectedSeats =
              selectedSeats.filter(
                (item) =>
                  item.id !== seat.id
              );

          } else {

            if (
              selectedSeats.length >=
              passengerCount
            ) {

              alert(
                `You selected ${passengerCount} passenger${passengerCount === 1 ? "" : "s"}. Remove a seat before choosing another.`
              );

              return;

            }


            selectedSeats.push(
              seat
            );

          }


          updateSelectedDisplay();

          rerenderSeatMapOnly();

        }
      );

    }
  );

}


/* =========================================================
   RERENDER SEAT MAP
   ========================================================= */

function rerenderSeatMapOnly() {

  if (
    selectedTransport === "bus"
  ) {

    renderBusLayout(
      currentSeats
    );

  }


  if (
    selectedTransport === "train"
  ) {

    renderTrainLayout(
      currentSeats
    );

  }


  if (
    selectedTransport === "flight"
  ) {

    renderFlightLayout(
      currentSeats
    );

  }


  attachSeatListeners();

}


/* =========================================================
   SELECTED DISPLAY
   ========================================================= */

function updateSelectedDisplay() {

  const title =
    document.querySelector(
      "#selectedSeatTitle"
    );


  const preview =
    document.querySelector(
      "#selectedSeatPreview"
    );


  if (
    selectedSeats.length === 0
  ) {

    title.textContent =
      "Choose a seat";

    preview.innerHTML =
      "<span>—</span>";

    return;

  }


  if (
    selectedSeats.length === 1
  ) {

    title.textContent =
      `Seat ${selectedSeats[0].id}`;

  } else {

    title.textContent =
      `${selectedSeats.length} seats selected`;

  }


  preview.innerHTML = `

    <span class="group-seat-preview">

      ${selectedSeats
        .map(
          (seat) =>
            seat.id
        )
        .join(" • ")}

    </span>

  `;

}


/* =========================================================
   SELECT GROUP
   ========================================================= */

document
  .querySelector("#selectGroup")
  .addEventListener(
    "click",
    () => {

      if (
        bestGroupSeats.length === 0
      ) {

        return;

      }


      selectedSeats =
        [...bestGroupSeats];


      updateSelectedDisplay();

      rerenderSeatMapOnly();


      document
        .querySelector(
          "#seatSelection"
        )
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    }
  );


/* =========================================================
   FIND MY BEST SEAT
   ========================================================= */

document
  .querySelector("#findSeat")
  .addEventListener(
    "click",
    () => {

      if (
        selectedPreferences.size === 0
      ) {

        alert(
          "Choose at least one travel preference first."
        );

        return;

      }


      searchedJourney.passengers =
        parseInt(
          document.querySelector(
            "#passengers"
          ).value
        );


      renderSeatSelection();


      document
        .querySelector(
          "#seatSelection"
        )
        .classList.add(
          "visible"
        );


      setTimeout(
        () => {

          document
            .querySelector(
              "#seatSelection"
            )
            .scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

        },
        100
      );

    }
  );


/* =========================================================
   CONFIRM SEAT
   ========================================================= */

document
  .querySelector("#confirmSeat")
  .addEventListener(
    "click",
    () => {

      if (
        selectedSeats.length !==
        (searchedJourney.passengers || 1)
      ) {

        alert(
          `Please select exactly ${
            searchedJourney.passengers || 1
          } seat(s).`
        );

        return;
      }

      renderPassengerForms();

      document
        .querySelector("#passengerDetails")
        .classList.add("visible");

      document
        .querySelector("#passengerDetails")
        .scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

    }
  );


/* =========================================================
   CHANGE SEAT
   ========================================================= */

document
  .querySelector("#backToSelection")
  .addEventListener(
    "click",
    () => {

      selectedSeats = [];

      updateSelectedDisplay();

      rerenderSeatMapOnly();

      document
        .querySelector("#bookingConfirmation")
        .classList.remove("visible");

      document
        .querySelector("#seatSelection")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

function getNumericPart(
  id
) {

  const match =
    String(id).match(
      /^\d+/
    );


  return match
    ? parseInt(match[0])
    : 0;

}


function getLetterPart(
  id
) {

  const match =
    String(id).match(
      /[A-Z]+$/
    );


  return match
    ? match[0]
    : "";

}


function escapeHTML(
  value
) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}

// CONTINUE TO BOOKING SUMMARY

document
  .querySelector("#continueBooking")
  .addEventListener("click", () => {

    const passengerCards =
      document.querySelectorAll(".passenger-card");

    const passengerDetails = [];

    for (const card of passengerCards) {

      const name =
        card.querySelector('input[type="text"]').value.trim();

      const age =
        card.querySelector('input[type="number"]').value;

      const gender =
        card.querySelector("select").value;

      if (!name || !age || !gender) {
        alert("Please fill all passenger details.");
        return;
      }

      passengerDetails.push({
        name,
        age,
        gender
      });
    }

    document
  .querySelector("#bookingSummary")
  .classList.add("visible");

document
  .querySelector("#summaryJourney")
  .textContent =
  `${searchedJourney.from} → ${searchedJourney.to}`;

document
  .querySelector("#summarySeats")
  .textContent =
  `Selected Seats: ${selectedSeats.map(seat => seat.id).join(", ")}`;

document
  .querySelector("#summaryPassengers")
  .textContent =
  `Passengers: ${passengerDetails.map(p => p.name).join(", ")}`;

document
  .querySelector("#summaryTotal")
  .textContent =
  `Total: ₹${transportData[selectedTransport].price * selectedSeats.length}`;

document
  .querySelector("#bookingSummary")
  .scrollIntoView({
    behavior: "smooth"
  });
  });

/* =================================================
   FINAL BOOKING CONFIRMATION
   ================================================= */

document
  .querySelector("#finalConfirmBooking")
  .addEventListener("click", async () => {

    const passengerCards =
      document.querySelectorAll(".passenger-card");

    const savedBookings = [];

    try {
      for (let i = 0; i < passengerCards.length; i++) {

        const card = passengerCards[i];

        const passengerName =
          card.querySelector('input[type="text"]').value.trim();

        const passengerAge =
          Number(card.querySelector('input[type="number"]').value);

        const passengerGender =
          card.querySelector("select").value;

        if (!passengerName || !passengerAge || !passengerGender) {
          throw new Error("Please fill all passenger details.");
        }

        const response = await fetch("http://localhost:8080/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            passengerName,
            passengerAge,
            passengerGender,
            fromLocation: searchedJourney.from,
            toLocation: searchedJourney.to,
            transport: selectedTransport,
            seatNumber: selectedSeats[i].id,
            travelDate: searchedJourney.date,
            totalAmount: transportData[selectedTransport].price
          })
        });

        if (!response.ok) {
  const errorMessage = await response.text();

  throw new Error(
    errorMessage || "Booking could not be saved."
  );
}

        const responseData = await response.json();
        savedBookings.push(responseData);
      }

      const bookingIds = savedBookings
        .map(booking => booking.id)
        .join(", ");

      alert(`Booking confirmed successfully! Booking ID(s): ${bookingIds} 🎉`);
      const loadBookingsButton =
  document.querySelector("#loadBookings");

if (loadBookingsButton) {
  loadBookingsButton.click();
}

      document.querySelector("#bookingSummary").classList.remove("visible");
      document.querySelector("#passengerDetails").classList.remove("visible");
      document.querySelector("#bookingConfirmation").classList.add("visible");

      const travelQuotes = [
  "The world is waiting for you. Enjoy your journey! 🌍",
  "Collect memories, not things. Happy travelling! ✈️",
  "Every journey begins with a single step. Have a safe trip! ❤️",
  "Adventure is out there. Enjoy every moment! 🌟",
  "Travel far, explore more, and create beautiful memories! 🧳"
];

const randomQuote =
  travelQuotes[Math.floor(Math.random() * travelQuotes.length)];

document.querySelector("#confirmationText").textContent =
  `Your booking has been confirmed successfully! Booking ID(s): ${bookingIds}\n\n${randomQuote}`;

      document.querySelector("#bookingConfirmation").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    } catch (error) {
      alert(error.message || "Error saving booking. Please try again.");
      console.error(error);
    }
  });
/* =========================================================
   INITIAL STATE
   ========================================================= */

document.querySelector(
  "#seatSelection"
).classList.remove(
  "visible"
);

document.querySelector(
  "#groupOptimization"
).classList.remove(
  "visible"
);

/* =========================================================
   MY BOOKINGS
   ========================================================= */

const myBookingsSection = document.createElement("section");

myBookingsSection.id = "myBookings";
myBookingsSection.innerHTML = `
  <div class="my-bookings-container">
    <h2>My Bookings</h2>
    <p>Your saved travel bookings</p>

    <button id="loadBookings" type="button">
      View My Bookings
    </button>

    <div class="bookings-table-wrapper">
      <table class="bookings-table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Passenger</th>
            <th>Transport</th>
            <th>Route</th>
            <th>Seat</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="bookingsTableBody">
          <tr>
            <td colspan="8">Click View My Bookings</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
`;

document.querySelector("#app").appendChild(myBookingsSection);

document.querySelector("#loadBookings").addEventListener("click", async () => {
  const tableBody = document.querySelector("#bookingsTableBody");

  tableBody.innerHTML = `
    <tr><td colspan="6">Loading bookings...</td></tr>
  `;

  try {
    const response = await fetch("http://localhost:8080/api/bookings");

    if (!response.ok) {
      throw new Error("Unable to load bookings.");
    }

    const bookings = await response.json();

    if (bookings.length === 0) {
      tableBody.innerHTML = `
        <tr><td colspan="6">No bookings found.</td></tr>
      `;
      return;
    }

    tableBody.innerHTML = bookings.map(booking => `
      <tr>
        <td>${escapeHTML(booking.id)}</td>
        <td>${escapeHTML(booking.passengerName)}</td>
        <td>${escapeHTML(booking.transport)}</td>
        <td>${escapeHTML(booking.fromLocation)} → ${escapeHTML(booking.toLocation)}</td>
        <td>${escapeHTML(booking.seatNumber)}</td>
        <td>₹${escapeHTML(booking.totalAmount)}</td>
        <td>${escapeHTML(booking.status || "Confirmed")}</td>
        <td>
        <button
  class="cancel-booking"
  data-id="${escapeHTML(booking.id)}"
  ${String(booking.status || "Confirmed").toLowerCase() === "cancelled" ? "disabled" : ""}
>
  ${String(booking.status || "Confirmed").toLowerCase() === "cancelled" ? "Cancelled" : "Cancel"}
</button>
</td>
      </tr>
    `).join("");
    tableBody.querySelectorAll(".cancel-booking").forEach(button => {
      button.addEventListener("click", async () => {
        const bookingId = button.dataset.id;

        if (!confirm(`Are you sure you want to cancel booking ${bookingId}?`)) {
          return;
        }

        try {
          const cancelResponse = await fetch(
            `http://localhost:8080/api/bookings/${bookingId}/cancel`,
            { method: "PUT" }
          );

          if (!cancelResponse.ok) {
            throw new Error("Unable to cancel booking.");
          }

          alert("Booking cancelled successfully!");

          document.querySelector("#loadBookings").click();

        } catch (error) {
          alert(error.message);
        }
      });
    });

  } catch (error) {
    tableBody.innerHTML = `
      <tr><td colspan="7">${escapeHTML(error.message)}</td></tr>
    `;
  }
});

/* =========================================================
   MY TRIPS - TRIP SYNCHRONIZATION
   ========================================================= */

const myTripsSection = document.createElement("section");

myTripsSection.id = "myTrips";

myTripsSection.innerHTML = `
  <div class="my-bookings-container">
    <h2>My Trips</h2>
    <p>Your synchronized travel itinerary</p>

    <button id="loadMyTrips" type="button">
      View My Trips
    </button>

    <div id="myTripsContent">
      <p>Click View My Trips to see your travel itinerary.</p>
    </div>
  </div>
`;

document.querySelector("#app").appendChild(myTripsSection);

document.querySelector("#loadMyTrips").addEventListener("click", async () => {
  const tripsContent = document.querySelector("#myTripsContent");

  tripsContent.innerHTML = "<p>Loading your trips...</p>";

  try {
    const response = await fetch("http://localhost:8080/api/trips");

    if (!response.ok) {
      throw new Error("Unable to load your trips.");
    }

    const trips = await response.json();

    const confirmedTrips = trips
      .map(trip => ({
        ...trip,
        bookings: (trip.bookings || []).filter(
          booking =>
            String(booking.status || "Confirmed").toLowerCase() === "confirmed"
        )
      }))
      .filter(trip => trip.bookings.length > 0);

    if (confirmedTrips.length === 0) {
      tripsContent.innerHTML = "<p>No confirmed trips found.</p>";
      return;
    }

    tripsContent.innerHTML = confirmedTrips.map((trip, index) => `
      <div class="trip-card">
        <h3>Trip ${index + 1}</h3>

        <p><strong>Trip ID:</strong> ${escapeHTML(trip.id)}</p>

        <p><strong>Route:</strong>
          ${escapeHTML(trip.fromLocation)} →
          ${escapeHTML(trip.toLocation)}
        </p>

        <p><strong>Travel Date:</strong>
          ${escapeHTML(trip.travelDate)}
        </p>

        <p><strong>Transport:</strong>
          ${escapeHTML(trip.transport)}
        </p>

        <p><strong>Passengers:</strong> ${trip.bookings.length}</p>

        <h4>Passenger Details</h4>
        <ul>
          ${trip.bookings.map(booking => `
            <li>
              ${escapeHTML(booking.passengerName)}
              - Seat ${escapeHTML(booking.seatNumber)}
              - Booking ID ${escapeHTML(booking.id)}
            </li>
          `).join("")}
        </ul>

        <p><strong>Total Amount:</strong>
          ₹${trip.bookings.reduce(
            (sum, booking) => sum + Number(booking.totalAmount || 0), 0
          )}
        </p>

        <p><strong>Status:</strong> Synchronized</p>
      </div>
    `).join("");

  } catch (error) {
    tripsContent.innerHTML = `<p>${escapeHTML(error.message)}</p>`;
  }
});