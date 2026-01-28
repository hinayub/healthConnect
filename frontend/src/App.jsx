import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUpPage from "./pages/signUp/SignUpPage.jsx";
import PersonalProfessionalForm from "./pages/DoctorRegistration/PersonalProfessional/PersonalProfessionalForm.jsx";
import { PrimeReactProvider } from "primereact/api";
import OfferedServicesPage from "./pages/DoctorRegistration/Offered_services/OfferedServicesPage.jsx";
import UploadPage from "./pages/DoctorRegistration/Uploads.jsx/UploadPage.jsx";
import Layout from "./component/Layout.jsx";

const App = () => {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="" element={<Login />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route
                path="/RegistrationForm"
                element={<PersonalProfessionalForm />}
              />
              <Route path="offeredServices" element={<OfferedServicesPage />} />
              <Route path="uploads" element={<UploadPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
};

export default App;
