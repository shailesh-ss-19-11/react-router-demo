import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      {
        routes && routes.length > 0 ?
          routes.map((route) => {
            return <Route path={route.path} element={route.component} />
          })
          : null
      }
      <Routes>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
