<?php include('header.php'); ?>

    <div class="fullscreen-image-slider">
      <div class="orbit" role="region" aria-label="FullScreen Pictures" data-orbit>
        <ul class="orbit-container orbit-wrapper">
          <button class="orbit-previous">
            <span class="show-for-sr">Previous Slide</span>
            <span class="nav fa fa-chevron-left fa-3x"></span>
          </button>
          <button class="orbit-next">
            <span class="show-for-sr">Next Slide</span>
            <span class="nav fa fa-chevron-right fa-3x"></span>
          </button>
          <li class="is-active orbit-slide">
            <img class="orbit-image" src="img/slides/fastpoints-slide-1.jpg" alt="Fast Points Rewards">
            <figcaption class="orbit-caption">
              <h1>Get Rewarded with Fast Points</h1>
              <p>With Fast Points, you immediately receive rewards at checkout!</p>
              <a href="#" class="button">Learn More</a>
            </figcaption>
          </li>
          <li class="orbit-slide">
            <img class="orbit-image" src="https://i.imgur.com/JD4Caxa.jpg" alt="Space">
            <figcaption class="orbit-caption">
              <h1>Lorem ipsum dolor sit amet, <br>consectetur adipisicing elit.</h1>
            </figcaption>
          </li>
          <li class="orbit-slide">
            <img class="orbit-image" src="https://i.imgur.com/rsTQbNV.jpg" alt="Space">
            <figcaption class="orbit-caption">
              <h1>Lorem ipsum dolor sit amet, <br>consectetur adipisicing elit.</h1>
            </figcaption>
          </li>
          <nav class="orbit-bullets">
            <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
            <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
            <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
          </nav>
        </ul>
      </div>
    </div> <!-- end FullScreen Image Slider -->

    <section class="fast-points-home">
      <div class="container">
        <div class="inner-row">
          <div class="section-title">
            <h1 class="superhero">Fast Trac Rewards</h1>
          </div>
        </div>
        <div class="inner-row align-center">
          <figure class="section-content">
            <h2 class="standard-shadow">Earn Points Faster with Every Swipe!</h2>
            <p>Earn 50 points per dollar by using your card for purchases at Speedway, in addition to the loyalty points you may earn today, and 10 points everywhere else when you use your card.</p>
          </figure>
        </div>
        <div class="inner-row earn-steps align-center">

          <div class="rewards-steps-circle">
            <div class="circle-content ">
              <i class="fas fa-laptop"></i>
              <span>Join</span>
            </div>
          </div>


          <div class="rewards-steps-circle">
            <div class="circle-content ">
              <i class="fas fa-credit-card"></i>
              <span>Use</span>
            </div>
          </div>


          <div class="rewards-steps-circle">
            <div class="circle-content ">
              <i class="fas fa-list"></i>
              <span>Track</span>
            </div>
          </div>


          <div class="rewards-steps-circle">
            <div class="circle-content ">
              <i class="fas fa-hand-holding-usd"></i>
              <span>Earn</span>
            </div>
          </div>

        </div>

        <div class="inner-row align-center">
            <a href="#" class="button yellow-btn">Learn More</a>
        </div>

        <div class="inner-row align-center">
          <div class="join-today-heading section-content">
            <h2 class="standard-shadow">Join Today and Start Earning!</h2>
          </div>
        </div>
        <div class="inner-row align-center">
          <div class="btn-row">
          <a href="#" class="button black-btn">Login</a>
          <a href="#" class="button white-btn">Sign Up</a>
          </div>
        </div>

      </div>
    </section> <!-- end Fast Points Home -->

    <section class="store-locator-home">
      <div class="container">
        <div class="inner-row align-center">
          <div class="section-title">
            <h1 class="superhero">fast trac locator</h1>
            <p>With 31 locations and growing while serving over 1 million customers a year!</p>
          </div>
        </div>
        <div class="inner-row align-center">
          <div class="store-locator-form">
            <label>Search for the nearest Fast Trac location.
              <input type="text" placeholder="Zip Code/City, State">
            </label>
          </div>
        </div>
        <div class="inner-row align-center">
          <h2>or</h2>
        </div>
        <div class="inner-row align-center">
          <a href="#" class="button">use my location <i class="fas fa-map-marker-alt"></i></a>
        </div>
      </div>
    </section>

    <section class="careers-home">

      <div class="container">
        <div class="inner-row">
          <div class="section-title">
            <h1 class="standard-shadow">join the team</h1>
          </div>
        </div>
        <div class="inner-row">
          <div class="section-content small-order-2 medium-order-1">
            <p>Many of our long-term, seasoned employees began their careers right here. From your first day, you’ll discover why so many have chosen to build their career at Fast Trac.</p>
            <a href="#" class="button">browse careers</a>
          </div>
          <div class="employee-cutout small-order-1 medium-order-2">
            <img src="img/employee-cut.png" alt="">
          </div>
        </div>
      </div>
    </section>



<?php include('footer.php'); ?>
