import { useEffect, useState } from "react";

import axios from "axios";

const DebitCard = () => {

    const [cardData, setCardData] = useState({});

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
            box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }

        50% {
            box-shadow: 0 0 45px rgba(59,130,246,0.5);
        }

        100% {
            box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }
    }

    .animate-fadeSlide {

        animation: fadeSlide 1s ease;
    }

    .animate-glow {

        animation: glow 3s infinite;
    }

    `;

    const fetchCard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(

                "http://127.0.0.1:8000/api/profile/",

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCardData(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        const loadCard = async () => {

            await fetchCard();

        };

        loadCard();

    }, []);

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
                            Debit Card 💳
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
                            Experience premium digital
                            banking with secure debit
                            card access, instant payments,
                            and futuristic banking UI 🚀
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
                                    🔒 Secure Card
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Encrypted banking
                                    with maximum protection.
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
                                    ⚡ Fast Payments
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Instant transactions
                                    across all platforms.
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
                                    🌍 Global Access
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    Use your card anywhere
                                    around the world.
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
                                    🚀 Smart Banking
                                </h2>

                                <p className="text-slate-300 mt-2">
                                    AI-powered next-gen
                                    banking experience.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* CARD 😎 */}

                    <div
                        className="
                            p-4
                            md:p-8
                            animate-fadeSlide
                            animate-glow
                        "
                        style={{

                            width: "100%",

                            maxWidth: "450px",

                            height: "260px",

                            borderRadius: "25px",

                            color: "white",

                            position: "relative",

                            background:
                                "linear-gradient(135deg, #06b6d4, #3b82f6, #7c3aed)",

                            boxShadow:
                                "0 0 40px rgba(59,130,246,0.5)"
                        }}
                    >

                        {/* BANK NAME 😎 */}

                        <h2
                            className="text-2xl md:text-4xl font-bold"
                        >
                            SmartBank 💳
                        </h2>

                        {/* CHIP 😎 */}

                        <div
                            style={{
                                width: "60px",
                                height: "45px",
                                background: "#facc15",
                                borderRadius: "10px",
                                marginTop: "20px"
                            }}
                        />

                        {/* CARD NUMBER 😎 */}

                        <h1
                            className="text-xl md:text-3xl font-bold"
                            style={{
                                marginTop: "30px",
                                letterSpacing: "4px"
                            }}
                        >
                            {cardData.card_number ||
                                "XXXX XXXX XXXX XXXX"}
                        </h1>

                        {/* BOTTOM SECTION 😎 */}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "30px",
                                gap: "10px",
                                flexWrap: "wrap"
                            }}
                        >

                            <div>

                                <p
                                    style={{
                                        fontSize: "12px",
                                        opacity: 0.8
                                    }}
                                >
                                    CARD HOLDER
                                </p>

                                <h3 className="text-sm md:text-lg font-bold">
                                    {cardData.username || "USER"}
                                </h3>

                            </div>

                            <div>

                                <p
                                    style={{
                                        fontSize: "12px",
                                        opacity: 0.8
                                    }}
                                >
                                    EXPIRES
                                </p>

                                <h3 className="text-sm md:text-lg font-bold">
                                    {cardData.expiry_date || "12/30"}
                                </h3>

                            </div>

                            <div>

                                <p
                                    style={{
                                        fontSize: "12px",
                                        opacity: 0.8
                                    }}
                                >
                                    CVV
                                </p>

                                <h3 className="text-sm md:text-lg font-bold">
                                    {cardData.cvv || "123"}
                                </h3>

                            </div>

                        </div>

                        {/* VISA 😎 */}

                        <h2
                            className="text-xl md:text-4xl font-bold"
                            style={{
                                position: "absolute",
                                bottom: "20px",
                                right: "30px",
                                opacity: 0.9
                            }}
                        >
                            VISA
                        </h2>

                    </div>

                </div>

            </div>

        </>
    );
};

export default DebitCard;