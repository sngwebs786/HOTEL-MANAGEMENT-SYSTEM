import React from 'react'
import './Contact.css'
import contactImg from '../../imgs/contact.jpg';
import MyFooter from '../../components/Footer/MyFooter';
import MyCopyright from '../../components/Copyright/MyCopyright';
const Contact = () => {
    return (
        <div className='contactBody'>
            <section className='contactPage' style={{
                // backgroundImage: `url(${contactImg})`,
                backgroundSize:'cover'
            }}>
                <div className='content'>
                    <h2 className='contact-us-hd'>Contact Us </h2>
                    <p className='contact-us-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores neque sunt accusamus numquam amet eos dolorem, unde ab impedit id odit temporibus voluptatibus minima beatae quis voluptas dolor repudiandae.</p>
                </div>

                <div className='mycontainer'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-map-marker' aria-hidden="true"></i>

                            </div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>4671 Sugar Camp Road , <br />Owaton, Minnesota, <br />55060</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-phone' aria-hidden="true"></i>

                            </div>
                            <div className='text'>
                                <h3>Phone</h3>
                                <p>507-475-6094</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-envelope-o' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>5dsad21@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='contactForm'>
                        <form>
                            <h2>Send Message</h2>
                            <div className='inputBox'>
                                <input type="text" name="" required="required" className="contact-input"/>
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="text" name="" required="required"  className="contact-input"/>
                                <span>Email</span>
                            </div>
                            <div className='inputBox'>
                                <textarea required="requred"  className="contact-input"></textarea>
                                <span>Type your message ...</span>
                            </div>
                            <div className='inputBox'>
                                <input type="submit" name="" value="Send"  className="contact-input"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        <MyFooter/>
        <MyCopyright/>
        </div>
    )
}

export default Contact
