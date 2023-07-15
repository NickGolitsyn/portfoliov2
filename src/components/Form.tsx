import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        // Form submission successful
        window.location.href = '/contact';
      } else {
        // Form submission failed
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
        Contact Me
      </h1>
      <p className="text-gray-400 dark:text-gray-400">
        Fill up the form below to send me a message.
      </p>
      <div className="my-7 md:m-7">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value='5628ab59-3dc6-44cd-b914-5280b5847d8a' />
          <input
            type="hidden"
            name="subject"
            value="New Submission from nickgolitsyn.com"
          />
          <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-stone-300 dark:text-stone-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-stone-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-stone-800 dark:text-white dark:placeholder-stone-300 dark:border-stone-400 dark:focus:ring-stone-300 dark:focus:border-stone-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-stone-300 dark:text-stone-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-stone-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-stone-800 dark:text-white dark:placeholder-stone-300 dark:border-stone-400 dark:focus:ring-stone-300 dark:focus:border-stone-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="text-sm text-stone-300 dark:text-stone-300">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 (555) 1234-567"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-stone-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-stone-800 dark:text-white dark:placeholder-stone-300 dark:border-stone-400 dark:focus:ring-stone-300 dark:focus:border-stone-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm text-stone-300 dark:text-stone-300">
              Your Message
            </label>
            <textarea
              rows={5}
              name="message"
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 placeholder-stone-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-stone-800 dark:text-white dark:placeholder-stone-300 dark:border-stone-400 dark:focus:ring-stone-300 dark:focus:border-stone-300"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-stone-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          <p className="text-base text-center text-gray-400" id="result"></p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
