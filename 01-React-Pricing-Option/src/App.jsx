import { Suspense } from "react";
import "./App.css";
import NavData from "./component/NavData";
import PricingOption from "./component/pricingOption/PricingOption";
import ResultData from "./component/resultData/ResultData";


const pricingPromice = fetch('pricingData.json') .then(res => res.json())

function App() {
  return (
    <div>
      <NavData></NavData>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOption pricingPromice={pricingPromice}></PricingOption>
      </Suspense>

      <ResultData></ResultData>
    </div>
  );
}

export default App;
