import { useLocation, useParams } from "react-router-dom";
import PartOfSpeech from "../components/PartOfSpeech";
import SearchInput from "../components/SearchInput";

function Definition() {
  const param = useParams();
  const location = useLocation();
  const dataArray = location.state;

  return (
    <div >
      <div className="flex justify-start items-center h-20">
        <SearchInput />
      </div>
      <div className=" p-10">
        <div className="bg-gray-200 rounded-xl p-5">
        <div className="  capitalize text-3xl font-semibold">{param.word}</div>
        {dataArray.map((data: any, index: number) => {
          return <PartOfSpeech key={index} data={data} />;
        })}
        </div>
      </div>
    </div>
  );
}

export default Definition;
