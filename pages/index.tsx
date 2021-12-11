import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Modal } from "../components/Modal";
import { ThemeContext } from "./_app";

const Home: NextPage = () => {
  console.log("render main component");

  const [count, setCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  const [theme] = useContext(ThemeContext);

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
          className={`bg-${theme}-600 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Click me 👋
        </button>
        <p>Clicked {count} times 🚀</p>
        <p>rounding is equal {Math.floor(count / 10)} 💣</p>
        <button
          onClick={openDialog}
          className={`bg-${theme}-600 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          Open dialog 😈
        </button>
        <Modal showDialog={showDialog} closeDialog={closeDialog} />
      </div>
    </Layout>
  );
};

export default Home;
