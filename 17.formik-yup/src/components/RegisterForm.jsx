import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../shemas/RegisterFormShemas";

function RegisterForm() {
  const submit = (values, action) => {
    console.log(action);
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },

    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col space-y-1">
          <label>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please enter your email"
            onChange={handleChange}
            value={values.email}
            className="border-b focus:outline-none w-sm  sm:w-lg"
          />
          {errors.email && (
            <p className="text-sm text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label>Age</label>
          <input
            id="age"
            type="number"
            placeholder="Please enter your age"
            onChange={handleChange}
            value={values.age}
            className="border-b focus:outline-none w-sm  sm:w-lg"
          />
          {errors.age && (
            <p className="text-sm text-red-400 mt-1">{errors.age}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label>Passwort</label>
          <input
            id="password"
            type="password"
            placeholder="Please enter your password"
            onChange={handleChange}
            value={values.password}
            className="border-b focus:outline-none w-sm  sm:w-lg"
          />
          {errors.password && (
            <p className="text-sm text-red-400 mt-1">{errors.password}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label>Confirm Passwort</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Please enter your password again"
            onChange={handleChange}
            value={values.confirmPassword}
            className="border-b focus:outline-none w-sm  sm:w-lg"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-400 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="flex flex-row space-x-3">
          <input
            id="term"
            type="checkbox"
            onChange={handleChange}
            value={values.term}
          />
          <label>I agree to the terms. </label>
          {errors.term && (
            <p className="text-sm text-red-400 mt-1">{errors.term}</p>
          )}
        </div>
        <button
          type="submit"
          className="border-none px-4 py-2 bg-white w-full text-black rounded-md cursor-pointer hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
