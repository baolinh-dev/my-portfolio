import classNames from 'classnames/bind';
import styles from './Contact.module.scss'; 
import Title from '../Common/Title'; 
const cx = classNames.bind(styles); 

function Contact() {
    return (
      <div className={cx('contact')} id="contact"> 
        <Title content={"Contact"}></Title>
        <form>
          <input placeholder="Name" type="text" id="name" name="name" required/>
          <input placeholder="Email" type="email" id="email" name="email" required/>
          <textarea placeholder="Message" id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;