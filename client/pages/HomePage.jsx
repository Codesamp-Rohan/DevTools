import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

function HomePage() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  // Get Tool
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:3000");
        const response = await axios.get(`https://devtools-be.onrender.com`);
        setData(response.data);
      } catch (error) {
        console.log({ Error: error.message });
        toast.error("Not able to get the tools.");
      }
    };

    fetchData();
  }, [id]);

  // Delete Tool
  const deleteToolPost = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      setData(data.filter((tool) => tool._id !== id));
      toast.success("The tool has been dequeued.");
    } catch (error) {
      console.log({ Error: error.message });
      toast.error("The tool was not dequeued.");
    }
  };

  if (!data) return null; // Return early if data is null

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
                      onClick={() => deleteToolPost(note._id)}
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
                    src="/icons/right-arrow.png"></img>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default HomePage;
