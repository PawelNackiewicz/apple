import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useContext } from "react";
import { ThemeContext, ThemeData } from "../pages/_app";

interface ModalProps {
  showDialog: boolean;
  closeDialog: () => void;
}

export function Modal({ showDialog, closeDialog }: ModalProps) {
  const [, setTheme] = useContext(ThemeContext);

  const handleClick = (color: ThemeData) => {
    setTheme(color);
  };

  return (
    <Dialog
      isOpen={showDialog}
      onDismiss={closeDialog}
      className="max-w-xs w-full flex flex-col justify-center"
      aria-label="dialog"
    >
      <p className="text-center font-bold uppercase">Select theme</p>
      <div className="w-full flex justify-between px-10">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 px-4 rounded my-4"
          onClick={() => handleClick("red")}
        />
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold p-2 px-4 rounded my-4"
          onClick={() => handleClick("green")}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 px-4 rounded my-4"
          onClick={() => handleClick("blue")}
        />
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold rounded"
        onClick={closeDialog}
      >
        <span aria-hidden>close</span>
      </button>
    </Dialog>
  );
}
