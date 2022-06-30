import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchWords = async () => {
    const response = await fetch(
      "https://api.datamuse.com/words?rel_rhy=" + input
    );
    const body = await response.json();
    setResults(body.map(({ word }) => word));
  };

  useEffect(() => {
    fetchWords();
  });
  return (
    <div className="App">
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      {results.map((result) => (
        <div key={result}>{result}</div>
      ))}
    </div>
  );
}

export default App;
