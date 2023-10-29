import React from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <div className="container payment-main mt-5 px-5">
            <div className="mb-4">
                <h2>Confirm order and pay</h2> <span>please make the payment, after that you can enjoy all the features and benefits.</span>
            </div>
            <form className="row">
                <div className="col-md-12">
                    <div className="card p-3">
                        <h6 className="text-uppercase">Payment details</h6>
                        <div className="inputbox mt-3"> <input type="text" name="name" className="form-control payment-form" required="required" /> <span>Name on card</span> </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control  payment-form" required="required" /> <i className="fa fa-credit-card" ></i> <span>Card Number</span> </div>
                            </div>
                            <div className="col-md-6">

                                <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control  payment-form" required="required" /> <span>Month</span>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control  payment-form" required="required" /> <span>Year</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control  payment-form" required="required" /> <span>CVV</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-between"><button className="btn btn-success btn-payment w-100 mx-5 px-3">Confirm</button> </div>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;