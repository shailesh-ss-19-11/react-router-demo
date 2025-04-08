import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes.js'
import Protected from './protectAuth/Protected.jsx'
import Login from './auth/Login.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' Component={Login}/>
        {/* <Route path='/' element={<App />} /> */}
        {/* <Route path='/' Component={App} /> */}
        {
          routes &&
          routes.map((route) => {
            return <Route path={route.path} element={
            <Protected >
              <route.component/> 
            </Protected>} />
          })
        }
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
