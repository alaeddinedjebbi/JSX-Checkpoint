import './App.css';
import './Style.css';
import MyImage from './compon/MyImage/MyImage';
import MyVideo from './compon/MyVideo/MyVideo';



function App() {
  return (
    <div className="App">
      <h1 className="title-red">DJEBBI ALAEDDINE</h1>
      <br/>
      <img src={process.env.PUBLIC_URL + "/DjebbiAlaeddine.jpg"} alt="DJEBBI ALAEDDINE"/>
      <br/>
      <MyImage />
      <br />
      <MyVideo />
    </div>
  );
}

export default App;
