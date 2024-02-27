import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from './component/Home/Home.jsx'
import About from "./component/About/About.jsx"
import Contact from './component/Contact/Contact.jsx'
// import {AppProvider} from './context/ProductContext.jsx'
import BillingDetail from './component/BillingDetail/BillingDetail.jsx'
import PaymentMethod from './component/PaymentMethod/PaymentMethod.jsx'
import  Dashboard from './component/Dashboard/Dashboard.jsx'
import MyProfile from './component/MyProfile/MyProfile.jsx'
import Editprofile from './component/EditProfile/EditProfile.jsx'
import SaveAddress from './component/SaveAddress/SaveAddress.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  
<Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/shop/billingdetail' element={<BillingDetail/>}/>
    <Route path='/shop/paymentMethod' element={<PaymentMethod/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/myProfile' element={<MyProfile/>}/>
    <Route path='/Editprofile' element={<Editprofile/>}/>
    <Route path='/saveaddress' element={<SaveAddress/>}/>
    
  </Route>
  ))

  ReactDOM.createRoot(document.getElementById('root')).render(
    // <AppProvider>
    <React.StrictMode>
   
      <RouterProvider  router={router}/>
    </React.StrictMode>
    // </AppProvider>
  )


// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './component/Home/Home.jsx';
// import About from './component/About/About.jsx';
// import Contact from './component/Contact/Contact.jsx';
// import { AppProvider } from './context/ProductContext.jsx';
// import BillingDetail from './component/BillingDetail/BillingDetail.jsx';
// import PaymentMethod from './component/PaymentMethod/PaymentMethod.jsx';
// import Dashboard from './component/Dashboard/Dashboard.jsx';
// import MyProfile from './component/MyProfile/MyProfile.jsx';
// import Editprofile from './component/EditProfile/EditProfile.jsx';
// import SaveAddress from './component/SaveAddress/SaveAddress.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//       <Route path='/shop/billingdetail' element={<BillingDetail />} />
//       <Route path='/shop/paymentMethod' element={<PaymentMethod />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//       <Route path='/myProfile' element={<MyProfile />} />
//       <Route path='/Editprofile' element={<Editprofile />} />
//       <Route path='/saveaddress' element={<SaveAddress />} />
//     </Route>
//   )
// );

// const App = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top whenever route changes
//   }, []);

//   return (
//     <AppProvider>
//       <React.StrictMode>
//         <RouterProvider router={router} />
//       </React.StrictMode>
//     </AppProvider>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
