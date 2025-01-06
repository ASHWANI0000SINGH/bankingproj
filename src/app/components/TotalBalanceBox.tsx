import React from "react";
import DonoughtChartWrapper from "./DonoughtChartWrapper";
interface interfaceTotalBalanceI {
	account: [];
	toatlBankAccount: number;
	totalBalance: number;
}

const TotalBalanceBox = ({
	// account = [],
	toatlBankAccount,
	totalBalance,
}: interfaceTotalBalanceI) => {
	const data = [
		{
			label: "Give you up",
			value: 22,
		},
		{
			label: "Never Give up",
			value: 78,
		},
	];
	return (
		<>
			<div className="flex  justify-evenly text-center align-center m-2">
				<div>
					<DonoughtChartWrapper data={data} />
				</div>
				<div>
					<h2> Bank Acoount :{toatlBankAccount}</h2>
					<h3> Total Current Balance</h3>
					<h4 className="font-bold"> {totalBalance}</h4>
				</div>
			</div>
		</>
	);
};

export default TotalBalanceBox;
