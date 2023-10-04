import cant from "../Assets/cant.jpg";
import fashion from "../Assets/fashion.jpg";
import makeup from "../Assets/makeup.jpg";
import meg from "../Assets/meg.jpg";
import short from "../Assets/short.jpg";
import weding from "../Assets/weding.jpg";
import candi from "../Assets/candid.jpg";
import brith from "../Assets/brith.jpg";
import trade from "../Assets/trad.jpg";
import event from "../Assets/event.jpg";
import series from "../Assets/series.jpg";
import cien from "../Assets/cien.jpg";
import Adv from "../Assets/Adv.jpg";
import Indu from "../Assets/Indu.jpg";
import inter from "../Assets/Interior & Architecture.jpg";
import "./Tripstyle.css";
import TripData from "./TripData";

function Trip() {
    return ( 
        <div className = "trip">
        
		<h1 > Service < /h1>
        <div className = "tripcard">

        <TripData image = {weding}
        heading = "Wedding"
        text = "It is a profound honor as a photographer to witness two people falling in love." />

        <TripData image = {candi}
        heading = "Candid"
        text = "Candid photos capture time in its most natural state." />

        <TripData image = {brith}
        heading = "Birthday"
        text = "From candid smiles to cake-cutting delights, birthday photography freezes the cherished moments of your special day" / >

        <TripData image = {trade}
        heading = "Traditional"
        text = "Timeless and classic, traditional photography captures the essence of your event with an artful touch." / >

        <TripData image = {cien}
        heading = "Cinematic"
        text = "Infusing cinematic flair into every frame, this style transforms your event into a captivating visual narrative." / >

        <TripData image = {event}
        heading = "Event"
        text = "Documenting the heart and soul of gatherings, event photography preserves memories that last a lifetime" / >
        
		</div>  
		<br>
        </br>  
		<>
        <h1> Other Services < /h1> 
        <div className = "tripcard">

        <TripData image = {makeup}
        heading = "Makeup"
        text = "Elevate your beauty with expert makeup services that enhance your natural charm for any occasion" / >

        <TripData image = {fashion}
        heading = "Fashion Style"
        text = "Discover your unique fashion statement with personalized style guidance and trendsetting expertise" / >

        <TripData image = {cant}
        heading = "Catering"
        text = "Savor delectable flavors and impeccable service with our catering, making your event a culinary masterpiece." / >

        <TripData image = {short}
        heading = "Short Films"
        text = "Bring your stories to life in cinematic brilliance through captivating short films that leave a lasting impact." / >

        <TripData image = {meg}
        heading = "Mehndi Design"
        text = "Adorn your hands with intricate and artistic mehndi designs, adding elegance to your special moments." / >

        <TripData image = {series}
        heading = "Web Series"
        text = "Embark on a captivating journey through our compelling web series, offering immersive storytelling and entertainment" / >
        </div>  
		</> 
		<h1> Commercial</h1>  
		<div className = "tripcard" >

        <TripData image = { Adv }
        heading = "Advertising"
        text = "" />

        <TripData image = { Indu }
        heading = "Industrial"
        text = "" />

        <TripData image = { inter }
        heading = "Interior & Architecture"
        text = "" />

        <
        /div> <
        /div>
    );
}

export default Trip;