import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Col, Container } from "react-bootstrap";
import { DateTimePicker } from "react-widgets";
import ComboBox from "react-widgets/lib/Combobox";
import { timeOptions, quantityPeople } from "../../utils";
import "./styles.scss";
import moment from "moment";
import "moment/locale/vi";
import momentLocalizer from "react-widgets-moment";

moment.locale("vi");
momentLocalizer();

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const regex = /^[a-zA-Z ]{2,30}$/;
const schema = Yup.object({
  fullName: Yup.string()
    .matches(regex, "*Name is not valid")
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  marDate: Yup.date().required(
    "*Please select a date or input date follow DD/MM/YYYY"
  ),
  branch: Yup.string().required("*Please select branch")
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
      if (parseInt(9 === hour) {
        if (parseInt(0 <= min) {
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

    return (
      <div className="ReservationForm">
        <Container>
          <div className="header t-center">
            <span className="tit2 t-center">Reservation</span>
            <h3 className="tit3 t-center m-b-35 m-t-2">Book Table</h3>
          </div>
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
              errors,
              setFieldValue
            }) => {
              console.log("values", values);
              console.log("errors", errors);
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Branch</Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Binh Thanh Branch"
                        name="branch"
                        id="binhThanhBranch"
                        onChange={() => setFieldValue("branch", "21NCT", true)}
                      />
                      <Form.Check
                        type="radio"
                        label="District 2 Branch"
                        name="branch"
                        id="district2Branch"
                        onChange={() => setFieldValue("branch", "210TN", true)}
                      />
                      {errors && errors.branch ? (
                        <div className="invalid-feedback errorMessage">
                          {errors.branch}
                        </div>
                      ) : null}
                    </Col>
                  </Form.Group>
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
                        containerClassName={
                          errors && errors.marDate ? "errorInput" : null
                        }
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
                        name="marDate"
                        onChange={value =>
                          setFieldValue(
                            "marDate",
                            value ? moment(value).format("DD/MM/YYYY") : "",
                            true
                          )
                        }
                      />
                      {errors && errors.marDate ? (
                        <div className="invalid-feedback errorMessage">
                          {errors.marDate}
                        </div>
                      ) : null}
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
              );
            }}
          </Formik>
        </Container>
      </div>
    );
  }
}

export default ReservationComponent;
