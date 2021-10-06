
import './App.css';

import Side from './components/Side';



function App() {
  return (
    <div className="App">
      
      <Side color="red" message="je suis à gauche"/>
      <Side color="yellow" message="je suis au centre"/>
      <Side color="green" message="je suis à droite"/>
    </div>
  );
}
export default App;


