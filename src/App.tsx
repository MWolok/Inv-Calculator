import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
interface FormValues {
	"current-savings": number;
	"yearly-contribution": number;
	"expected-return": number;
	duration: number;
}

interface YearlyData {
  year: number;
  yearlyInterest: number;
  savingsEndOfYear: number;
  yearlyContribution: number;
}

function App() {
const [result,setResult]= useState<YearlyData[]>();


  const calculateHandler = (userInput: FormValues) => {
    const yearlyData: YearlyData[] =[];

    let currentSavings: number = +userInput['current-savings'];
    const yearlyContribution: number = +userInput['yearly-contribution'];
    const expectedReturn: number = +userInput['expected-return'] / 100;
    const duration: number = +userInput['duration'];

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
  }

	return (
		<>
			<Header></Header>
			<Form onCalculate={calculateHandler}></Form>
			<Table></Table>
		</>
	);
}

export default App;
