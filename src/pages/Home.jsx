import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import NewsLetterForm from "../components/NewsLetterForm";
import Footer from "../components/Footer";

const Home = () => {
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
