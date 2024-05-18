import axios from "axios";

export interface VaccinatedI {
  country: string;
  count: number;
}

async function getVaccinatedData(country: string) {
  let response = await axios.get(
    "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"
  );
  let result = await response.data;

  for (let i of result) {
    if (i.country.toLowerCase() === country.toLowerCase()) {
      let data = { country: i.country, count: i.timeline["5/17/24"] };
      console.log(data);
      return data;
    }
  }
}

export { getVaccinatedData };
