import "./App.css";
import Result from "./Result";

function App() {
  return (
    <div className="container">
      <h1>CSS file analyzer using caniuse API</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Paste your css file here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Paste your css file here"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <Result />
    </div>
  );
}

export default App;
