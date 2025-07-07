import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import { useTranslation } from '../providers/TranslationProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from '../components/general/Spinner';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const { translate } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(translate("validation.invalidEmail"))
      .required(translate("validation.required")),
    password: Yup.string()
      .required(translate("validation.required"))
      .min(6, translate("validation.passwordMinLength"))
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login submitted:', values);
    setTimeout(() => setSubmitting(false), 500); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-lg shadow-md py-12 ">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full flex items-center justify-center ">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>

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
                    {translate("login.email")}
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`appearance-none relative block w-full px-3 py-3 border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-sm`}
                    placeholder={translate("login.emailPlaceholder")}
                  />
                  <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    {translate("login.password")}
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className={`appearance-none relative block w-full px-3 py-3 pr-10 border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-sm`}
                      placeholder={translate("login.passwordPlaceholder")}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 left-3 pr-3 flex items-center cursor-pointer"
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    {translate("login.rememberMe")}
                  </label>
                </div>

                <div className="text-sm">
                  <Link to="/forgot-password" className="font-medium text-primary hover:text-primary">
                    {translate("login.forgotPassword")}
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Spinner /> : translate("login.login")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;