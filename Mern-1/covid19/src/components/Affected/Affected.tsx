import React, { useEffect, useState } from "react";
import { getCovidData } from "../../Services/CovidDataService";
import { AffectedI } from "../../Services/CovidDataService";

function Affected() {
  const [country, setCountry] = useState("");
  const [covidData, setCovidData] = useState<AffectedI | undefined>();

  useEffect(() => {
    getCovidData(country).then((data) => {
      setCovidData(data);
    });
  }, [country]);

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option value="usa">USA</option>
        <option value="india">India</option>
        <option value="russia">Russia</option>
        <option value="china">China</option>
        <option value="england">England</option>
      </select>
      <div className="container">
        <h3>Country:{country}</h3>
        <h4>Cases: {covidData?.cases} </h4>
        <h4>Deaths:{covidData?.deaths}</h4>
        <h4>Recoveries:{covidData?.recovered}</h4>
      </div>
    </>
  );
}

export default Affected;
