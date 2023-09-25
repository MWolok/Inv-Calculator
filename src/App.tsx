import React, { useState } from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { FormValues } from "./components/model/FormValues";
import { YearlyData } from "./components/model/YearlyData";



function App() {
const [result,setResult]= useState<YearlyData[]|null>(null);
const [currentSavings, setCurrentSavings] = useState<number>(0);

  const calculateHandler = (userInput: FormValues) => {
    setCurrentSavings(userInput['current-savings']);
    const yearlyData: YearlyData[] =[];

    let currentSavings: number = userInput['current-savings'];
    const yearlyContribution: number = userInput['yearly-contribution'];
    const expectedReturn: number = userInput['expected-return'] / 100;
    const duration: number = userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest: number = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  
  setResult(yearlyData);
  console.log(result)
  }

	return (
		<>
			<Header></Header>
			<Form onCalculate={calculateHandler}></Form>
      {result && 	<Table data={result} current={currentSavings}></Table>}
		
		</>
	);
}

export default App;
