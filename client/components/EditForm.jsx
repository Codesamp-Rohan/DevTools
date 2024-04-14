const EditForm = ({ formData, handleChange, setEditForm, handleSubmit }) => {
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[55%] xl:w-[40%] ring-1 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-[#eee] shadow-2xl rounded-xl p-6">
      <h1 className="text-[1.4rem] font-semibold monsy">Edit Form</h1>
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
            placeholder="image url"
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
            placeholder="tool url"
          />
        </span>
        <span>
          <label>Date of Adding</label>
          <input
            className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
            name="date"
            id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="date"
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
            <option value="AI Tool">AI Tool</option>
            <option value="Editor">Editor</option>
            <option value="Other">Other</option>
          </select>
        </span>
        <span>
          <label>Paid or Free?</label>
          <input
            type="paid"
            name="paid"
            className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
            value={formData.paid}
            onChange={handleChange}
            placeholder="Paid or Free*"></input>
        </span>
        <span className="flex justify-between gap-8">
          <button
            type="submit"
            className="bg-[#2d2a2a] hover:bg-black text-white py-2 rounded-lg w-full px-[30px]">
            SUBMIT
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white py-2 rounded-lg w-full px-[30px]"
            onClick={() => setEditForm(false)}>
            DISCARD
          </button>
        </span>
      </form>
    </div>
  );
};

export default EditForm;
