
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

export const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_pwp8nvd', 'template_6boxtqg', form.current, {
        publicKey: 'iauBrw-oYxJW73CWP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <div className='form-wrapper'>
      <h1 className="contact-title">Contact me 
        <p className='contact-text'>I truly value open communication and enjoy connecting with people. 
        Thank you for taking the time to reach out — I look forward to hearing from you!
        </p>
      </h1>
      <div className='form-background'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className='form-group'>
            <label>Name</label>
            <input type="text" name="user_name" required/>
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className='form-group'>
            <label>Message</label>
            <textarea name="event_details" />
          </div>
          <input type="submit" value="Send" className='submit-button'/>
        </form>
      </div>
    </div>
  );
};
export default Contact;