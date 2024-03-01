import { CURRENT_YEAR, FULL_NAME } from "../utils/data";

const Footer = () => (
  <div>
    {/* Commented out cool cascading styling effect for footer. */}
    {/* <div className="sticky" style={{ marginTop: -23 }}>
      <div className="bg-secondary" style={{ marginTop: 0, height: 23 }}></div>
      <div className="bg-secondary" style={{ marginTop: 1, height: 22 }}></div>
      <div className="bg-secondary" style={{ marginTop: 2, height: 21 }}></div>
      <div className="bg-secondary" style={{ marginTop: 3, height: 20 }}></div>
      <div className="bg-secondary" style={{ marginTop: 4, height: 19 }}></div>
      <div className="bg-secondary" style={{ marginTop: 5, height: 18 }}></div>
      <div className="bg-secondary" style={{ marginTop: 6, height: 17 }}></div>
      <div className="bg-secondary" style={{ marginTop: 7, height: 16 }}></div>
      <div className="bg-secondary" style={{ marginTop: 8, height: 15 }}></div>
      <div className="bg-secondary" style={{ marginTop: 9, height: 14 }}></div>
      <div className="bg-secondary" style={{ marginTop: 10, height: 13 }}></div>
      <div className="bg-secondary" style={{ marginTop: 11, height: 12 }}></div>
      <div className="bg-secondary" style={{ marginTop: 12, height: 11 }}></div>
      <div className="bg-secondary" style={{ marginTop: 13, height: 10 }}></div>
      <div className="bg-secondary" style={{ marginTop: 14, height: 9 }}></div>
      <div className="bg-secondary" style={{ marginTop: 15, height: 8 }}></div>
      <div className="bg-secondary" style={{ marginTop: 16, height: 7 }}></div>
      <div className="bg-secondary" style={{ marginTop: 17, height: 6 }}></div>
      <div className="bg-secondary" style={{ marginTop: 18, height: 5 }}></div>
      <div className="bg-secondary" style={{ marginTop: 19, height: 4 }}></div>
      <div className="bg-secondary" style={{ marginTop: 20, height: 3 }}></div>
      <div className="bg-secondary" style={{ marginTop: 21, height: 2 }}></div>
      <div className="bg-secondary" style={{ marginTop: 22, height: 1 }}></div>
      <div className="bg-secondary" style={{ marginTop: 23, height: 0 }}></div>
    </div> */}
    <div className="sticky text-[0.8rem] text-center pt-6 pb-4 bg-defaultLightBlurBackground">
      &copy; {CURRENT_YEAR} - {FULL_NAME}
    </div>
  </div>
);

export default Footer;
