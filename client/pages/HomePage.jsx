import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function HomePage() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteItemId, setDeleteItemId] = useState(null); // State variable to store the id of the item to be deleted

  const [menu, setMenu] = useState(false);

  // Get Tool
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:3000");
        const response = await axios.get(`https://devtools-be.onrender.com`);
        setData(response.data);
        console.log(response.createdAt);
      } catch (error) {
        console.log({ Error: error.message });
        toast.error("Not able to get the tools.");
      }
    };

    fetchData();
  }, [id]);

  const handleDeleteClick = (id) => {
    setDeleteItemId(id); // Store the id of the item to be deleted
    setPasswordVisible(true); // Show the password input modal
  };

  const deleteTool = async () => {
    if (password !== "DevTools123") {
      toast.error("Incorrect password.");
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/delete/${deleteItemId}`);
      setData(data.filter((tool) => tool._id !== deleteItemId)); // Update data state after deletion
      toast.success("The tool has been dequeued.");
    } catch (error) {
      console.log({ Error: error.message });
      toast.error("The tool was not dequeued.");
    } finally {
      setPassword(""); // Clear password input
      setPasswordVisible(false); // Hide password input modal
      setDeleteItemId(null); // Reset delete item id
    }
  };

  if (!data) return null;

  const reverseData = [...data].reverse();

  const calculateDaysAgo = (date) => {
    const now = new Date();
    const postDate = new Date(date);
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <>
      <div className="flex justify-center items-center relative">
        <button
          onClick={() => setMenu(true)}
          className="w-[20px] absolute top-2 right-2 md:top-4 md:right-4 flex z-[30]">
          <img src="/icons/menu.png"></img>
        </button>
        <div
          className="w-screen h-screen fixed bg-[#0000009c] top-0 z-50"
          onClick={() => setMenu(false)}
          style={{ display: menu ? "flex" : "none" }}></div>
        <span
          className="fixed top-10 right-4 flex flex-col items-center border-[0.8px] border-[#282828] w-[300px] p-10 mt-10 bg-[#eee] z-[100] rounded-lg"
          style={{ display: menu ? "flex" : "none" }}>
          <button
            onClick={() => setMenu(false)}
            className="absolute top-4 right-4 z-[100]">
            <img className="w-[20px]" src="/icons/close.png"></img>
          </button>

          {/* <h1 className="hover:bg-[#ddd] w-full mx-2 p-2">hello</h1> */}
          {reverseData.map((note, index) => (
            <a
              key={index}
              href={note.url}
              target="_blank"
              className="hover:bg-[#ddd] w-full mx-2 p-2 rounded-md">
              {note.title}
            </a>
          ))}
        </span>
        <div className="flex flex-row justify-center w-fit">
          <div className="flex flex-wrap justify-center md:justify-start relative">
            {reverseData.map((note, index) => (
              <div
                key={index}
                className="w-[350px] ring-1 ring-[#b2b2b2] p-4 rounded-2xl m-6 flex flex-col justify-between gap-4 tool--card">
                <span className="flex flex-col gap-4 relative">
                  <img
                    className="tool--image ring-1 ring-[#b2b2b2] h-[180px] object-cover"
                    src={note.image}
                    alt={note.title}
                  />
                  <span className="flex justify-between items-end">
                    <a className="text-[12px] font-semibold uppercase monsy">
                      {note.category}
                    </a>
                    <button
                      onClick={() => handleDeleteClick(note._id)} // Pass the id to handleDeleteClick function
                      className="bg-red-500 text-white px-4 py-1 rounded-md">
                      Delete
                    </button>
                  </span>
                  <h1 className="monsy font-bold text-[1.4rem] leading-6">
                    {note.title}
                  </h1>
                  <p className="monsy text-[0.85rem]">{note.about}</p>
                </span>
                <span className="flex flex-col gap-2">
                  <h1>{calculateDaysAgo(note.date)}</h1>{" "}
                  <a
                    href={note.url}
                    target="_blank"
                    className="bg-[#282828] w-full p-2 text-white rounded-lg flex items-center gap-2 monsy">
                    Explore{" "}
                    <img
                      className="w-[10px] invert"
                      src="/icons/right-arrow.png"
                      alt="arrow"></img>
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {passwordVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-white p-8 rounded-lg flex flex-col gap-4 w-[400px]">
            <h2 className="text-lg font-bold">Enter Password</h2>
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
      )}
      <Toaster />
    </>
  );
}

export default HomePage;
