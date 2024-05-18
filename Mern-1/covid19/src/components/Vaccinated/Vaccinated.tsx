import React from "react";
import { useState , useEffect } from "react";
import { getVaccinatedData , VaccinatedI } from "../../Services/VaccinatedService";

function Vaccinated() {
  const [country, setCountry] = useState("");
  const [vaccinatedData, setVaccinatedData] = useState<VaccinatedI | undefined>();

  useEffect(() => {
    getVaccinatedData(country).then((data) => {
        setVaccinatedData(data);
    });
  }, [country]);

  return <>
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

      <div>
        <h3>Country {vaccinatedData?.country} </h3>
        <h4>Time : "5/17/24"</h4>
        <h4>Vaccinated Count : {vaccinatedData?.count}</h4>
      </div>
  
  </>;
}

export default Vaccinated;
