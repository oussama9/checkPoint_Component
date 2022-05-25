import './App.css';
import Picture from './components/Picture';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <div className="App">
      <div className='card'>
          <Picture/>
          <ProfileDetails/>
      </div>
    </div>
  );
}

export default App;
