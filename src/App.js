import "./App.css";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-4 py-md-5">
      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Movies Exercise</span>
        </a>
      </header>
      <main>
        <h1 className="text-body-emphasis">Get started with React</h1>
        <Movies />
      </main>
    </div>
  );
}

export default App;
