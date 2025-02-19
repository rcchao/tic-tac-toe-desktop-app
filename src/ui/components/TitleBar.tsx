import "../index.css";
import closeWindow from "../assets/closeWindow.png";
import minimise from "../assets/minimise.png";

function TitleBar() {
  return (
    <div className="title-bar-header">
      <div className="title">Tic Tac Toe</div>
      <button className="close" onClick={() => console.log("close")}>
        <img src={closeWindow} />
      </button>
      <button className="minimise" onClick={() => console.log("minimise")}>
        <img src={minimise} />
      </button>
    </div>
  );
}

export default TitleBar;
