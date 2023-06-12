import Phonetic from "../components/Phonetic";

function PartOfSpeech(props: any) {
  const phoneticArray = props.data.phonetics;
  const definitionArray = props.data.meanings[0].definitions;
  console.log(definitionArray);

  return (
    <div className=" space-y-3">
      <div className=" my-4">{props.data.meanings[0].partOfSpeech}</div>
      <div className="flex flex-row items-center justify-start gap-5">
        {phoneticArray.map((phonetic: any, index: number) => {
          return <Phonetic key={index} phonetic={phonetic} />;
        })}
      </div>
      <ol className=" list-disc mx-8">
        {definitionArray.map((definition: any, index: number) => {
          let hasExample = false;
          if (definition.example) {
            hasExample = true;
          }
          return (
            <li key={index}>
              <div>{definition.definition}</div>
              {hasExample ? (
                <div className="font-light">"{definition.example}"</div>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default PartOfSpeech;
