import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./index.less";
import styles from "./index.module.less";

const Test = ({ theme }) => (
  <React.Fragment>
    <p className="test">normal</p>
    <p className={styles.test}>css module</p>
    <Button type={theme}>test</Button>
  </React.Fragment>
);

Test.propTypes = {
  theme: PropTypes.string
};

export default memo(Test);
