import axios from "axios";

export interface AffectedI {
  cases: number;
  deaths: number;
  recovered: number;
}
async function getCovidData(country: string) {
  let response = await axios.get(
    `https://disease.sh/v3/covid-19/countries/${country}`,
    
  );

  let result = await response.data;
  let data: AffectedI = {
    cases: result.cases,
    deaths: result.deaths,
    recovered: result.recovered,
  };

  return data;
}

export { getCovidData  };
