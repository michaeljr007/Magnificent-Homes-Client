import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import NewsLetterForm from "../components/NewsLetterForm";
import Footer from "../components/Footer";
import useScrollToTop from "../components/useScrollToTop";

const Home = () => {
  useScrollToTop();
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Main />
      <NewsLetterForm />
      <Footer />
    </div>
  );
};

export default Home;
