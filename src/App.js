import './App.css';
import '../src/sassystyle.scss';
import machine from './machine.jpeg';




function App() {
  return (
    <div className="container">
      <div className="centered">
        <div className="upper">
          <h1>Flow Rate Carpet Cleaning LLC</h1>

        </div>

        <div className="lower">
          <div className="lower-left">
            <img src={machine} alt="" />
          </div>
          <div className="lower-right">
            <ul>
              <li>$35 per room (up to 250 square feet each)</li>
              <li>furniture moving</li>
              <li>dry vacuuming</li>
              <li>stain pre-treament</li>
              <li>industry leading hot water extraction (steam cleaning)</li>
              <li>deoderization</li>
              <li>dries same day</li>
              <li>mobile equipment capable of reaching all homes and high rises</li>
              <li>upholstery cleaning</li>
              <li>curtain cleaning</li>
              <li>use of biodegradable Dr Bronners Sal Suds unless otherwise desired</li>
              <li>info@flowratecleaning.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
