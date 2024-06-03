import axios from "axios";
import "./App.css";

function App() {
  const testMethod = () => {
    axios
      .get(`https://typing-plus-api-3051815eaf4f.herokuapp.com/`)
      .then((res) => {
        if (res) {
          console.log(res.data)
        }
      })
      .catch(() => console.log("error"));
  };

  return (
    <div className="App">
      <button onClick={() => testMethod()}>データ取得</button>
    </div>
  )
}

export default App;
