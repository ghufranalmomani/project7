import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Journey HTML CSS Template</title>
    {/* 
  Journey Template 
  http://www.templatemo.com/tm-511-journey
  */}
    {/* load stylesheets */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    />{" "}
    {/* Google web font "Open Sans" */}
    <link
      rel="stylesheet"
      href="font-awesome-4.7.0/css/font-awesome.min.css"
    />{" "}
    {/* Font Awesome */}
    <link rel="stylesheet" href="css/bootstrap.min.css" /> {/* Bootstrap style */}
    <link rel="stylesheet" type="text/css" href="css/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
    <link rel="stylesheet" href="css/templatemo-style.css" />{" "}
    {/* Templatemo style */}
    {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
    {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
    {/*[if lt IE 9]>
          
          
      <![endif]*/}
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg" />
      <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg narbar-light">
              <a className="navbar-brand mr-auto" href="#">
                <img src="img/logo.png" alt="Site logo" />
                Journey
              </a>
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggler collapsed"
                data-toggle="collapse"
                data-target="#mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#top">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-2">
                      Top Destinations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-3">
                      Recommended Places
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-4">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* .tm-top-bar */}
      <div className="tm-page-wrap mx-auto">
        <section className="tm-banner">
          <div className="tm-container-outer tm-banner-bg">
            <div className="container">
              <div className="row tm-banner-row tm-banner-row-header">
                <div className="col-xs-12">
                  <div className="tm-banner-header">
                    <h1 className="text-uppercase tm-banner-title">
                      Let's begin
                    </h1>
                    <img src="img/dots-3.png" alt="Dots" />
                    <p className="tm-banner-subtitle">
                      We assist you to choose the best.
                    </p>
                    <a href="javascript:void(0)" className="tm-down-arrow-link">
                      <i className="fa fa-2x fa-angle-down tm-down-arrow" />
                    </a>
                  </div>
                </div>{" "}
                {/* col-xs-12 */}
              </div>{" "}
              {/* row */}
              <div className="row tm-banner-row" id="tm-section-search">
                <form
                  action="index.html"
                  method="get"
                  className="tm-search-form tm-section-pad-2"
                >
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                      <label htmlFor="inputCity">Choose Your Destination</label>
                      <input
                        name="destination"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Type your destination..."
                      />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-1">
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-2">
                        <label htmlFor="inputRoom">How many rooms?</label>
                        <select
                          name="room"
                          className="form-control tm-select"
                          id="inputRoom"
                        >
                          <option value={1} selected="">
                            1 Room
                          </option>
                          <option value={2}>2 Rooms</option>
                          <option value={3}>3 Rooms</option>
                          <option value={4}>4 Rooms</option>
                          <option value={5}>5 Rooms</option>
                          <option value={6}>6 Rooms</option>
                          <option value={7}>7 Rooms</option>
                          <option value={8}>8 Rooms</option>
                          <option value={9}>9 Rooms</option>
                          <option value={10}>10 Rooms</option>
                        </select>
                      </div>
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputAdult">Adult</label>
                        <select
                          name="adult"
                          className="form-control tm-select"
                          id="inputAdult"
                        >
                          <option value={1} selected="">
                            1
                          </option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                      <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                        <label htmlFor="inputChildren">Children</label>
                        <select
                          name="children"
                          className="form-control tm-select"
                          id="inputChildren"
                        >
                          <option value={0} selected="">
                            0
                          </option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                        </select>
                      </div>
                    </div>
                  </div>{" "}
                  {/* form-row */}
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                      <label htmlFor="inputCheckIn">Check In Date</label>
                      <input
                        name="check-in"
                        type="text"
                        className="form-control"
                        id="inputCheckIn"
                        placeholder="Check In"
                      />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-3">
                      <label htmlFor="inputCheckOut">Check Out Date</label>
                      <input
                        name="check-out"
                        type="text"
                        className="form-control"
                        id="inputCheckOut"
                        placeholder="Check Out"
                      />
                    </div>
                    <div className="form-group tm-form-group tm-form-group-pad tm-form-group-1">
                      <label htmlFor="btnSubmit">&nbsp;</label>
                      <button
                        type="submit"
                        className="btn btn-primary tm-btn tm-btn-search text-uppercase"
                        id="btnSubmit"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                </form>
              </div>{" "}
              {/* row */}
              <div className="tm-banner-overlay" />
            </div>{" "}
            {/* .container */}
          </div>{" "}
          {/* .tm-container-outer */}
        </section>
        <section className="p-5 tm-container-outer tm-bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
                <h2 className="text-uppercase mb-4">
                  Your <strong>Journey</strong> is our priority
                </h2>
                <p className="mb-4">
                  Nullam auctor, sapien sit amet lacinia euismod, lorem magna
                  lobortis massa, in tincidunt mi metus quis lectus. Duis nec
                  lobortis velit. Vivamus id magna vulputate, tempor ante eget,
                  tempus augue. Maecenas ultricies neque magna.
                </p>
                <a href="#" className="text-uppercase btn-primary tm-btn">
                  Continue explore
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="tm-container-outer" id="tm-section-2">
          <section className="tm-slideshow-section">
            <div className="tm-slideshow">
              <img src="img/tm-img-01.jpg" alt="Image" />
              <img src="img/tm-img-02.jpg" alt="Image" />
              <img src="img/tm-img-03.jpg" alt="Image" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
              <h2 className="">Europe's most visited places</h2>
              <p>
                Aenean in lacus nec dolor fermentum congue. Maecenas ut velit
                pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi
                nibh, faucibus ac eros id, sagittis tincidunt velit. Proin
                interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non
                pulvinar id, sagittis eget diam.
              </p>
              <a
                href="#"
                className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
              >
                Continue Reading
              </a>
            </div>
          </section>
          <section className="clearfix tm-slideshow-section tm-slideshow-section-reverse">
            <div className="tm-right tm-slideshow tm-slideshow-highlight">
              <img src="img/tm-img-02.jpg" alt="Image" />
              <img src="img/tm-img-03.jpg" alt="Image" />
              <img src="img/tm-img-01.jpg" alt="Image" />
            </div>
            <div className="tm-slideshow-description tm-slideshow-description-left tm-bg-highlight">
              <h2 className="">Asia's most popular places</h2>
              <p>
                Vivamus in massa ullamcorper nunc auctor accumsan ac at arcu.
                Donec sagittis mattis pharetra. Proin commodo, ante et volutpat
                pulvinar, arcu arcu ullamcorper diam, id maximus sem tellus id
                sem. Suspendisse eget rhoncus diam. Fusce urna elit, porta nec
                ullamcorper id.
              </p>
              <a
                href="#"
                className="text-uppercase tm-btn tm-btn-white tm-btn-white-highlight"
              >
                Continue Reading
              </a>
            </div>
          </section>
          <section className="tm-slideshow-section">
            <div className="tm-slideshow">
              <img src="img/tm-img-03.jpg" alt="Image" />
              <img src="img/tm-img-02.jpg" alt="Image" />
              <img src="img/tm-img-01.jpg" alt="Image" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
              <h2 className="">America's most famous places</h2>
              <p>
                Donec nec laoreet diam, at vehicula ante. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Suspendisse nec dapibus nunc, quis viverra metus. Morbi eget diam
                gravida, euismod magna vel, tempor urna.
              </p>
              <a
                href="#"
                className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary"
              >
                Continue Reading
              </a>
            </div>
          </section>
        </div>
        <div className="tm-container-outer" id="tm-section-3">
          <ul className="nav nav-pills tm-tabs-links">
            <li className="tm-tab-link-li">
              <a href="#1a" data-toggle="tab" className="tm-tab-link">
                <img
                  src="img/north-america.png"
                  alt="Image"
                  className="img-fluid"
                />
                North America
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#2a" data-toggle="tab" className="tm-tab-link">
                <img
                  src="img/south-america.png"
                  alt="Image"
                  className="img-fluid"
                />
                South America
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#3a" data-toggle="tab" className="tm-tab-link">
                <img src="img/europe.png" alt="Image" className="img-fluid" />
                Europe
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#4a" data-toggle="tab" className="tm-tab-link active">
                {/* Current Active Tab */}
                <img src="img/asia.png" alt="Image" className="img-fluid" />
                Asia
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#5a" data-toggle="tab" className="tm-tab-link">
                <img src="img/africa.png" alt="Image" className="img-fluid" />
                Africa
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#6a" data-toggle="tab" className="tm-tab-link">
                <img src="img/australia.png" alt="Image" className="img-fluid" />
                Australia
              </a>
            </li>
            <li className="tm-tab-link-li">
              <a href="#7a" data-toggle="tab" className="tm-tab-link">
                <img src="img/antartica.png" alt="Image" className="img-fluid" />
                Antartica
              </a>
            </li>
          </ul>
          <div className="tab-content clearfix">
            {/* Tab 1 */}
            <div className="tab-pane fade" id="1a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">North Garden Resort</h3>
                    <p className="tm-text-highlight">One North</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$110</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Felis nec dignissim</h3>
                    <p className="tm-text-highlight">Two North</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <div id="preload-hover-img" />
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$120</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Sed fermentum justo</h3>
                    <p className="tm-text-highlight">Three North</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$130</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Maecenas ultricies neque
                    </h3>
                    <p className="tm-text-highlight">Four North</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$140</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 2 */}
            <div className="tab-pane fade" id="2a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">South Resort Hotel</h3>
                    <p className="tm-text-highlight">South One</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$220</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Aenean ac ante nec diam
                    </h3>
                    <p className="tm-text-highlight">South Second</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$230</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Suspendisse nec dapibus
                    </h3>
                    <p className="tm-text-highlight">South Third</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$240</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Aliquam viverra mi at nisl
                    </h3>
                    <p className="tm-text-highlight">South Fourth</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$250</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 3 */}
            <div className="tab-pane fade" id="3a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Europe Hotel</h3>
                    <p className="tm-text-highlight">Venecia, Italy</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$330</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      In viverra enim turpis
                    </h3>
                    <p className="tm-text-highlight">Paris, France</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$340</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Volutpat pellentesque
                    </h3>
                    <p className="tm-text-highlight">Barcelona, Spain</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$350</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">Istanbul, Turkey</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$360</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 4 */}
            <div className="tab-pane fade show active" id="4a">
              {/* Current Active Tab WITH "show active" classes in DIV tag */}
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Asia Resort Hotel</h3>
                    <p className="tm-text-highlight">Singapore</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$440</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Nullam eget est a nisl
                    </h3>
                    <p className="tm-text-highlight">Yangon, Myanmar</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <div id="preload-hover-img" />
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$450</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Proin interdum ullamcorper
                    </h3>
                    <p className="tm-text-highlight">Bangkok, Thailand</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$460</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Lorem ipsum dolor sit
                    </h3>
                    <p className="tm-text-highlight">Vientiane, Laos</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$470</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 5 */}
            <div className="tab-pane fade" id="5a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Africa Resort Hotel</h3>
                    <p className="tm-text-highlight">First City</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$550</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Aenean ac magna diam</h3>
                    <p className="tm-text-highlight">Second City</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$560</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Beach Barbecue Sunset
                    </h3>
                    <p className="tm-text-highlight">Third City</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$570</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">Fourth City</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$580</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 6 */}
            <div className="tab-pane fade" id="6a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Hotel Australia</h3>
                    <p className="tm-text-highlight">City One</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$660</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Proin interdum ullamcorper
                    </h3>
                    <p className="tm-text-highlight">City Two</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$650</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">
                      Beach Barbecue Sunset
                    </h3>
                    <p className="tm-text-highlight">City Three</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$640</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">City Four</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$630</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
            {/* Tab 7 */}
            <div className="tab-pane fade" id="7a">
              <div className="tm-recommended-place-wrap">
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-04.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Antartica Resort</h3>
                    <p className="tm-text-highlight">Ant City One</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$770</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-05.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Pulvinar Semper</h3>
                    <p className="tm-text-highlight">Ant City Two</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$230</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-06.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Cras vel sapien</h3>
                    <p className="tm-text-highlight">Ant City Three</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$140</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
                <div className="tm-recommended-place">
                  <img
                    src="img/tm-img-07.jpg"
                    alt="Image"
                    className="img-fluid tm-recommended-img"
                  />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Nullam eget est</h3>
                    <p className="tm-text-highlight">Ant City Four</p>
                    <p className="tm-text-gray">
                      Sed egestas, odio nec bibendum mattis, quam odio hendrerit
                      risus, eu varius eros lacus sit amet lectus. Donec blandit
                      luctus dictum...
                    </p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$190</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-uppercase btn-primary tm-btn mx-auto tm-d-table"
              >
                Show More Places
              </a>
            </div>{" "}
            {/* tab-pane */}
          </div>
        </div>
        <div
          className="tm-container-outer tm-position-relative"
          id="tm-section-4"
        >
          <div id="google-map" />
          <form action="index.html" method="post" className="tm-contact-form">
            <div className="form-group tm-name-container">
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                className="form-control"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="form-group tm-email-container">
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="form-control"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="contact_subject"
                name="contact_subject"
                className="form-control"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                id="contact_message"
                name="contact_message"
                className="form-control"
                rows={9}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary tm-btn-primary tm-btn-send text-uppercase"
            >
              Send Message Now
            </button>
          </form>
        </div>{" "}
        {/* .tm-container-outer */}
        <footer className="tm-container-outer">
          <p className="mb-0">
            Copyright © <span className="tm-current-year">2018</span> Your Company
            . Designed by{" "}
            <a
              rel="nofollow"
              href="http://www.google.com/+templatemo"
              target="_parent"
            >
              Template Mo
            </a>
          </p>
        </footer>
      </div>
    </div>{" "}
    {/* .main-content */}
    {/* load JS files */}
    {/* jQuery (https://jquery.com/download/) */}
    {/* https://popper.js.org/ */}
    {/* https://getbootstrap.com/ */}
    {/* https://github.com/qodesmith/datepicker */}
    {/* Single Page Nav (https://github.com/ChrisWojcik/single-page-nav) */}
    {/* http://kenwheeler.github.io/slick/ */}
    {/* https://github.com/flesler/jquery.scrollTo */}
  </>
  );
}

export default App;
