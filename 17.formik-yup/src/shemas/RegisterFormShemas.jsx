import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  age: yup
    .number()
    .positive("Please enter a positive value")
    .integer("Please enter an integer")
    .required("Age is required"),

  password: yup.string().required("Password is required"),

  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password do not match"),

  term: yup.boolean().oneOf([true], "Please accept the terms"),
});

// OTHER VALIDATIONS

// String Validations
/*
    username: yup.string()
       .required("Username is required")
       .min(3, "Minimum 3 characters")
       .max(20, "Maximum 20 characters")
       .length(10, "Must be exactly 10 characters")
       .matches(/^[a-zA-Z]+$/, "Only letters are allowed")
       .email("Must be a valid email")  // special case for email
       .url("Must be a valid URL")
       .uuid("Must be a valid UUID")
       .trim("No spaces allowed")
       .lowercase("Must be lowercase")
       .uppercase("Must be uppercase"),
*/

// Number Validations
/*
    age: yup.number()
       .required("Age is required")
       .min(18, "Must be at least 18")
       .max(65, "Must be at most 65")
       .lessThan(100, "Must be less than 100")
       .moreThan(0, "Must be greater than 0")
       .positive("Must be positive")
       .negative("Must be negative")
       .integer("Must be an integer"),
*/

// Boolean Validations
/*
    terms: yup.boolean()
       .oneOf([true], "You must accept the terms"),
*/

// Date Validations
/*
    birthday: yup.date()
       .required("Birthday is required")
       .min(new Date("2000-01-01"), "Date must be after Jan 1, 2000")
       .max(new Date(), "Date cannot be in the future"),
*/

// Array Validations
/*
    tags: yup.array()
      .of(yup.string().required("Tag cannot be empty"))
      .min(1, "At least one tag is required")
      .max(5, "Maximum 5 tags are allowed"),
*/

//  Object validations
/*
    address: yup.object().shape({
      street: yup.string().required("Street is required"),
      city: yup.string().required("City is required"),
      zipCode: yup.string().matches(/^[0-9]{5}$/, "Must be a valid ZIP code"),
  }),
*/

//  Mixed / General validations
/*
    customField: yup.mixed()
      .nullable() // allows null
      .optional() // allows undefined
      .default("default value")
      .test("not-forbidden", "Value cannot be 'forbidden'", (value) => {
        return value !== "forbidden";
    }),
*/
