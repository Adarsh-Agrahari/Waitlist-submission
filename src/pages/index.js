// pages/index.js
import { useState } from "react";
import "@/app/globals.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error submitting email");
    }
  };

  // return (
  //   <div className='p-8 bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col justify-center items-center'>
  //     <h1>Email Submission</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         placeholder="Enter your email"
  //         required
  //         style={{ padding: '10px', width: '300px' }}
  //       />
  //       <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Submit</button>
  //     </form>
  //     {message && <p>{message}</p>}
  //   </div>
  // );

  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 to-black min-h-screen flex flex-col justify-center items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Join Our Waitlist!
        </h1>
        <p className="text-lg text-gray-400">
          Be the first to know when we launch. Enter your email to join our
          waitlist.
        </p>
      </header>
      <div className="w-full max-w-md p-6rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <div className="flex gap-4 w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ padding: "10px", width: "300px" }}
            />
            <button
              type="submit"
              style={{ padding: "10px", marginLeft: "10px" }}
            >
              Submit
            </button>
          </form>
          {message && <p>{message}</p>}
          <Input
            className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Join{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
