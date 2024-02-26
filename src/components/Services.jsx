import products from '../assets/3.png';
const Services = () => {
	return (
		<div className="border-b-2 border-b-red-800">
			<p className="uppercase text-justify">
				INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
				IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
				NATION.
			</p>
			<div className="mt-5 mb-2 md:w-10/12 mx-auto">
				<img src={products} alt="" />
			</div>
			<p className="text-center my-3">
				Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
				Solar Systems - Motors
			</p>
		</div>
	);
};

export default Services;
