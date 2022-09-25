import styles from "./ModalSpinner.module.scss";
import classNames from "classnames/bind";

import { Fragment } from "react";
import { Spin } from "antd";

const cx = classNames.bind(styles);
function ModalSpinner() {
  return (
    <Fragment>
      <div className={cx("wrapper")}>
        <span className={cx("modal-styles")}>
          <Spin />
        </span>
      </div>
    </Fragment>
  );
}

export default ModalSpinner;
