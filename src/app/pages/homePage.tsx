"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the shape of your form data
interface FormData {
  nativeLanguage: string;
  learningLanguage: string;
  phoneNumber: string;
}

const HomePage: React.FC = () => {
  // Use the FormData interface to specify the shape of the state
  const [formData, setFormData] = useState<FormData>({
    nativeLanguage: "",
    learningLanguage: "",
    phoneNumber: "",
  });

  // Specify types for the event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Specify types for the event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting form:", formData);
    // Here you'd make a call to your Firebase function to add this data to your database
  };

  return (
    <div>
      <h1>Language Roulette</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nativeLanguage">Native Language:</label>
          <select
            id="nativeLanguage"
            name="nativeLanguage"
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add more options here */}
          </select>
        </div>
        <div>
          <label htmlFor="learningLanguage">Learning Language:</label>
          <select
            id="learningLanguage"
            name="learningLanguage"
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="French">French</option>
            <option value="German">German</option>
            {/* Add more options here */}
          </select>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;
