import React, { Component } from "react";
import { DatePicker, message, Row, Col, Form, Input, Button } from "antd";

class Reservation extends Component {
  state = {
    date: null
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

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const colLayout = {
      xs: {
        span: 24
      },
      sm: {
        span: 12
      },
      lg: {
        span: 8
      } 
    };

    return (
      <Row type="flex" justify="center"style={{ minHeight: "100vh" }}>
        <Form {...formItemLayout}>
          <Row gutter={18}>
            <Col {...colLayout}>
              <Form.Item label="Name">
                {getFieldDecorator("name", {
                  rules: [
                    { required: true, message: "Please input your phone name!" }
                  ]
                })(<Input style={{ width: "100%" }} />)}
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item label="Phone">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(<Input style={{ width: "100%" }} />)}
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item label="Phone">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(<Input style={{ width: "100%" }} />)}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Row>
    );
  }
}
const ReservationComponent = Form.create({ name: "reservation_component" })(
  Reservation
);

export default ReservationComponent;
