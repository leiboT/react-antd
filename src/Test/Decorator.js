import React, { Component, PureComponent, memo } from "react";
import { DatePicker } from "antd";

const d1 = WrapComponent => () => <WrapComponent value={1} />;
const d2 = () => WrapComponent => () => <WrapComponent value={1} />;

@d1
class Date extends Component {
  componentDidMount() {}
  render() {
    return <DatePicker />;
  }
}

@d2()
class Time extends PureComponent {
  componentDidMount() {}
  render() {
    return <DatePicker.RangePicker />;
  }
}

export default memo(() => (
  <React.Fragment>
    <Date />
    <Time />
  </React.Fragment>
));
