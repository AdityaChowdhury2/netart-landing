import award from '../assets/1.png';
import receivingAward from '../assets/2.png';
const Hero = () => {
	return (
		<section className="flex flex-col-reverse md:flex-row gap-10 my-10">
			<div className="md:w-4/12 s">
				<img src={award} alt="" />
			</div>
			<div className="md:w-8/12">
				<h1 className="font-bold">
					C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
					4th time.
				</h1>
				<ul className="list-disc ml-10 mt-4">
					<li>
						C.R.I.&apos;s energy efficient products are well recognized by
						various Government Institutions, as trustworthy products for various
						projects across the globe to save energy.
					</li>
					<li>
						C.R.I. is the highest contributor in the country for the projects of
						EESL (Energy Efficiency Services Limited) to replace the old
						inefficient pumps with 5 Star rated energy efficient smart pumps
						with IoT enabled control panel.
					</li>
				</ul>
				<div className="my-2">
					<img src={receivingAward} alt="" />
				</div>
				<p className="text-justify">
					Government of India has awarded the{' '}
					<strong>&ldquo;National Energy Conservation Award 2018&rdquo;</strong>
					. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
					the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
					Kumar Singh, Honorable Minister of State.
				</p>
			</div>
		</section>
	);
};

export default Hero;
