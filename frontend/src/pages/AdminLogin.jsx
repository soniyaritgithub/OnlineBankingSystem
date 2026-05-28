import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        username: "",

        password: ""

    });

    // HANDLE INPUT 😎

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    // ADMIN LOGIN 😎🔥

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/login/",

                formData

            );

            // SAVE TOKENS 😎

            localStorage.setItem(

                "token",

                response.data.access

            );

            localStorage.setItem(

                "refresh",

                response.data.refresh

            );

            alert("Admin Login Successful 🚀");

            navigate("/admin-dashboard");

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");

        }

    };

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <form
                onSubmit={handleLogin}
                style={{
                    width: "400px",
                    background: "#1e293b",
                    padding: "40px",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    boxShadow: "0px 0px 20px rgba(0,0,0,0.5)"
                }}
            >

                <h1
                    style={{
                        color: "white",
                        textAlign: "center"
                    }}
                >
                    Admin Login 🚀
                </h1>

                <input

                    type="text"

                    name="username"

                    placeholder="Enter Username"

                    onChange={handleChange}

                    style={{
                        padding: "15px",
                        borderRadius: "10px",
                        border: "none",
                        outline: "none"
                    }}
                />

                <input

                    type="password"

                    name="password"

                    placeholder="Enter Password"

                    onChange={handleChange}

                    style={{
                        padding: "15px",
                        borderRadius: "10px",
                        border: "none",
                        outline: "none"
                    }}
                />

                <button

                    type="submit"

                    style={{
                        padding: "15px",
                        borderRadius: "10px",
                        border: "none",
                        background: "#06b6d4",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "18px"
                    }}
                >

                    Login

                </button>

            </form>

        </div>
    );
};

export default AdminLogin;