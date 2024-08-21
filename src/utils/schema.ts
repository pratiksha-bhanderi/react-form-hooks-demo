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

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(REGEX.email, "Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(REGEX.password, "Invalid Password"),
});

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(REGEX.email, "Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(REGEX.password, "Invalid Password"),
});
export interface ProductItem {
  title: string;
  description: string;
  category: string;
  price: string;
  // rating: string;
  stock: string;
  sku: string;
  brand: string;
  availabilityStatus: string;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  thumbnail: string;
}
export interface ProductList {
  product: ProductItem[];
}

export const productSchema = yup.object().shape({
  product: yup
    .array()
    .of(
      yup.object().shape({
        title: yup
          .string()
          .required("Title is required")
          .min(3, "Title must be at least 3 characters")
          .max(50, "Title must be at most 50 characters"),
        description: yup
          .string()
          .required("Description is required")
          .min(3, "Description must be at least 3 characters")
          .max(50, "Description must be at most 50 characters"),
        category: yup.string().required("Category is required"),
        price: yup.string().required("Price is required"),
        // rating: yup.string().required("Rating is required"),
        stock: yup.string().required("Stock is required"),
        sku: yup.string().required("Sku is required"),
        brand: yup.string().required("Brand is required"),
        availabilityStatus: yup
          .string()
          .required("Availability Status is required"),
        shippingInformation: yup
          .string()
          .required("Shipping Information is required"),
        returnPolicy: yup.string().required("Return Policy is required"),
        warrantyInformation: yup
          .string()
          .required("Warranty Information is required"),
        thumbnail: yup.string().required("Thumbnail is required"),
      })
    )
    .required(),
});
