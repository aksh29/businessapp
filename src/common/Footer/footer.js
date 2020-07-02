import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer id="footer" className="bg-dark text-white py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-12">
                                <h4 className="font-rubik font-size-20">E-Commerce</h4>
                                <p className="font-size-14 font-rale text-white-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, deserunt.</p>
                            </div>
                            <div className="col-lg-4 col-12">
                                <h4 className="font-rubik font-size-20">Newslatter</h4>
                                <form className="form-row">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Email *"/>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary mb-2">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-2 col-12">
                                <h4 className="font-rubik font-size-20">Information</h4>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">About Us</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Delivery Information</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Privacy Policy</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Terms & Conditions</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12">
                                <h4 className="font-rubik font-size-20">Account</h4>
                                <div className="d-flex flex-column flex-wrap">
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">My Account</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Order History</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Wish List</a>
                                    <a href="#" className="font-rale font-size-14 text-white-50 pb-1">Newslatters</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="copyright text-center bg-dark text-white py-2">
                    <p className="font-rale font-size-14">&copy; Copyrights 2020. Designed By <a href="#" className="color-second">Akshat Pandey</a></p>
                </div>
            </div>
        );
    }

}