import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routes/Routes.js'
import Protected from './protectAuth/Protected.jsx'
import Login from './auth/Login.jsx'
import Loader from './components/Loader.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Navbar />
			<Suspense fallback={<Loader/>}>
				<Routes>
					<Route path='/login' Component={Login} />
					{/* <Route path='/' element={<App />} /> */}
					{/* <Route path='/' Component={App} /> */}
					{/* <Route path='/services/' Component={Services} >
					<Route path='home-service' Component={HomeServices}/>
				</Route> */}
					{
						routes &&
						routes.map((route) => {
							return (
								// parent routes ///////////////////////////////////
								<Route path={route.path} 
                element={
                <Protected>
									<route.component/>
								</Protected>}>
									{/* //nested routes //////////////////// */}
									{route && route.children &&
										route.children.map((child) => {
											return <Route path={child.path} Component={child.component} />
										})}
								</Route>
							)
						})
					}
				</Routes>
			</Suspense>
		</BrowserRouter>
	</StrictMode>,
)
