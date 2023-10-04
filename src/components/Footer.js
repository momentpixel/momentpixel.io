import "./Footerstyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Moment pixel Photography</h1>
          <p></p>
        </div>
        <div>
		
		  <a href="tel:+91 63809 53045">
		    <i class="fa-solid fa-phone"></i>
		  </a>
		  
		  <a href="https://wa.me/7397645873/?text=">
		    <i class="fa-brands fa-whatsapp"></i>
		  </a>
		  
		  <a href="/">
		    <i class="fa-brands fa-facebook"></i>
		  </a>
		  
		  <a href="/">
		    <i class="fa-brands fa-instagram"></i>
		  </a>
		  
		  <a href="/">
		    <i class="fa-brands fa-threads"></i>
		  </a>
		  
		  <a href="/">
		    <i class="fa-brands fa-twitter"></i>
		  </a>
		  
		  
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Photography</a>
		  <a href="/">Video Editing</a>
		  <a href="/"></a>
        </div>
		
		<div>
          <h4>Community</h4>
          <a href="/">Github</a>
		  <a href="/">Issues</a>
		  <a href="/">whatsapp Group</a>
        </div>
		
		<div>
          <h4>Help</h4>
          <a href="/">Support</a>
		  <a href="/">Contact Us</a>
		  <a href="/">Text Me</a>
        </div>
		
		
		
		<div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
		  <a href="/">Privacy Policy</a>
		  <a href="/">License</a>
        </div>
		
		
      </div>
    </div>
  );
};

export default Footer;
