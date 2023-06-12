import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [word, setWord] = useState("");
  //   const [data, setData] = useState<DefinitionType>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  // arrow function
  // const myFunction = async () => {
  //   return 'test'
  // }

  // function declarative
  async function handleSearchDefinition() {
    // call api using the word
    // console.log(word);

    // change loading state to true
    setLoading(true);

    // await need to pair with async
    // async is method to handle promise (eg:fetch)
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    if (response.status === 200) {
      const jsonData = await response.json();

      navigate("/" + word, {
        state: jsonData,
      });
    } else {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>THE DICTIONARY</h1>
      <div>
        <input
          className=" border"
          type="text"
          name="word"
          id="word"
          placeholder="Insert a word to search"
          // update change value from string usestate in word search
          onChange={(e) => {
            setError(false);
            setWord(e.target.value);
          }}
        />
        <button className="border" onClick={handleSearchDefinition}>
          Search
        </button>
        {isLoading ? <span>Loading...</span> : null}
      </div>

      {isError ? <span>Invalid input</span> : null}

      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
    </div>
  );
}

export default SearchInput;
