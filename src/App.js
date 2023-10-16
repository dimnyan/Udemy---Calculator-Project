import { useState } from "react";
import Headers from "./components/Headers/Headers";
import TableInvestment from "./components/TableInvestment/TableInvestment";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [yearlyDatas, setYearlyDatas] = useState([]);

  const yearlyData = (value) => {
    setYearlyDatas(value);
  };
  return (
    <div>
      <Headers />

      <UserInput data={yearlyData} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <TableInvestment data={yearlyDatas} />
    </div>
  );
}

export default App;
