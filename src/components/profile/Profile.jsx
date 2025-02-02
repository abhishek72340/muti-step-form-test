import { useState, useEffect } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  // Load data from localStorage only on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setForm(JSON.parse(savedProfile));
    }
  }, []);

  // Save data to localStorage only when 'form' changes
  useEffect(() => {
    if (form.name || form.age) {
      localStorage.setItem("profile", JSON.stringify(form));
    }
  }, [form]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    localStorage.setItem("profile", JSON.stringify(form));
  };
  return (
    <div className="form">
      <p>Profile</p>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handlerChange}
        value={form.name}
      />
      <input
        type="text"
        placeholder="Enter age"
        name="age"
        onChange={handlerChange}
        value={form.age}
      />
    </div>
  );
};

export default Profile;
