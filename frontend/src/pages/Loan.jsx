import { useState } from "react";

import axios from "axios";

const LoanPage = () => {

    const [loanAmount, setLoanAmount] = useState("");

    const [emi, setEmi] = useState("");

    const [dueDate, setDueDate] = useState("");

    const [loading, setLoading] = useState(false);

    // SMOOTH FADE ANIMATION 😎🔥

    const fadeAnimation = `
    @keyframes fadeIn {

        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fadeIn {

        animation: fadeIn 1s ease;
    }
    `;

    const handleLoan = async () => {

    try {

        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await axios.post(

            "https://onlinebankingsystem-qguw.onrender.com/api/create-loan",

            {

                amount: Number(loanAmount),

                salary: Number(emi),

                date: dueDate

            },

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        alert("Loan Applied Successfully 🚀");

        console.log(response.data);

        setLoanAmount("");

        setEmi("");

        setDueDate("");

    } catch(err){

        console.log(err.response?.data);

        alert(

            err.response?.data?.message ||

            "Loan Failed ❌"

        );

    } finally {

        setLoading(false);

    }

};

    return (

        <>

            <style>{fadeAnimation}</style>

            <div
                className="min-h-screen flex items-center justify-center px-4 py-10"
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
                            animate-pulse
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
                            Loan System 🏦
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
                            Apply for instant loans with
                            secure banking experience,
                            low interest rates, and fast
                            approval system 🚀
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
                                    ⚡ Fast Approval
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Instant processing
                                    with AI banking system.
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
                                    🔒 Secure Banking
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Fully protected and
                                    encrypted transactions.
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
                                    📊 Smart EMI
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Flexible EMI plans
                                    for all users.
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
                                    🚀 Instant Transfer
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Real-time banking
                                    and fast loan access.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE FORM 😎 */}

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
                            animate-fadeIn
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
                            Apply Loan 💰
                        </h1>

                        <p
                            className="
                                text-center
                                text-slate-300
                                mb-10
                            "
                        >
                            Fill details to apply instantly 🚀
                        </p>

                        {/* INPUT 😎 */}

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
                            placeholder="Enter EMI Amount"
                            value={emi}
                            onChange={(e) =>
                                setEmi(e.target.value)
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
                            type="date"
                            value={dueDate}
                            onChange={(e) =>
                                setDueDate(e.target.value)
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
                                focus:scale-[1.02]
                                transition
                            "
                        />

                        {/* BUTTON 😎 */}

                        <button
                            onClick={handleLoan}
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
                                : "Apply Loan 🚀"}

                        </button>

                    </div>

                </div>

            </div>

        </>
    );
};

export default LoanPage;