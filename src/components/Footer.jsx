import "./Footer.css";
import { CURRENT_YEAR, FULL_NAME } from "../utils/data";

const Footer = () => (
  <div className="footer">
    &copy; {CURRENT_YEAR} - {FULL_NAME}
  </div>
);

export default Footer;
