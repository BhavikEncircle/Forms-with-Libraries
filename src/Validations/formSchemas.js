import * as Yup from "yup";
export const stepOneSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3, "Name is too short"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
export const stepTwoSchema = Yup.object({
  address: Yup.string()
    .required("Address is required")
    .min(5, "Address is too short"),
  city: Yup.string().required("City is required").min(2, "City is too short"),
});
