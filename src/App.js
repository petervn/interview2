import React, { useState } from "react";

function User() {
  return "Hello, I'm a user";
}

const UserWithLoader = withLoader(User);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <button onClick={toggleLoading}>Toggle loading</button>
      <UserWithLoader isLoading={isLoading} />
    </div>
  );
}
