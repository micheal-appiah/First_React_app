import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
 import LoginPage from './component/login_page';
 import RegistrationPage from './component/registration_page';
 import DashboardPage from './component/dashboard';
 import StudentInfoEntryPage from './component/student_entry_page';

 const App = () => {
   return (
     <Router>
       <Routes>
         <Route exact path="/" element={<LoginPage/>} />
         <Route exact path="/registration" element={<RegistrationPage/>} />
         <Route exact path="/dashboard" element={<DashboardPage/>} />
         <Route exact path="/studentinfoentry" element={<StudentInfoEntryPage/>} />
       </Routes>
     </Router>
   );
 };

export default App;