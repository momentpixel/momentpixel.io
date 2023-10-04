import Camera from "../Assets/1.jpg";
import Camera1 from "../Assets/Camra1.jpg";
import DestinationData from "./DestinationData";
import "./Destinationstyle.css";

const Destination = () => {
    return ( <
        div className = "destination" >
        <
        h1 > About < /h1> <
        p > < /p>

        <
        DestinationData className = "first-des"
        text = "Moment Pixel Photography excels in visual storytelling through photography. Our distinct style, commitment to quality, and dedication to customer satisfaction make us Chennai's top choice for weddings, events, and portraits. Your memories, our artistry"
        img1 = { Camera }
        img2 = { Camera1 }
        /> < /
        div >
    );
};

export default Destination;