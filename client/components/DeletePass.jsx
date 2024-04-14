const HandleDeletePass = ({
  password,
  setPassword,
  setPasswordVisible,
  deleteTool,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="bg-white p-8 rounded-lg flex flex-col gap-4 sm:w-[400px] w-[300px]">
        <h2 className="text-lg font-bold">Enter Password</h2>
        <p className="text-[0.8rem] font-bold text-[#ddd]">
          Only Admin can do it.
        </p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-md ring-1 ring-[#b7b7b7]"
        />
        <div className="flex justify-between">
          <button
            onClick={() => setPasswordVisible(false)}
            className="text-gray-500 mr-4">
            Cancel
          </button>
          <button
            onClick={deleteTool}
            className="bg-red-500 text-white px-4 py-2 rounded">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HandleDeletePass;
