import "../index.css";
import closeWindow from "../assets/closeWindow.png";

function TitleBar() {
  return (
    <div className="title-bar-header">
      <div className="title">Tic Tac Toe</div>
      <button onClick={() => console.log("close")}>
        <img src={closeWindow} />
      </button>
    </div>
  );
}

export default TitleBar;
