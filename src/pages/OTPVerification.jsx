import React, { useState, useEffect } from 'react';
import { useTranslation } from '../providers/TranslationProvider';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from '../components/general/Spinner';
import { Link, useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const { translate } = useTranslation();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [digits, setDigits] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    let timer;
    if (resendTimer > 0 && !canResend) {
      timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
    } else if (resendTimer === 0 && !canResend) {
      setCanResend(true);
    }
    
    return () => clearTimeout(timer);
  }, [resendTimer, canResend]);

  const validationSchema = Yup.object({
    digit1: Yup.string().required(''),
    digit2: Yup.string().required(''),
    digit3: Yup.string().required(''),
    digit4: Yup.string().required(''),
    digit5: Yup.string().required(''),
    digit6: Yup.string().required(''),
  });

  const initialValues = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: '',
  };

  const handleDigitChange = (index, value, setFieldValue) => {
    // Only allow numbers
    if (!/^[0-9]*$/.test(value)) return;

    // Update the value in the form
    setFieldValue(`digit${index + 1}`, value);

    // Update the digits array for visual feedback
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    // Move to next input if value exists
    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 2}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Handle backspace - move to previous input
    if (event.key === 'Backspace' && index > 0 && !digits[index]) {
      const prevInput = document.getElementById(`digit-${index}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const otp = Object.values(values).join('');
    console.log('OTP submitted:', otp);
    
    // Simulate verification process
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
      
      // Navigate to reset password page after successful OTP verification
      setTimeout(() => {
        navigate('/reset-password');
      }, 1500);
    }, 1000);
  };

  const handleResendCode = () => {
    if (!canResend) return;
    
    console.log('Resending OTP code');
    setCanResend(false);
    setResendTimer(60);
    
    // API call to resend code would go here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-lg shadow-md py-12">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full flex items-center justify-center">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            {translate("otp.title")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {translate("otp.subtitle")}
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
                  <p className="text-sm font-medium text-green-800">{translate("otp.successMessage")}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-center text-gray-500">Redirecting to reset password...</p>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors, setFieldValue }) => (
              <Form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                    {translate("otp.codeLabel")}
                  </label>
                  
                  <div className="flex justify-center space-x-2 sm:space-x-4">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <div key={index} className="w-10 sm:w-12">
                        <input
                          id={`digit-${index + 1}`}
                          type="text"
                          autoFocus={index === 0}
                          maxLength={1}
                          value={digits[index]}
                          onChange={(e) => handleDigitChange(index, e.target.value, setFieldValue, e)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          className="w-full h-12 sm:h-14 text-center text-xl sm:text-2xl font-bold border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {Object.keys(errors).length > 0 && touched.digit1 && (
                    <div className="text-red-500 text-sm text-center mt-2">
                      {translate("validation.invalidOTP")}
                    </div>
                  )}
                </div>

                <div className="flex flex-col space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Spinner /> : translate("otp.submit")}
                  </button>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-2">
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={!canResend}
                      className={`text-sm ${canResend ? 'text-primary hover:text-primary-dark cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}
                    >
                      {canResend ? 
                        translate("otp.resendCode") : 
                        translate("otp.resendCodeTimer").replace('{seconds}', resendTimer)}
                    </button>
                    
                    <Link 
                      to="/login"
                      className="text-sm text-primary hover:text-primary-dark transition-colors duration-300"
                    >
                      {translate("otp.backToLogin")}
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
