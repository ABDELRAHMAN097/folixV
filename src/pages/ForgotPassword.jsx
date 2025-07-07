import React, { useState } from 'react';
import { useTranslation } from '../providers/TranslationProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from '../components/general/Spinner';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const { translate } = useTranslation();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(translate("validation.invalidEmail"))
      .required(translate("validation.required")),
  });

  const initialValues = {
    email: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Password reset requested for:', values.email);
    // Here you would typically make an API call to request password reset
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
      
      // After showing success message, navigate to OTP verification
      setTimeout(() => {
        navigate('/otp-verification');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-lg shadow-md py-12">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full flex items-center justify-center">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            {translate("forgotPassword.title")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {translate("forgotPassword.subtitle")}
          </p>
        </div>

        {isSuccess ? (
          <div className="mt-8 space-y-6">
            <div className="bg-green-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">{translate("forgotPassword.successMessage")}</p>
                </div>
              </div>
            </div>
            <div>
              <Link 
                to="/login"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
              >
                {translate("forgotPassword.backToLogin")}
              </Link>
            </div>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {translate("forgotPassword.email")}
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`appearance-none relative block w-full px-3 py-3 border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-sm`}
                      placeholder={translate("forgotPassword.emailPlaceholder")}
                    />
                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Spinner /> : translate("forgotPassword.submit")}
                  </button>
                  
                  <Link 
                    to="/login"
                    className="text-center text-sm text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    {translate("forgotPassword.backToLogin")}
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
