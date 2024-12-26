import React, { useEffect, useState } from 'react';
import {
  FaCreditCard,
  FaMoneyBill,
  FaUniversity,
  FaMobile,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getBaseURL } from "../../constants";
import Swal from "sweetalert2";
import { logo } from "../../assets/images";
import axios from "axios";
import ThankYou from "../../components/ThankYou";
import { toast } from 'react-toastify';

const Book = () => {
  const [checked, setChecked] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const Booking  = async () => {
    
    try {
      const booking = await axios.post(
        `${getBaseURL()}/api/Book/create`,
        { ...formData, paymentMethod }
      );
  
      handleBooking(booking);
    } catch (error) {
      console.error(error)
      handleError(error);
    } finally {
      setIsBooking(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (checked) {
      const { name, email, phone, location, date, time} = formData;
      setFormErrors({
        name: !name ? "Enter your name" : "",
        email: !email ? "Enter your email" : "",
        phone: !phone ? "Enter your phone number" : "",
        location: !location ? "Enter your location" : "",
        date: !date ? "Enter date" : "",
        time: !time ? "Enter the time" : "",
      });

      // Ensure required fields are valid
      if (
        name &&
        email &&
        EmailValidation(email) &&
        phone &&
        location &&
        date &&
        time
      ) {
        setSuccess(`Hello ${name}, Thank you for your patronage.`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          date: "",
          time: "",
        });
      } else {
        return; // Stop here if validation fails
      }
    }

    try {
      setIsBooking(true);
      let paymentResult = { success: false };

      // Process the payment based on selected method
      switch (paymentMethod) {
        case "mpesa":
          paymentResult = await processMpesa();
          break;
        case "paypal":
          paymentResult = await processPaypal();
          break;
        case "cash":
          // No external payment needed for cash
          // paymentResult.success = true;
          break;
        default:
          throw new Error("Invalid payment method selected");
      }

      // Proceed to create order only if payment succeeded
      if (paymentResult.success) {
        await Booking();
        // Set loading to true before redirecting
        setLoading(true);
        
        // Optionally, you can add a timeout to simulate loading
        setTimeout(() => {
          setLoading(false); // Set loading to false after some time
        }, 5000); // Adjust the time as needed
        setIsBookingComplete(true); // Mark checkout as complete
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      console.error("Payment or order creation error:", error);
      setErrors((prev) => ({ ...prev, payment: error.message }));
      Swal.fire({ icon: "error", title: "Payment Error", text: error.message });
    } finally {
      setIsBooking(false);
    }
  };

  const handleError = (error) => {
    console.error("Payment or booking error:", error);
    const errorMessage = error.message || "An unexpected error occurred";
    setErrors({ ...errors, payment: errorMessage });
    Swal.fire({ icon: "error", title: "Payment Error", text: errorMessage });
  };

  const handlePaymentMethod = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
    setErrors((prev) => ({
      ...prev,
      payment: value ? "" : "Please select a payment method",
    }));
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const stkPushQuery = async (checkoutRequestID) => {
    let attempts = 0;
    const maxAttempts = 5; // Limit the number of retry attempts
    const delay = 2000; // Delay between retries in ms

    const checkStatus = async () => {
      if (attempts >= maxAttempts) {
        setErrors((prev) => ({
          ...prev,
          payment: "Payment confirmation timeout. Please try again.",
        }));
        setLoading(false);
        return { success: false };
      }

      attempts += 1;

      try {
        const response = await axios.post(`${getBaseURL()}/stkpushquery`, {
          CheckoutRequestID: checkoutRequestID,
        });

        if (response.data.ResultCode === "0") {
          // Successful payment
          Swal.fire(
            "SUCCESS!",
            "We received your booking request. We'll be in touch shortly!",
            "success"
          );
          setLoading(false);
          // return { success: true };
        } else if (response.data.ResultCode === "1") {
          // Payment pending, retry after delay
          setTimeout(checkStatus, delay);
        } else {
          // Payment failed
          setErrors((prev) => ({
            ...prev,
            payment: response.data.ResultDesc || "An error occurred",
          }));
          setLoading(false);
          return { success: false };
        }
      } catch (err) {
        console.error("Error querying payment status:", err.message);
        setErrors((prev) => ({
          ...prev,
          payment: "An error occurred while processing your request.",
        }));
        setLoading(false);
        return { success: false };
      }
    };

    return checkStatus(); // Start checking the payment status
  };

  const processMpesa = async () => {
    const { phone } = formData;
    // Implement actual M-Pesa payment logic here
    if (!phone) {
      setErrors((prev) => ({ ...prev, payment: "Please fill all fields" }));
      return { success: false };
    }
    const validPhonePattern = /^(\+254|254|0)?[71][0-9]{8}$/;
    if (!validPhonePattern.test(phone)) {
      setErrors((prev) => ({
        ...prev,
        payment: "Enter a valid Kenyan phone number",
      }));
      return { success: false };
    }

    const amount = totalAmt + shippingCharge;
    setErrors((prev) => ({ ...prev, payment: "" })); // Clear previous errors
    setLoading(true); // Show loading state

    try {
      // Initiate M-Pesa payment request
      const response = await axios.post(`${getBaseURL()}/stk`, {
        phone,
        amount,
      });

      if (response.data && response.data.CheckoutRequestID) {
        // If payment initiation was successful, query the payment status
        return await stkPushQuery(response.data.CheckoutRequestID);
      } else {
        setErrors((prev) => ({
          ...prev,
          payment: "Failed to initiate payment. Please try again.",
        }));
        return { success: false };
      }
    } catch (err) {
      console.error("Error initiating payment:", err.message);
      setErrors((prev) => ({
        ...prev,
        payment: "Something went wrong, please try again later.",
      }));
      return { success: false };
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const processPaypal = async () => {
    // Implement actual bank payment logic here
    // return { success: true }; // Placeholder
  };

  if (isBookingComplete) {
    Swal.fire({ icon: "success", title: "Payment Success", text: success });
    return <ThankYou orderNo="1" />;
  }

  return (
    <div className="py-7 bg-light">
      <div className="container h-screen flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="lg:flex flex-col justify-center bg-primeColor text-white w-1/2 px-10">
          <div className="text-center justify-center">
            <img src={logo} alt="Logo" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
          </div>
        </div>
      
        {/* Booking Form */}
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-indigo-600">Book Your Slot</h2>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Fill in the details to complete your booking.
            </p>
            <form className="space-y-6 mt-6" onSubmit={handleBooking} noValidate>
              <div className='row justify-content-center gx-3'>
                {/* Name */}
                <div className='col'>
                  <label htmlFor="name" className="visually-hidden">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    placeholder="Full Name"
                    required
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
                  )}
                </div>
          
                {/* Email */}
                <div className='col'>
                  <label htmlFor="email" className="visually-hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    placeholder="Email"
                    required
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                  )}
                </div>
          
                {/* Phone */}
                <div className='col'>
                  <label htmlFor="phone" className="visually-hidden">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    placeholder="Phone Number"
                    required
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                  )}
                </div>
          
                {/* Location */}
                <div className='col'>
                  <label htmlFor="location" className="visually-hidden">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    placeholder="Location"
                    required
                  />
                  {formErrors.location && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.location}</p>
                  )}
                </div>
          
                {/* Date */}
                <div className='col'>
                  <label htmlFor="date" className="visually-hidden">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    required
                  />
                  {formErrors.date && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.date}</p>
                  )}
                </div>
          
                {/* Time */}
                <div className='col'>
                  <label htmlFor="time" className="visually-hidden">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    required
                  />
                  {formErrors.time && (
                    <p className="text-xs text-red-500 mt-1">{formErrors.time}</p>
                  )}
                </div>

                {/* Payment */}
                <div className="col">
                  {[
                    {
                      value: "mpesa",
                      icon: FaMobile,
                      label: "M-Pesa",
                      color: "text-green-500",
                    },
                    {
                      value: "cash",
                      icon: FaMoneyBill,
                      label: "Cash",
                      color: "text-orange-500",
                    },
                  ].map((method) => (
                    <div
                      key={method.value}
                      className="col"
                    >
                      <label className="visually-hidden"></label>
                
                      <input
                        type="radio"
                        id="time"
                        name="payment"
                        value={method.value}
                        className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        checked={paymentMethod === method.value}
                        onChange={handlePaymentMethod}
                      />
                      <span className="items-center">
                        <method.icon className={`${method.color} `} />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {method.label}
                        </span>
                      </span>
                    </div>
                  ))}
                  
                  {errors.payment && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.payment}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-indigo-500 underline">Terms</Link> and{" "}
                    <Link to="/policies" className="text-indigo-500 underline">Privacy Policy</Link>.
                  </label>
                </div>
          
                {/* Submit Button */}
                <div className="col-auto">
                  <button
                    type="submit"
                    disabled={isBooking}
                    className="btn-outline-primary py-2 px-4 rounded-md text-sm font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
                  >
                    {isBooking ? "Booking..." : "Complete Booking"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Book;