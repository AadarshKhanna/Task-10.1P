import React, { useState } from 'react';
import "./Sign.css"

function Sign() {
    const [email, setEmail] = useState('');

    const subscribe = async () => {
        try {
            const response = await fetch('http://localhost:3000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                alert('Your Subscription added successful');
            } else {
                alert('Subscription failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="nava">
            <div className="wrapw">
                <div className="foot-text">
                    <p>SIGN UP FOR OUR DAILY INSIDER</p>
                </div>
                <div className="subscribe">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="button" onClick={subscribe} className="foot-button">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sign;