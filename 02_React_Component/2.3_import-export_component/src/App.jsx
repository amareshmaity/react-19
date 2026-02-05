import Galary from './Galary';        // default import
import { Profile } from './Profile';  // named import 
import './App.css';


// Parent Component
function App () {
  return (
    <div>
      <Galary/>
      <div className="userProfile">
        <Profile/> 
        <Profile/> 
        <Profile/>
      </div>
 
    </div>
  )
}


export default App;