import styles from "./Login.module.scss";
import classNames from "classnames/bind";

import { Form, Input, Checkbox, Button, Row, Col, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import ModalSpinner from "../../components/ModalSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login Successfully");
        // const user = result.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
        // Handle Errors here.
      });
  };
  const onFinish = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;

        setLoading(false);
        toast.success("Login Successful..");
        setTimeout(() => navigate("/"), 1000);
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <Row className={cx("wrapper")}>
      <ToastContainer />
      <Col span={24} style={{ height: "20px" }}>
        <Typography.Title
          style={{ display: "flex", justifyContent: "center", color: "#fff" }}
        >
          {loading && <ModalSpinner />}
          Login
        </Typography.Title>
      </Col>
      <Col span={8} className={cx("form-login")}>
        <Form
          className={cx("main")}
          onFinish={onFinish}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            className={cx("email")}
            label="Email"
            name="email"
            wrapperCol={{
              offset: 0,
              span: 20,
            }}
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            wrapperCol={{
              offset: 0,
              span: 20,
            }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "12px" }}
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <a
              style={{
                color: "#000",
                display: "flex",
                justifyContent: "flex-end",
              }}
              href="#home"
            >
              Forgot password ?
            </a>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button
              className={cx("login-button")}
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>

            <Link
              style={{ color: "#000", fontWeight: "600", marginLeft: "4px" }}
              to="/register"
            >
              Register Now!
            </Link>
          </Form.Item>
          <Typography.Text
            style={{ color: "#000", display: "flex", justifyContent: "center" }}
          >
            -- or --
          </Typography.Text>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button
              className={cx("login-button-google")}
              type="primary"
              onClick={signInWithGoogle}
            >
              Login With Google
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};
export default Login;
