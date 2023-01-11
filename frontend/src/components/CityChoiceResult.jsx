/* eslint-disable react/prop-types */
import "./CityChoiceResult.css";

function CityChoiceResult({ allResult, actualSearch }) {
  const boldSearch = (result) =>
    result.toLowerCase().search(actualSearch.toLowerCase());

  return (
    <div className="CityChoiceResult">
      {allResult.map((result) => {
        const boldWord = boldSearch(result.name);
        const sliceEnd = actualSearch.length + boldWord;
        return (
          <div className="CityChoiceOneResult">
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
