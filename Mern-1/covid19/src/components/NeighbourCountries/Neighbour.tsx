import React, { useEffect, useMemo, useState } from "react";
import { getNeighbourData } from "../../Services/NeighbourService";

import { country } from "../../Services/NeighbourService";
function Neighbour() {
  const [neighbourData, setNeighbourData] = useState<country[] | undefined>();

  useEffect(() => {
    getNeighbourData().then((data) => {
      setNeighbourData(data);
    });
  }, []);

  return <>

  <table>
  <tr><th>Country</th><th>Cases</th><th>Deaths</th><th>Recovered</th></tr>
    {neighbourData?.map(i=><tr key="index"><td>{i.country}</td><td>{i.cases}</td>
    <td>{i.deaths}</td><td>{i.recovered}</td></tr>)}
</table>
  </>;
}

export default Neighbour;
