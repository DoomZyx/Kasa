import React from "react";
import Header from "../../components/Header/Header.jsx";
import BannerAbout from "../../components/Banner/Banner-about.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SectionsList from "../../components/About/AboutSection.jsx";
import sectionsData from "../../data/AboutData.jsx";

function AboutPage() {
  return (
    <div>
      <Header />
      <BannerAbout />
      <div>
        <SectionsList sections={sectionsData} />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
