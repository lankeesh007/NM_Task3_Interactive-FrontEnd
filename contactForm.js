function ContactForm() {
    return (
      <div>
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label for="name">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label for="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default ContactForm;