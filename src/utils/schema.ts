import * as yup from "yup";
import { REGEX } from "./regex";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(REGEX.email, "Invalid email address"),
  first_name: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters")
    .max(50, "First name must be at most 50 characters"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters")
    .max(50, "Last name must be at most 50 characters"),
  middle_name: yup
    .string()
    .optional()
    .min(3, "Middle name must be at least 3 characters")
    .max(50, "Middle name must be at most 50 characters"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(REGEX.mobileNumber, "Invalid Indian phone number"),
});
