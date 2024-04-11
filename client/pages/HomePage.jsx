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

  // Get Tool
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
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

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center w-fit">
          <div className="flex flex-wrap justify-start">
            {reverseData.map((note, index) => (
              <div
                key={index}
                className="w-[350px] ring-1 ring-[#b2b2b2] p-4 rounded-2xl m-6 flex flex-col justify-between gap-4">
                <span className="flex flex-col gap-4">
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {passwordVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col gap-4">
            <h2 className="text-lg font-bold">Enter Password</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-full rounded-lg ring-1 ring-[#b7b7b7]"
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
