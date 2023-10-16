import React, { useState } from "react";

const UserInput = (props) => {
  //   const [data, setData] = useState([]);
  const [inputCurrentSavings, setInputCurrentSavings] = useState(0);
  const [inputtedDuration, setInputtedDuration] = useState(0);
  const [inputtedYearlyContribution, setInputtedYearlyContribution] =
    useState(0);
  const [inputtedExpectedReturn, setInputtedExpectedReturn] = useState(0);

  const enteredCurrentSavings = (event) => {
    setInputCurrentSavings(event.target.value);
  };
  const inputDuration = (event) => {
    setInputtedDuration(event.target.value);
  };
  const inputYearlyContribution = (event) => {
    setInputtedYearlyContribution(event.target.value);
  };
  const inputExpectedReturn = (event) => {
    setInputtedExpectedReturn(event.target.value);
  };

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    userInput.preventDefault();
    const yearlyData = []; // per-year results

    let currentSavings = +inputCurrentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +inputtedYearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +inputtedExpectedReturn / 100;
    const duration = +inputtedDuration;
    // console.log(currentSavings);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // console.log(yearlyData);
    props.data(yearlyData);

    // do something with yearlyData ...
  };
  return (
    <div>
      <form onSubmit={calculateHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={enteredCurrentSavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={inputYearlyContribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={inputExpectedReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={inputDuration} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
