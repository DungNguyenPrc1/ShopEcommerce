import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Row, Col, Typography, Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import ModalSpinner from "../../components/ModalSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleData = ({ email, password }) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setLoading(false);
        // console.log("firebase", user);
        toast.success("Registration Successful..");
        setTimeout(() => navigate("/"), 1000);

        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
        // ..
      });
    console.log("aaa", createUserWithEmailAndPassword);
  };

  const handleDataFalse = (value) => {};
  return (
    <>
      <ToastContainer />
      <Row className={cx("wrapper")}>
        <Col span={6}>
          <Typography.Paragraph
            style={{
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {loading && <ModalSpinner />}
            Register
          </Typography.Paragraph>
        </Col>
        <Col span={24} className={cx("register1")}>
          <Col span={6} className={cx("fillForm")}>
            <Form onFinish={handleData} onFinishFailed={handleDataFalse}>
              <Typography.Text strong>Email</Typography.Text>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Typography.Text strong>Password</Typography.Text>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Typography.Text strong>Confirm Password</Typography.Text>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Register
                </Button>
                Already An Account?
                <Link
                  to="/login"
                  style={{
                    color: "#000",
                    marginLeft: "4px",
                    fontWeight: "500",
                  }}
                >
                  Log in
                </Link>
              </Form.Item>
            </Form>
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default Register;
