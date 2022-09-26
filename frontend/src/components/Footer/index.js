import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={cx("wrapper")}>&copy; {year} All Right Reserved</div>;
};
export default Footer;
