import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUpPage from "./pages/signUp/SignUpPage.jsx";
import RegistrationForm from "./pages/DoctorRegistration/RegistrationForm.jsx";
import { PrimeReactProvider } from "primereact/api";

const App = () => {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
};

export default App;
