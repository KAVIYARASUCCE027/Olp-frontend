import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes, } from 'react-router'
import AppCategory from './AppCategory.jsx'
import Aiml from './Aiml.jsx'
import BlockChain from './BlockChain.jsx'
import CloudComputing from './CloudComputing.jsx'
import CyberSecurity from './CyberSecurity.jsx'
import Webdevelopment from './Webdevelopment.jsx'
import DataScience from './DataScience.jsx'
import SignUp from './SignUp.jsx'
import LoginPage from './LoginPage.jsx'
import Pay from './BlockchainC/Pay.jsx'
import NewCourseForm from './NewCourseForm.jsx'
import MainLayOut from './MainLayOut.jsx';


createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
  <Route element={<MainLayOut/>}>
      <Route path="/" element={<App />} />
      <Route path="/categories" element={<AppCategory />} />
      <Route path="/aiml" element={<Aiml />} />
      <Route path="/blockchain" element={<BlockChain />} />
      <Route path="/cloud" element={<CloudComputing />} />
      <Route path="/cybersecurity" element={<CyberSecurity />} />
      <Route path="/web-development" element={<Webdevelopment />} />
      <Route path="/data-science" element={<DataScience />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/newcourseform" element={<NewCourseForm/>}/>
      </Route>

  </Routes>
</BrowserRouter>

)
