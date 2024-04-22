import "../CSS/contact.css";
import EmailIcon from '@mui/icons-material/Email'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';

export default function Contact () {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e6b5aa5f-1317-4c55-9d3c-f904659dc53c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
    };
    return (
    <div className="contact" id="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>I'm open to take new projects, dont be scared to reach out so we can start planning and collaborating</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <EmailIcon/> <p>regis.enama@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <LocalPhoneIcon/> <p>917-769-9184</p>
                    </div>
                    <div className="contact-detail">
                        <PlaceIcon/> <p>NY, NY, United States</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name </label>
                <input type="text" placeholder="Enter your Name" name= 'name'/>
                <label htmlFor=""> Your email </label>
                <input type="email" placeholder="Enter your email" name= 'email'/>
                <label htmlFor="">Write your message here </label>
                <textarea name="message" rows="8" placeholder= "Enter your message"></textarea> 
                <button className="contact-submit" type= 'submit'>Submit Now</button>
            </form>
        </div>
    </div>

    )
};