import { Route } from 'react-router';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Friend from './Component/Friends/Friend'
import Settings from './Component/Settings/Settings';

function App() {
  return (
    <div>
     <NavBar />

     <Route component={Home} />
     <Route component={Profile}/>
     <Route component={Friend} />
     <Route component={Settings} />
    </div>
  );
}

export default App;
