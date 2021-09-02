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
        <div>
            <form>
                <div>
                    <input
                        type='name'
                        placeholder='Name'
                        ref={nameRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <div>
                    <input
                        type='email'
                        placeholder='Email'
                        ref={emailRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <div>
                    <input
                        type='address'
                        placeholder='Address'
                        ref={addressRef}
                        aria-disabled="false"
                        required
                    />
                </div>
                <button type='submit' onClick={handleSubmit}>Confirm Shipping Details</button>
            </form>
        </div>
    )
}

export default Shipping;