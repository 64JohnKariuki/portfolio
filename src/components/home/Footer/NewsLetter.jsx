import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading();
    try {
      const response = await fetch('/api/userSubscribe', {
        method: 'POST',
        ...formData,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        const token = data.token;
        const expirationTime = 1; // Set expiration time in days
        Cookies.set('token', token, { expires: expirationTime });
        setSuccessMsg(`You have subscribed Successfully. Welcome, ${email}!`);
      } else {
        throw new Error(data.message || 'Failed to login');
      }
    } catch (error) {
      console.error(error);
      setErrEmail("Failed to login");
    } finally {
      setLoading(false);
    }
  };

    return(
      <>
{/* -- NEWSLETTER  -- */}
<div className="py-7 py-md-9 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 text-center">
        {/* -- Heading  -- */}
        <h1 className="mb-2">Newsletter</h1>
  
        {/* -- Subheading  -- */}
        <p className="mb-6">
          It would be an honor to share my journey with you in the upcoming weeks, months and years!
        </p>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        {/* -- Begin Mailchimp Signup Form  -- */}
        <div id="mc_embed_signup">
          <form onSubmit={handleSubmit} noValidate>
            <div
              className="row justify-content-center gx-3"
              id="mc_embed_signup_scroll"
            >
              <div className="col">
                <label className="visually-hidden"  htmlFor="email"
                  >Email Address
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  autoComplete="off"
                />
                {formErrors.email && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {formErrors.email}
                </p>
              )}
              </div>
              <div className="visually-hidden" id="mce-responses">
                <div
                  className="response d-none"
                  id="mce-error-response"
                ></div>
                <div
                  className="response d-none"
                  id="mce-success-response"
                ></div>
              </div>
              
              <div className="col-auto">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  id="mc-embedded-subscribe"
                >
                  Subscribe
                </button>
                
              </div>
            </div>
          </form>
        </div>
        {/* --End mc_embed_signup -- */}
      </div>
    </div>
  </div>
</div>
      </>
    )
};
export default Newsletter;