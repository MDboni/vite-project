
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

// Root layout with navbar
const Root = () => {
    
  return (
    <div>
        
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Root;



