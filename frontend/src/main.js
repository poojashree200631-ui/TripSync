import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <!-- HERO -->

  <main class="home">

    <img
      class="hero-image"
      src="/tripsync-hero.png"
      alt="TripSync — Your Next Adventure Starts Here"
    />

    <div class="hero-fade"></div>

    <button
      class="hero-scroll"
      id="scrollExplore"
      aria-label="Scroll to explore"
    >
      <span class="arrow">↓</span>
      <span>SCROLL TO EXPLORE</span>
    </button>

  </main>


  <!-- EXPLORE SECTION -->

  <section class="explore-section" id="explore">

    <div class="explore-heading">

      <span class="section-label">
        TRIPSYNC
      </span>

      <h1>
        Choose Your Journey
      </h1>

      <p>
        One place to plan, book and experience
        your next adventure.
      </p>

    </div>


    <div class="travel-options">

      <!-- BUS -->

      <button class="travel-card">

        <div class="travel-icon">
          🚌
        </div>

        <div class="travel-content">

          <span class="travel-number">
            01
          </span>

          <h2>
            Bus
          </h2>

          <p>
            Scenic routes,
            comfortable journeys.
          </p>

        </div>

        <span class="travel-arrow">
          →
        </span>

      </button>


      <!-- TRAIN -->

      <button class="travel-card">

        <div class="travel-icon">
          🚆
        </div>

        <div class="travel-content">

          <span class="travel-number">
            02
          </span>

          <h2>
            Train
          </h2>

          <p>
            Relax, watch the world
            pass by.
          </p>

        </div>

        <span class="travel-arrow">
          →
        </span>

      </button>


      <!-- FLIGHT -->

      <button class="travel-card">

        <div class="travel-icon">
          ✈
        </div>

        <div class="travel-content">

          <span class="travel-number">
            03
          </span>

          <h2>
            Flight
          </h2>

          <p>
            Go farther,
            discover more.
          </p>

        </div>

        <span class="travel-arrow">
          →
        </span>

      </button>

    </div>

  </section>
`;


/* HERO SCROLL */

document
  .querySelector("#scrollExplore")
  .addEventListener("click", () => {

    document
      .querySelector("#explore")
      .scrollIntoView({
        behavior: "smooth"
      });

  });