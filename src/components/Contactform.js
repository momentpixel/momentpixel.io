import "./Contactformstyle.css";

function Contactform() {
  return (
    <div className="from-container">
      <h1>Send a messange to us!</h1>
      <form>
        <input placeholder="Name" />
		<input placeholder="Email" />
		<input placeholder="SUbject" />
		<textarea placeholder="Message" rows="4"></textarea>
        <button>send</button>
      </form>
    </div>
  );
}

export default Contactform;
