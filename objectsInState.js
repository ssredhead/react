import React, { useState } from "react";

//When working with a set of related variables, it is helpful to group them in an object.

export default function EditProfile() {
  //initialized as empty object.
  const [profile, setProfile] = useState({});

  //Use a state setter callback function based on the previous value. The spread syntax is the same for objects as for arrays { ...oldObject, newKey:newValue }. Reuse the event handler across multiple inputs by using the input tag's name attribute to identify which input the change event came from.


  //just like arrays, create a new object to alter values using the spread syntax.

  //Inside the callback function, wrap the curly brackets in parentheses so JS knows that it refers to a new objects.
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}
