import { YearlyData } from "../model/YearlyData";

interface TableProps {
	data: YearlyData[];
	current: number;
}

const formater = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "PLN",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

const Table: React.FC<TableProps> = ({ data, current }) => {
	return (
		<table className="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{data.map((yeardata) => (
					<tr key={yeardata.year}>
						<td>{yeardata.year}</td>
						<td>{formater.format(yeardata.savingsEndOfYear)}</td>
						<td>{formater.format(yeardata.yearlyInterest)}</td>
						<td>
							{formater.format(
								yeardata.savingsEndOfYear -
									current -
									yeardata.yearlyContribution * yeardata.year
							)}
						</td>
						<td>
							{formater.format(
								current + yeardata.yearlyContribution * yeardata.year
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Table;
