import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
              <div className='bg-light mt-5 pt-5 shadow'>
            <div className="row container mx-auto shadow">
                <div className="col-md-3 my-3 pt-5">
                    <h6 className="text-primary CustomBorder">ABOUT TRAVELERS</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit molestiae quam cupiditate culpa architecto, deserunt ducimus voluptates commodi nesciunt</p>
                    {/* here i will use icon instead of title like facebook instagram */}
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>twitter</span>
                </div>

                <div className="col-md-3 my-3 pt-5">
                    <h6 className='CustomBorder text-primary'>CONTACT INFORMATION</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Contact: +0083834873</p>
                    <p>Email: travelers@gmail.com</p>
                    <p>Location: 3146 Koontz, California</p>
                </div>
                <div className="col-md-3  shadow-sm">
                    <img src="https://t4.ftcdn.net/jpg/04/41/71/55/360_F_441715520_tVOReRBE2YdytMuDCrIl7O7vES29Otl9.jpg" className='img-fluid w-50' alt="" />
                    <div className='CustomBorder'>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
                <div className="col-md-3 my-3 pt-5  ">
                    <h6 className='CustomBorder text-primary'>SUBSCRIBE US
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <input type="email" className='p-3 rounded-pill shadow-lg' name="Email" id="" placeholder='Your Email' />
                    <input type="submit" className="btn btn-outline-primary  rounded-pill shadow-lg my-2 px-5" value="SUBSCRIBE NOW" />
                </div>
                <span className='mx-auto text-primary text-center mb-3'>
                    <small className='text-danger shadow'>IHT HUSSAIN</small>
                </span>
            </div>

        </div>
        </div>
    );
};

export default Footer;