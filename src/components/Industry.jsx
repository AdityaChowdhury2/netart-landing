const industryData = [
	'CHEMICALS & PROCESS',
	'POWER',
	'WATER & WASTE WATER',
	'OILS & GAS',
	'PHARMA',
	'SUGARS & DISTILLERIES',
	'PAPER & PULP',
	'MARINE & DEFENCE',
	'METAL & MINING',
	'FOOD & BEVERAGE',
	'PETROCHEMICAL & REFINERIES',
	'SOLAR',
	'BUILDING',
	'HVAC',
	'FIRE FIGHTING',
	'AGRICULTURE & RESIDENTIAL',
];
const Industry = () => {
	return (
		<div>
			<h5 className="text-center uppercase my-4 font-bold">
				C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
			</h5>
			<ul className="flex flex-wrap justify-center space-x-1">
				{industryData.map((data, index) => {
					return (
						<li
							key={index}
							className="last:border-0 border-r-2 font-medium border-red-800 pr-1"
						>
							{data}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Industry;
