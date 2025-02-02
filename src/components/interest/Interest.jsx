import { useState, useEffect } from "react";

const Interest = () => {
  const [form, setForm] = useState({
    hobby: "",
    sport: "",
  });

  // Load data from localStorage only on component mount
  useEffect(() => {
    const savedInterest = localStorage.getItem("interest");
    if (savedInterest) {
      setForm(JSON.parse(savedInterest));
    }
  }, []);

  // Save data to localStorage only when 'form' changes
  useEffect(() => {
    if (form.hobby || form.hobby) {
      localStorage.setItem("interest", JSON.stringify(form));
    }
  }, [form]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="form">
      <p>Interest</p>

      <input
        type="text"
        placeholder="Enter hobby"
        name="hobby"
        onChange={handlerChange}
        value={form.hobby}
      />
      <input
        type="text"
        placeholder="Enter fav sport"
        name="sport"
        onChange={handlerChange}
        value={form.sport}
      />
    </div>
  );
};

export default Interest;
