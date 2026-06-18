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
.matches(
/[A-Z]/,
"Must contain at least one uppercase letter"
)
.matches(
/[a-z]/,
"Must contain at least one lowercase letter"
)
.matches(
/[0-9]/,
"Must contain at least one number"
)
.matches(
/[!@#$%^&*(),.?":{}|<>]/,
"Must contain at least one special character"
)
.required("Password is required")

});

function Signup() {

const navigate = useNavigate();

const handleSignup = (values) => {

const users =
  JSON.parse(
    localStorage.getItem("users")
  ) || [];

const existingUser =
  users.find(
    (user) =>
      user.mail === values.mail
  );

if (existingUser) {

  alert(
    "User already exists with this email"
  );

  return;
}

const newUser = {

  id: Date.now(),

  name: values.name,

  mail: values.mail,

  pass: values.pass

};

users.push(newUser);

localStorage.setItem(
  "users",
  JSON.stringify(users)
);

alert("Signup Successful");

navigate("/Login");


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

      validationSchema={
        SignupSchema
      }

      onSubmit={handleSignup}

    >

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
          buttonText="SIGN UP"
          type="submit"
        />

      </Form>

    </Formik>

  </div>

</div>


);
}

export default Signup;
