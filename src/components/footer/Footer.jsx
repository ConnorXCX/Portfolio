import { CURRENT_YEAR, FULL_NAME } from "../../utils/data";

const Footer = () => (
  <div className="text-[0.8rem] text-center p-4 bg-footerGradient">
    &copy; {CURRENT_YEAR} - {FULL_NAME}
  </div>
);

export default Footer;
