"use client";

import React from "react";
import DonutChart from "react-donut-chart";
import { Item } from "react-donut-chart/dist/DonutChart";

export interface DonoutChartWrapperI {
	data: Item[]; // Use the library's Item type
}

const DonutChartWrapper: React.FC<DonoutChartWrapperI> = ({ data }) => {
	return (
		<DonutChart
			data={data}
			colors={["#FF6347", "#87CEEB"]} // Example custom colors
			width={400} // Chart width
			height={400} // Chart height
			legend={true} // Display legend
		/>
	);
};

export default DonutChartWrapper;
