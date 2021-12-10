import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";

const Home: NextPage = () => {
  console.log("render main component");

  const [count, setCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  useEffect(() => {
    window.sessionStorage.setItem("clickCount", `${count}`);
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Click me 👋
        </button>
        <p>Clicked {count} times 🚀</p>
        <p>rounding is equal {Math.floor(count / 10)} 💣</p>
        <button
          onClick={openDialog}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Open dialog 😈
        </button>
      </div>
      <Modal showDialog={showDialog} closeDialog={closeDialog} />
    </Layout>
  );
};

export default Home;
