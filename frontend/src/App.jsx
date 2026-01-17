import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUpPage from "./pages/signUp/SignUpPage.jsx";
import PersonalProfessionalForm from "./pages/DoctorRegistration/PersonalProfessional/PersonalProfessionalForm.jsx";
import { PrimeReactProvider } from "primereact/api";
import OfferedSevicesPage from "./pages/DoctorRegistration/Offered_services/OfferedSevicesPage.jsx";

const App = () => {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route
              path="/RegistrationForm"
              element={<PersonalProfessionalForm />}
            />
            <Route path="offeredServices" element={<OfferedSevicesPage />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
};

export default App;
