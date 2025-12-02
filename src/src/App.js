import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import LiveLocationMap from "./components/liveLocationMap.jsx";
import Products from "./components/product.jsx";
import About from "./components/about.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Services from "./components/services.jsx";
import ContactUs from "./components/contactUs.jsx";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-wrapper">

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Industrial Sales & Services | Home</title>
                  <meta
                    name="description"
                    content="Industrial Sales & Services provides high-quality industrial equipment, iss, repair gear motors and provide good services."
                  />
                  <meta
                    name="keywords"
                    content="industrial services, industrial sales, machinery repair, gearmotor, gearbox, gear services"
                  />
                </Helmet>

                <Hero />
                <About />
                <Products />
                <Services />
                <LiveLocationMap />
              </>
            }
          />

          {/* ABOUT PAGE */}
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us | Industrial Sales & Services</title>
                  <meta
                    name="description"
                    content="Learn about Industrial Sales & Services, our mission, vision, and commitment to delivering reliable industrial solutions."
                  />
                </Helmet>
                <About />
              </>
            }
          />

          {/* PRODUCTS PAGE */}
          <Route
            path="/products"
            element={
              <>
                <Helmet>
                  <title>Our Products | Industrial Sales & Services</title>
                  <meta
                    name="description"
                    content="Explore our wide range of industrial products, machinery, motors, and equipment."
                  />
                </Helmet>
                <Products />
              </>
            }
          />

          {/* SERVICES PAGE */}
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <title>Our Services | Industrial Sales & Services</title>
                  <meta
                    name="description"
                    content="Discover professional industrial services including repair, maintenance, gearbox solutions, and machinery support."
                  />
                </Helmet>
                <Services />
              </>
            }
          />

          {/* WHY CHOOSE US PAGE */}
          <Route
            path="/why-choose"
            element={
              <>
                <Helmet>
                  <title>Why Choose Us | Industrial Sales & Services</title>
                  <meta
                    name="description"
                    content="Reasons why Industrial Sales & Services is trusted for industrial machinery, equipment supply, and servicing."
                  />
                </Helmet>
                <WhyChoose />
              </>
            }
          />

          {/* CONTACT PAGE */}
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us | Industrial Sales & Services</title>
                  <meta
                    name="description"
                    content="Contact Industrial Sales & Services for industrial machine repair, gearbox repair, gearmotor services, product inquiries, or service bookings."
                  />
                </Helmet>
                <ContactUs />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
