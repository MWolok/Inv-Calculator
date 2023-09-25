import { ChangeEvent, FormEvent, useState } from "react";
import { FormValues } from "../model/FormValues";



const initionalValues: FormValues = {
	"current-savings": 1000,
	"yearly-contribution": 120,
	"expected-return": 5,
	duration: 10,
};
interface MyComponentProps {
  onCalculate: (userInput: FormValues) => void;
}

const Form = (props:MyComponentProps)=>{
	const [values, setValues] = useState<FormValues>(initionalValues);

	const submintHandler = (event: FormEvent<HTMLFormElement>) => {

		event.preventDefault();

     props.onCalculate(values)
	};
	const resetHendler = () => {
		setValues(initionalValues);
	};
	const changeHandler = (
		ipnutname: string,
		value: React.ChangeEvent<HTMLInputElement>
	) => {
		setValues((prevValues) => {
			return {
				...prevValues,
				[ipnutname]: +value.target.value,
			};
		});
	};

	return (
		<form onSubmit={submintHandler} className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						onChange={(e) => changeHandler("current-savings", e)}
						type="number"
						id="current-savings"
                        value={values['current-savings']}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={(e) => changeHandler("yearly-contribution", e)}
						type="number"
						id="yearly-contribution"
                        value={values['yearly-contribution']}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(e) => changeHandler("expected-return", e)}
						type="number"
						id="expected-return"
                        value={values['expected-return']}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						onChange={(e) => changeHandler("duration", e)}
						type="number"
						id="duration"
                        value={values['duration']}
					/>
				</p>
			</div>
			<p className="actions">
				<button onClick={resetHendler} type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
};
export default Form;
