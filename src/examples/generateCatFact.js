// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

import axios from "axios";
import { useState, useEffect } from "react";




const GenerateCatFactComponent = () => {
    const [catFact, setcatFact] = useState("");
    useEffect(() => {
      axios.get("https://catfact.ninja/fact").then((res) => {
        setcatFact(res.data.fact);
      });
    }, []);
  return (
    <div>
      <button>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
};

export { GenerateCatFactComponent };
