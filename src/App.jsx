import { NavLink, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Settings from './pages/Settings.jsx';

const App = () => {
  return (<>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
    <nav className='fixed top left-11 right-11 flex justify-between bg-gray-200 p-4 mt-70 rounded-full'>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/settings" >Settings</NavLink>
    </nav>
   </>
  )
}

export default App