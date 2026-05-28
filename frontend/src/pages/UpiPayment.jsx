import { useState } from "react";

import axios from "axios";

const UpiPayment = () => {

    const [upiId, setUpiId] = useState("");

    const [amount, setAmount] = useState("");

    const [loading, setLoading] = useState(false);

    // SMOOTH ANIMATION 😎🔥

    const animationStyle = `
    
    @keyframes fadeSlide {

        from {
            opacity: 0;
            transform: translateY(40px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes glow {

        0% {
            box-shadow: 0 0 15px rgba(6,182,212,0.2);
        }

        50% {
            box-shadow: 0 0 35px rgba(6,182,212,0.5);
        }

        100% {
            box-shadow: 0 0 15px rgba(6,182,212,0.2);
        }
    }

    .animate-fadeSlide {

        animation: fadeSlide 1s ease;
    }

    .animate-glow {

        animation: glow 3s infinite;
    }

    `;

    const handlePayment = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await axios.post(

                "http://127.0.0.1:8000/api/upi-transfer/",

                {
                    upi_id: upiId,
                    amount: amount
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.message);

            setUpiId("");

            setAmount("");

        } catch (error) {

            alert("UPI Payment Failed");

            console.log(error);

        } finally {

            setLoading(false);

        }
    };

    return (

        <>

            <style>{animationStyle}</style>

            <div
                className="
                    min-h-screen
                    flex
                    justify-center
                    items-center
                    px-4
                    py-10
                "
                style={{
                    background:
                        "linear-gradient(to right, #020617, #0f172a, #1e293b)"
                }}
            >

                {/* MAIN CONTAINER 😎 */}

                <div
                    className="
                        w-full
                        max-w-6xl
                        grid
                        md:grid-cols-2
                        gap-10
                        items-center
                    "
                >

                    {/* LEFT SIDE 😎 */}

                    <div
                        className="
                            text-white
                            animate-fadeSlide
                        "
                    >

                        <h1
                            className="
                                text-4xl
                                md:text-6xl
                                font-extrabold
                                leading-tight
                            "
                        >
                            SmartBank
                            <br />
                            UPI Payments 📱
                        </h1>

                        <p
                            className="
                                text-slate-300
                                mt-6
                                text-lg
                                md:text-xl
                                leading-8
                            "
                        >
                            Transfer money instantly
                            with secure UPI system,
                            lightning-fast transactions,
                            and modern banking UI 🚀
                        </p>

                        {/* FEATURES 😎 */}

                        <div
                            className="
                                mt-10
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-5
                            "
                        >

                            <div
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-5
                                    hover:scale-105
                                    transition
                                    duration-300
                                "
                            >
                                <h2 className="text-2xl font-bold">
                                    ⚡ Fast Payments
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Instant UPI transfer
                                    in real time.
                                </p>
                            </div>

                            <div
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-5
                                    hover:scale-105
                                    transition
                                    duration-300
                                "
                            >
                                <h2 className="text-2xl font-bold">
                                    🔒 Secure UPI
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Protected banking
                                    with encrypted transfer.
                                </p>
                            </div>

                            <div
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-5
                                    hover:scale-105
                                    transition
                                    duration-300
                                "
                            >
                                <h2 className="text-2xl font-bold">
                                    📊 Smart Banking
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Modern UI with
                                    professional analytics.
                                </p>
                            </div>

                            <div
                                className="
                                    bg-white/10
                                    backdrop-blur-lg
                                    border
                                    border-white/10
                                    rounded-3xl
                                    p-5
                                    hover:scale-105
                                    transition
                                    duration-300
                                "
                            >
                                <h2 className="text-2xl font-bold">
                                    🚀 AI Powered
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    AI fraud protection
                                    for safer payments.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE 😎 */}

                    <div
                        className="
                            bg-white/10
                            backdrop-blur-xl
                            border
                            border-white/10
                            rounded-[35px]
                            shadow-2xl
                            p-5
                            md:p-10
                            text-white
                            animate-fadeSlide
                            animate-glow
                        "
                    >

                        <h1
                            className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                text-center
                                mb-3
                            "
                        >
                            UPI Payment 📱
                        </h1>

                        <p
                            className="
                                text-center
                                text-slate-300
                                mb-10
                            "
                        >
                            Send money instantly with UPI 🚀
                        </p>

                        {/* INPUT 😎 */}

                        <input
                            type="text"
                            placeholder="Enter UPI ID"
                            value={upiId}
                            onChange={(e) =>
                                setUpiId(e.target.value)
                            }
                            className="
                                w-full
                                p-4
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                outline-none
                                mb-5
                                text-white
                                placeholder:text-slate-400
                                focus:scale-[1.02]
                                transition
                            "
                        />

                        <input
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                            className="
                                w-full
                                p-4
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                outline-none
                                mb-8
                                text-white
                                placeholder:text-slate-400
                                focus:scale-[1.02]
                                transition
                            "
                        />

                        {/* BUTTON 😎 */}

                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="
                                w-full
                                py-4
                                rounded-2xl
                                text-xl
                                font-bold
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-500
                                hover:scale-105
                                transition
                                duration-300
                                shadow-lg
                                shadow-cyan-500/30
                            "
                        >

                            {loading
                                ? "Processing..."
                                : "Pay Now 🚀"}

                        </button>

                    </div>

                </div>

            </div>

        </>
    );
};

export default UpiPayment;