import { FaFacebook, FaSquarePhone, FaGlobe } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer className="font-medium bg-red-600 mt-4 mb-2 pt-10 pb-20 flex text-white justify-around">
			<div className="flex items-end gap-1">
				<FaSquarePhone size={30} className="mb-1" />
				Toll free <strong>1800 200 1234</strong>
			</div>
			<div className="flex items-end gap-1">
				<FaFacebook size={30} className="mb-1" />
				www.facebook.com/cripumps
			</div>
			<div className="flex items-end gap-1">
				<FaGlobe size={30} className="mb-1" />
				www.crigroups.com
			</div>
		</footer>
	);
};

export default Footer;
