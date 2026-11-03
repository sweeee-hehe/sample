import "./signup.css";
import { useNavigate } from "react-router";
import Button from "../components/Button.jsx";
import authService from "../services/authService.js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  mail: Yup.string()
    .email("Invalid Email")
    .required("Email is required"),

  pass: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character")
    .required("Password is required")
});

function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      // Call the real backend API — no more localStorage-only signup
      const response = await authService.signup(
        values.mail,
        values.name,
        values.pass
      );

      if (response.success) {
        alert("Signup Successful! Please log in.");
        navigate("/Login");
      } else {
        alert(response.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Server error during signup. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1>User Signup</h1>

        <Formik
          initialValues={{
            name: "",
            mail: "",
            pass: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="email"
                name="mail"
                placeholder="Email"
              />
              <ErrorMessage
                name="mail"
                component="div"
                className="error"
              />

              <Field
                type="text"
                name="name"
                placeholder="Username"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error"
              />

              <Field
                type="password"
                name="pass"
                placeholder="Password"
              />
              <ErrorMessage
                name="pass"
                component="div"
                className="error"
              />

              <Button
                buttonText={isSubmitting ? "SIGNING UP..." : "SIGN UP"}
                type="submit"
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
