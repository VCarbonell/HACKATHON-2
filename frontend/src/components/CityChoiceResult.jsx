/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import "./CityChoiceResult.css";

function CityChoiceResult({
  allResult,
  actualSearch,
  setActualSearch,
  setAllResult,
}) {
  const boldSearch = (result) =>
    result.toLowerCase().search(actualSearch.toLowerCase());

  const handleResearch = (name) => {
    setActualSearch(name);
    setAllResult();
  };

  return (
    <div className="CityChoiceResult">
      {allResult.map((result) => {
        const boldWord = boldSearch(result.name);
        const sliceEnd = actualSearch.length + boldWord;
        return (
          <div
            className="CityChoiceOneResult"
            onClick={() => handleResearch(result.name)}
          >
            <p>{result.name.substring(0, boldWord)}</p>
            <p id="CityChoiceActualSearch">
              {result.name.slice(boldWord, sliceEnd)}
            </p>
            <p>{result.name.substring(sliceEnd)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CityChoiceResult;
