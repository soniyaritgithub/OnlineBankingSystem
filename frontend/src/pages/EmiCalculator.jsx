import { useState } from "react";

import axios from "axios";

const EmiCalculator = () => {

    const [loanAmount, setLoanAmount] = useState("");

    const [interestRate, setInterestRate] = useState("");

    const [tenure, setTenure] = useState("");

    const [emi, setEmi] = useState("");

    const [loading, setLoading] = useState(false);

    // UNIQUE PROFESSIONAL ANIMATION 😎🔥

    const animationStyle = `

    @keyframes zoomFade {

        0% {
            opacity: 0;
            transform: scale(0.9);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes floatCard {

        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-10px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    @keyframes shine {

        0% {
            background-position: -200px;
        }

        100% {
            background-position: 200px;
        }
    }

    /* LIGHT BUBBLE ANIMATION 😎🔥 */

    @keyframes bubbleFloat {

        0% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
        }

        50% {
            transform: translateY(-40px) scale(1.1);
            opacity: 0.6;
        }

        100% {
            transform: translateY(-80px) scale(1);
            opacity: 0;
        }
    }

    .bubble {

        position: absolute;

        border-radius: 9999px;

        background: rgba(255,255,255,0.08);

        backdrop-filter: blur(10px);

        animation: bubbleFloat linear infinite;
    }

    .animate-zoomFade {

        animation: zoomFade 1s ease;
    }

    .animate-float {

        animation: floatCard 4s ease-in-out infinite;
    }

    .glass-shine {

        position: relative;
        overflow: hidden;
    }

    .glass-shine::before {

        content: "";

        position: absolute;

        top: 0;
        left: -200px;

        width: 120px;
        height: 100%;

        background:
            linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.2),
                transparent
            );

        animation: shine 4s linear infinite;
    }

    `;

    const calculateEmi = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await axios.post(

                "https://onlinebankingsystem-qguw.onrender.com/api/calculate-emi",

                {
                    loan_amount: loanAmount,
                    interest_rate: interestRate,
                    tenure: tenure
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            setEmi(response.data.monthly_emi);

        } catch (error) {

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
                    px-4
                    py-10
                    flex
                    justify-center
                    items-center
                    relative
                    overflow-hidden
                "
                style={{
                    background:
                        "linear-gradient(to right, #020617, #0f172a, #1e293b)"
                }}
            >

                {/* LIGHT BUBBLES 😎🔥 */}

                <div
                    className="bubble"
                    style={{
                        width: "120px",
                        height: "120px",
                        left: "5%",
                        bottom: "-100px",
                        animationDuration: "10s"
                    }}
                />

                <div
                    className="bubble"
                    style={{
                        width: "80px",
                        height: "80px",
                        left: "20%",
                        bottom: "-120px",
                        animationDuration: "7s",
                        animationDelay: "1s"
                    }}
                />

                <div
                    className="bubble"
                    style={{
                        width: "150px",
                        height: "150px",
                        right: "10%",
                        bottom: "-150px",
                        animationDuration: "12s"
                    }}
                />

                <div
                    className="bubble"
                    style={{
                        width: "60px",
                        height: "60px",
                        right: "30%",
                        bottom: "-100px",
                        animationDuration: "6s",
                        animationDelay: "2s"
                    }}
                />

                <div
                    className="bubble"
                    style={{
                        width: "100px",
                        height: "100px",
                        left: "50%",
                        bottom: "-120px",
                        animationDuration: "9s",
                        animationDelay: "3s"
                    }}
                />

                {/* MAIN CONTAINER 😎 */}

                <div
                    className="
                        w-full
                        max-w-7xl
                        grid
                        lg:grid-cols-2
                        gap-10
                        items-center
                        relative
                        z-10
                    "
                >

                    {/* LEFT SIDE 😎 */}

                    <div
                        className="
                            text-white
                            animate-zoomFade
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
                            EMI Calculator 📊
                        </h1>

                        <p
                            className="
                                mt-6
                                text-slate-300
                                text-lg
                                md:text-xl
                                leading-8
                            "
                        >
                            Calculate smart monthly EMI
                            with futuristic banking UI,
                            AI-powered finance tools,
                            and lightning-fast processing 🚀
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
                                    ⚡ Instant EMI
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Get EMI instantly
                                    with real-time calculation.
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
                                    📊 Smart Analytics
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Advanced financial
                                    insights for loans.
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
                                    🔒 Secure System
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Fully encrypted
                                    banking calculations.
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
                                    🚀 AI Finance
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Next-gen AI powered
                                    finance experience.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE 😎 */}

                    <div
                        className="
                            animate-zoomFade
                            animate-float
                            glass-shine
                            bg-white/10
                            backdrop-blur-xl
                            border
                            border-white/10
                            rounded-[35px]
                            shadow-2xl
                            p-5
                            md:p-10
                            text-white
                        "
                    >

                        {/* TITLE 😎 */}

                        <h1
                            className="
                                text-3xl
                                md:text-5xl
                                font-bold
                                text-center
                                mb-3
                            "
                        >
                            EMI Calculator 📊
                        </h1>

                        <p
                            className="
                                text-center
                                text-slate-300
                                mb-10
                            "
                        >
                            Calculate your monthly EMI instantly 🚀
                        </p>

                        {/* INPUTS 😎 */}

                        <input
                            type="number"
                            placeholder="Enter Loan Amount"
                            value={loanAmount}
                            onChange={(e) =>
                                setLoanAmount(e.target.value)
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
                            placeholder="Interest Rate (%)"
                            value={interestRate}
                            onChange={(e) =>
                                setInterestRate(e.target.value)
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
                            placeholder="Loan Tenure (Months)"
                            value={tenure}
                            onChange={(e) =>
                                setTenure(e.target.value)
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
                            onClick={calculateEmi}
                            disabled={loading}
                            className="
                                w-full
                                py-4
                                rounded-2xl
                                text-lg
                                md:text-xl
                                font-bold
                                bg-gradient-to-r
                                from-cyan-500
                                via-blue-500
                                to-indigo-500
                                hover:scale-105
                                transition
                                duration-300
                                shadow-lg
                                shadow-cyan-500/30
                            "
                        >

                            {loading
                                ? "Calculating..."
                                : "Calculate EMI 🚀"}

                        </button>

                        {/* RESULT 😎 */}

                        {emi && (

                            <div
                                className="
                                    mt-10
                                    bg-gradient-to-r
                                    from-cyan-500
                                    to-blue-600
                                    rounded-3xl
                                    p-6
                                    text-center
                                    animate-zoomFade
                                "
                            >

                                <h2
                                    className="
                                        text-2xl
                                        font-bold
                                        mb-3
                                    "
                                >
                                    Monthly EMI 😎
                                </h2>

                                <h1
                                    className="
                                        text-4xl
                                        md:text-6xl
                                        font-extrabold
                                    "
                                >
                                    ₹{emi}
                                </h1>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </>
    );
};

export default EmiCalculator;