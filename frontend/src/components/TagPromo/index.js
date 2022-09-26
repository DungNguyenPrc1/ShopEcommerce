import styles from "./TagPromo.module.scss";
import classNames from "classnames/bind";
// import { sansale } from "../../asset";

const cx = classNames.bind(styles);
const TagPromo = ({ dataPromo }) => {
  return (
    <>
      {dataPromo?.map((data) => {
        return (
          <div className={cx("wrapper")} key={data.id}>
            <div className={cx("img")}>
              <img
                alt="1"
                src={data.image}
                // style={{ height: "70px", width: "65px" }}
              />
            </div>

            <span
              style={{
                lineHeight: "70px",
                fontSize: "22px",
                marginLeft: "10px",
                whiteSpace: "wrap",
              }}
            >
              {data.content}
            </span>
          </div>
        );
      })}
    </>
  );
};
export default TagPromo;
