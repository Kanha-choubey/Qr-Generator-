import CreateQr from "./components/CreateQr";

function App() {
  return (
    <div className="container ">
      <h1 className="my-5 text-center display-2">QR-Code Generator</h1>
      <div>
        <CreateQr />
      </div>
    </div>
  );
}

export default App;
