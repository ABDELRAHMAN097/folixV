import React, { useState } from 'react';
import { useTranslation } from '../providers/TranslationProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from '../components/general/Spinner';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = () => {
  const { translate } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, translate("validation.passwordMinLength"))
      .required(translate("validation.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], translate("validation.passwordsMustMatch"))
      .required(translate("validation.required"))
  });

  const initialValues = {
    password: '',
    confirmPassword: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Reset password submitted:', values);
    // Here you would typically make an API call to reset the password
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
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
            {translate("resetPassword.title")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {translate("resetPassword.subtitle")}
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
                  <p className="text-sm font-medium text-green-800">{translate("resetPassword.successMessage")}</p>
                </div>
              </div>
            </div>
            <div>
              <Link 
                to="/login"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out"
              >
                {translate("resetPassword.backToLogin")}
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
                  {/* New Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      {translate("resetPassword.password")}
                    </label>
                    <div className="relative">
                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-sm`}
                        placeholder={translate("resetPassword.passwordPlaceholder")}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <FiEye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
                  </div>

                  {/* Confirm Password Field */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      {translate("resetPassword.confirmPassword")}
                    </label>
                    <div className="relative">
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-sm`}
                        placeholder={translate("resetPassword.confirmPasswordPlaceholder")}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <FiEyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <FiEye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Spinner /> : translate("resetPassword.submit")}
                  </button>
                  
                  <Link 
                    to="/login"
                    className="text-center text-sm text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    {translate("resetPassword.backToLogin")}
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

export default ResetPassword;
