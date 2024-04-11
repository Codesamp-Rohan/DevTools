import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    about: "",
    url: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/create",
        formData
      );

      const responseData = response.data; // Assuming the response data contains the updated form data
      console.log("Response Data: ", responseData);
      setFormData(formData); // Update form data with response data
      toast.success("The tool is added to the queue 🤗.");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Not able to added the tool to the queue.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex flex-col items-start gap-4 w-[100%] md:w-[40%]">
        <p className="font-semibold">
          You just got new stuff to show? Enter it down here😁
        </p>
        <form className="flex flex-col gap-4 w-[100%]" onSubmit={handleSubmit}>
          <span>
            <label>Title</label>
            <input
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
              name="title"
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="title"
            />
          </span>
          <span>
            <label>Image</label>
            <input
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
              name="image"
              id="image"
              type="text"
              value={formData.image}
              onChange={handleChange}
              placeholder="image"
            />
          </span>
          <span>
            <label>Details</label>
            <input
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
              name="about"
              id="about"
              type="text"
              value={formData.about}
              onChange={handleChange}
              placeholder="about"
            />
          </span>
          <span>
            <label>Tool Link</label>
            <input
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
              name="url"
              id="url"
              type="text"
              value={formData.url}
              onChange={handleChange}
              placeholder="url"
            />
          </span>
          <span>
            <label htmlFor="category">Choose a category:</label>
            <select
              id="category"
              name="category"
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
              value={formData.category}
              onChange={handleChange}>
              <option value="">Select a category*</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Web Development">Web Development</option>
              <option value="Designing">Designing</option>
              <option value="Software Development">Software Development</option>
              <option value="Deployment">Deployment</option>
              <option value="Other">Other</option>
            </select>
          </span>
          <button
            type="submit"
            className="bg-[#2d2a2a] hover:bg-black text-white py-2 rounded-lg w-full px-[60px]">
            SUBMIT
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Form;
