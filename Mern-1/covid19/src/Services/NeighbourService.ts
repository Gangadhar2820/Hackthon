import axios from "axios";

const countries = [
  "india",
  "pakistan",
  "china",
  "nepal",
  "bangladesh",
  "iran"
];

export interface country {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
}

let fiveCountryData:country[] = [];

async function getNeighbourData(){

    for(let i of countries){
    let response = await axios.get(`https://disease.sh/v3/covid-19/countries/${i}`);
    let result = await response.data;
    let data = {
        cases: result.cases,
        deaths: result.deaths,
        recovered: result.recovered,
        country:result.country
      };
    fiveCountryData.push(data)

    }

    let temp = [];
    let tempCountries:string[] = [];

    for(let i of fiveCountryData ){
      if(!tempCountries.includes(i.country.toLowerCase())){
        tempCountries.push(i.country.toLowerCase());
        temp.push(i);

      }
    }

    fiveCountryData = temp;

    return fiveCountryData;



}

export {getNeighbourData};
