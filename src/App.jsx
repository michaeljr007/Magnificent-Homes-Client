import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PropertyInfo from "./pages/Property-info";
import AllProperties from "./pages/All-properties";
import AdminDashboard from "./pages/AdminDashboard";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FloatingButton from "./components/FloatingButton";
import NewsletterForm from "./components/NewsLetterForm";
import Navbar from "./components/Navbar";

function App() {
  // Preloader state
  const [isloading, setIsLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const preloaderShown = localStorage.getItem("preloaderShown");

    if (!preloaderShown) {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem("preloaderShown", "true");
        }, 800);
      };

      fakeDataFetch();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      {isloading ? (
        <span>
          <Loader />
        </span>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tour-form" element={<NewsletterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/property-info" element={<PropertyInfo />} />
            <Route path="/all-properties" element={<AllProperties />} />
          </Routes>
          <FloatingButton />
        </div>
      )}
    </div>
  );
}

export default App;
