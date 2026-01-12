import React, { useState } from "react";
import { Formik, Form } from "formik";
import { stepOneSchema, stepTwoSchema } from "./Validations/formSchemas";
const App = () => {
  const [step, setStep] = useState(1);
  const resetForm = () => {
    setStep(1);
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          city: "",
        }}
        validationSchema={
          step === 1 ? stepOneSchema : step === 2 ? stepTwoSchema : null
        }
        onSubmit={(values, { resetForm }) => {
          if (step < 3) {
            setStep(step + 1);
          } else {
            console.log("Form Submitted", values);
            resetForm();
            setStep(4);
          }
        }}
      >
        {(formik) => (
          <Form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
              Multi Step Form
            </h1>
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-300 flex flex-col items-center mb-4">
                  Step 1: Personal Information
                </h2>
                <div className="space-y-4">
                  <label className=" font-semibold mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-md"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.name}
                    </div>
                  )}
                  <label className=" font-semibold mb-2 text-gray-300">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your e-mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-md "
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700  transition duration-200"
                >
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-300 flex flex-col items-center mb-4">
                  Step 2: Address Information
                </h2>
                <div className="space-y-4">
                  <label
                    htmlFor=""
                    className=" font-semibold mb-2 text-gray-300"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-md "
                  />
                  {formik.touched.address && formik.errors.address && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.address}
                    </div>
                  )}
                  <label
                    htmlFor=""
                    className=" font-semibold mb-2 text-gray-300"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-md "
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.city}
                    </div>
                  )}
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700  transition duration-200"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-300 flex flex-col items-center mb-4">
                  Step 3: Confirmation
                </h2>
                <p className="text-gray-300 mb-6">
                  Are you sure you want to submit the form?
                </p>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md "
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-300 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-300">
                  Your form has been successfully submitted.
                </p>
                <button
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md"
                  onClick={() => resetForm()}
                >
                  Home
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
