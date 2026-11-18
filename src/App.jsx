import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx,1)
     
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex  bg-pink-400 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  gap-4 p-10  items-start lg:w-1/2 flex-col"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          className="px-5 w-full font-medium py-2 h-32 flex items-start flex-row border-2 rounded outline-none"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white w-full active:bg-gray-300 font-medium text-black px-5 py-2 rounded outline-none">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black pt-9 pb-4 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF739z4xHNsg_KRIlzZlY01DaomN8-XxIb2_A8251lg&s=10')]">
                <div>
                  <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                  <p className="mt-3 leading-tight text-sxs font-semibold text-gray-600">{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className="w-full bg-red-400 py-1 cursor-pointer active:scale-95 text-xs rounded font-bold text-white">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
