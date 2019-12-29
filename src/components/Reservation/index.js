import React, { Component } from "react";
import { DatePicker, message, Row, Col, Form } from "antd";

class Reservation extends Component {
  state = {
    date: null
  };

  handleChange = date => {
    message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
    this.setState({ date });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <Form {...formItemLayout}>
        <Col className="gutter-row" span={12}>
          <Form.Item label="DatePicker">
            {getFieldDecorator("date-picker", config)(<DatePicker />)}
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item label="DatePicker[showTime]">
            {getFieldDecorator(
              "date-time-picker",
              config
            )(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
          </Form.Item>
        </Col>
      </Form>
    );
  }
}
const ReservationComponent = Form.create({ name: "reservation_component" })(
  Reservation
);

export default ReservationComponent;
