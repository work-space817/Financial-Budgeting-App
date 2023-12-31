import { ChangeEvent, useState } from "react";
import { IRegisterError, ISignUp } from "./types";
import { useFormik } from "formik";
import * as yup from "yup";
import http from "../../../api/http";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../common/input/Input";
import setAuthToken from "../../../api/setAuthToken";
import { IUser } from "../login/types";
import { useDispatch } from "react-redux";
import { AuthUserActionType } from "../../../store/reducers/types";

const RegisterPage = () => {
  const init: ISignUp = {
    email: "",
    firstName: "",
    password: "",
    confirmPassword: "",
    currentBalance: 0,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<IRegisterError>();

  const onFormikSubmit = async (values: ISignUp) => {
    try {
      const result = await http.post("api/account/register", values);
      console.log("Result server good", result);
      const token = result.data.token as string;
      setAuthToken(token);
      const user = jwt_decode<IUser>(token);
      dispatch({ type: AuthUserActionType.LOGIN_USER, payload: user });
      navigate("/");
    } catch (err: any) {
      const error = err.response.data.errors as IRegisterError;
      if (error.email) {
        setFieldError("email", error.email[0]);
        return;
      }
      setError(error);
      console.log("Bad request", err);
    }
  };

  const registerSchema = yup.object({
    email: yup
      .string()
      .required("Вкажіть пошту")
      .email("Введіть коректно пошту"),
    password: yup
      .string()
      .min(5, "Пароль повинен містити мініму 5 символів")
      .matches(/[0-9a-zA-Z]/, "Пароль може містить латинські символи і цифри")
      .required("Поле не повинне бути пустим"),
    confirmPassword: yup
      .string()
      .min(5, "Пароль повинен містити мініму 5 символів")
      .oneOf([yup.ref("password")], () => "Паролі повинні співпадати")
      .required("Поле не повинне бути пустим"),
    firstName: yup.string().required("Вкажіть ім'я"),
    currentBalance: yup.number().required("Поле не повинне бути пустим"),
  });

  const formik = useFormik({
    initialValues: init,
    onSubmit: onFormikSubmit,
    validationSchema: registerSchema,
  });

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldError,
    setValues,
  } = formik;

  return (
    <>
      <h1 className="text-center">Реєстрація на сайт</h1>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="Email"
          field="email"
          value={values.email}
          onChange={handleChange}
          // errors={error?.email}
          // error={errors.email}
        />

        <div className="row">
          <div className="col-md-6">
            <InputComponent
              label="Password"
              type="password"
              field="password"
              value={values.password}
              onChange={handleChange}
              // errors={error?.password}
              // error={errors.password}
              touched={touched.password}
            />
          </div>
          <div className="col-md-6">
            <InputComponent
              label="Confirm password"
              type="password"
              field="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              // errors={error?.confirmPassword}
              // error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          </div>
          <div className="col-md-6">
            <InputComponent
              label="Name"
              field="firstName"
              value={values.firstName}
              onChange={handleChange}
              // error={errors.firstName}
              touched={touched.firstName}
            />
          </div>
          <div className="col-md-6">
            <InputComponent
              label="Current Balance"
              type="number"
              field="currentBalance"
              value={values.currentBalance}
              onChange={handleChange}
              // error={errors.currentBalance}
              touched={touched.currentBalance}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Реєстрація
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
function jwt_decode<T>(token: string) {
  throw new Error("Function not implemented.");
}
