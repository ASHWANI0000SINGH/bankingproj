import React from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import TotalBalanceBox from "./components/TotalBalanceBox";

const page = () => {
	return (
		<>
			<SideBar />
			<Header name="Ashwani" />
			<TotalBalanceBox account={[]} toatlBankAccount={1} totalBalance={1234} />
		</>
	);
};

export default page;
