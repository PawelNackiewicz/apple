import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useState } from "react";

interface ModalProps {
  showDialog: boolean;
  closeDialog: () => void;
}

export function Modal({ showDialog, closeDialog }: ModalProps) {
  const [backgroundColor, setBackgroundColor] = useState("green");

  const changeBackgroundColor = () => {
    const colors = ["orange", "red", "gray", "blue", "green"];
    setBackgroundColor(colors[Math.floor(colors.length * Math.random())]);
  };

  return (
    <Dialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      className="max-w-lg w-full flex justify-center"
      style={{ background: backgroundColor }}
    >
      <button
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-4"
        onClick={changeBackgroundColor}
      >
        <span aria-hidden>new color</span>
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={closeDialog}
      >
        <span aria-hidden>close</span>
      </button>
    </Dialog>
  );
}
