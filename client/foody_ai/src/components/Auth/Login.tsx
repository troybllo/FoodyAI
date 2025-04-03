import { useState } from "react";

export type User = {
  username: string;
  email: string;
  password: string;
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  function isValidCredentials(user: User): boolean {
    if (user.email == formData.email && user.password == formData.password) {
      return true;
    }
    return false;
  }

  function handleSubmit() {
    if (!isValidCredentials) {
      setError("The data you have inputted is not valid. Please try again");
    }
    console.log("You have have successfully signed up!");
  }

  return (
    <>
      <div className="border border-black rounded-2xl p-8">
        <form className="flex flex-col " onSubmit={handleSubmit}>
          {error && <div className="text-red-700">{error}</div>}
          <input type="text" placeholder="Enter a username" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}
