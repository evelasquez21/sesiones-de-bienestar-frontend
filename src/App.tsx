import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DashboardRep from "./pages/reception/DashboardRep";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {

  return (
    <Router>
      <AuthProvider>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/servicios" element={<Service/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>
        <Route path="/contacto" element={<ContactUs/>}/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["Administrador"]}>
              <DashboardRep/>
            </ProtectedRoute>
            
          }
        />

        <Route path="/dashboard/*" element={<Navigate to="/login" replace/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
