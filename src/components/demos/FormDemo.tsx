import React, { useState } from "react";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
      // Optionally, reset the form or do something else here
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleChange}
            style={{
              margin: "0 10px",
              padding: "8px",
              border:
                isValid || email === "" ? "1px solid #ccc" : "1px solid red",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          style={{
            margin: "10px",
            padding: "8px 16px",
            backgroundColor: isValid ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Submit
        </button>
      </form>
      {submitted && (
        <p style={{ color: "green" }}>Email submitted successfully!</p>
      )}
      {!isValid && email !== "" && (
        <p style={{ color: "red" }}>Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default EmailForm;
