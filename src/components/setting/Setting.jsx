import { useState, useEffect } from "react";

const Setting = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const profileData = JSON.parse(localStorage.getItem("profile"));
  const interestData = JSON.parse(localStorage.getItem("interest"));

  // Load data from localStorage only on component mount
  useEffect(() => {
    const savedSetting = localStorage.getItem("setting");
    if (savedSetting) {
      setForm(JSON.parse(savedSetting));
    }
  }, []);

  // Save data to localStorage only when 'form' changes
  useEffect(() => {
    if (form.username || form.email) {
      localStorage.setItem("setting", JSON.stringify(form));
    }
  }, [form]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
 alert(
    `Name: ${profileData?.name}, Age: ${profileData?.age}, ` +
    `Hobby: ${interestData?.hobby}, Sport: ${interestData?.sport}, ` +
    `Username: ${form.username}, Email: ${form.email}`
  );
  };

  // Check if all required data is available and form is filled
  const isSubmitDisabled =
    !profileData || !interestData || !form.username || !form.email;

  return (
    <form className="form" onSubmit={submitHandler}>
      <p>Setting</p>
      <input
        type="text"
        placeholder="Enter username"
        name="username"
        onChange={handlerChange}
        value={form.username}
      />
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        onChange={handlerChange}
        value={form.email}
      />
      <input type="submit" value="Final Submit" disabled={isSubmitDisabled} />
    </form>
  );
};

export default Setting;
