import {ReactComponent as ContactLogo} from '../assets/contact-me.svg';
import '../styles/Contact.css' 


const Contact = () => {
    return (
        <section className='contact'>
            {/* Form */}
            <div className='contact-description'>
                <ContactLogo />
                {/* <h2>Contact Me</h2> */}
            </div>

            {/* Photograph */}
            <div className='contact-map'>

            </div>
        </section>
    )
}

export default Contact
