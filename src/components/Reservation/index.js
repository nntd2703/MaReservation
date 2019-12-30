import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Col, Container } from "react-bootstrap";
import { DateTimePicker } from "react-widgets";
import ComboBox from "react-widgets/lib/Combobox";
import { timeOptions, quantityPeople } from "../../utils";

const schema = Yup.object({
  fullName: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  username: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  terms: Yup.bool().required()
});

class ReservationComponent extends Component {
  constructor() {
    super();
    this.state = {
      openDatePicker: false
    };
  }

  getArrayTime() {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 45);
    const newArray = [];
    timeOptions.forEach(item => {
      const hour = parseInt(item.split(":")[0]);
      const min = parseInt(item.split(":")[1]);
      if (parseInt(currentTime.getHours()) === hour) {
        if (parseInt(currentTime.getMinutes()) <= min) {
          newArray.push(item);
        }
      } else if (parseInt(currentTime.getHours()) < hour) {
        newArray.push(item);
      }
    });
    return newArray;
  }

  render() {
    const { openDatePicker } = this.state;

    let colors = ["orange", "red", "blue", "purple"];

    const timeDate = this.getArrayTime();

    console.log(quantityPeople(12))

    return (
      <Container>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            fullName: "",
            phoneNumber: ""
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <Form.Label>People</Form.Label>
                  <ComboBox
                    data={quantityPeople(12)}
                    defaultValue={quantityPeople(12)[0]}
                  ></ComboBox>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Date</Form.Label>
                  <DateTimePicker
                    defaultValue={new Date()}
                    min={new Date()}
                    time={false}
                    onBlur={() => {}}
                    open={openDatePicker ? "date" : false}
                    onFocus={() => {
                      this.setState({ openDatePicker: true });
                    }}
                    onToggle={() => {
                      this.setState({ openDatePicker: !openDatePicker });
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik04">
                  <Form.Label>Time</Form.Label>
                  <ComboBox
                    data={timeDate}
                    defaultValue={timeDate[0]}
                  ></ComboBox>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik05">
                  <Form.Label>Private room</Form.Label>
                  <ComboBox disabled data={colors}></ComboBox>
                </Form.Group>
              </Form.Row>
              <Form.Group>
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  id="validationFormik0"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default ReservationComponent;
