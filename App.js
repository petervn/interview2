import React, { useState } from "react";

function User() {
  return "Hello, I'm a user";
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <button onClick={toggleLoading}>Toggle loading</button>
    </div>
  );
}
