// import { ipcRenderer } from "electron";
import "../index.css";
import closeWindow from "../assets/closeWindow.png";
import minimise from "../assets/minimise.png";

declare global {
  interface Window {
    electronAPI: {
      closeApp: () => void;
      minimiseApp: () => void;
    };
  }
}

function TitleBar() {
  return (
    <div className="title-bar-header">
      <div className="title">Tic Tac Toe</div>
      <button id = "closeButton" className="close" onClick={ () => window.electronAPI.closeApp()}>
        <img src={closeWindow} />
      </button>
      <button className="minimise" onClick={() => window.electronAPI.minimiseApp()}>
        <img src={minimise} />
      </button>
    </div>
  );
}

export default TitleBar;
