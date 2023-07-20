import { Outlet } from 'react-router-dom';
import About from '../components/About';
import Courses from '../components/Courses';

const Home = () => {
  return (
    <div>
      {/* <About />
      <Courses /> */}
      <Outlet/>
    </div>
  );
};

export default Home;
