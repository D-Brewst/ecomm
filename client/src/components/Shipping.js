import React, {useRef} from 'react';

const Shipping = ({setShipping}) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShipping({
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
        })
    }

    return (
        <div className="shipping">
            <form className="shipping__form">
            <h2 className="shipping__header">Shipping Details</h2>
                <div className="shipping__input">
                    <input
                        className="shipping__text"
                        type='name'
                        placeholder='Name'
                        ref={nameRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <div className="shipping__input">
                    <input
                        className="shipping__text"
                        type='email'
                        placeholder='Email'
                        ref={emailRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <div className="shipping__input">
                    <input
                        className="shipping__text"
                        type='address'
                        placeholder='Address'
                        ref={addressRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <button className="shipping__btn" type='submit' onClick={handleSubmit}>Confirm Shipping Details</button>
            </form>
        </div>
    )
}

export default Shipping;