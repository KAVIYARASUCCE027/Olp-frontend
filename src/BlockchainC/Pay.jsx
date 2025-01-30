import React, { useState } from 'react';
import axios from 'axios';

// Helper function to handle course enrollment
const enrollCourse = async (email, courseName) => {
    try {
        const response = await axios.post(
            `https://onlinelearningplatform-2.onrender.com/api/payment`,
            { email, courseName }
        );
        return response.data;
    } catch (error) {
        console.error("Error enrolling user:", error);
        throw new Error("Failed to enroll. Please try again.");
    }
};

const Pay = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [password, setPassword] = useState('');
    const [coursename, setCoursename] = useState('');
    const [enrollmentStatus, setEnrollmentStatus] = useState(''); // State to track enrollment status

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Payment details submitted:", { name, email, cardNumber, password });

        try {
            
            const enrollmentResponse = await enrollCourse(email, coursename);
            console.log("User enrolled successfully:", enrollmentResponse);
            setEnrollmentStatus("You have successfully enrolled in the course!");
        } catch (error) {
            setEnrollmentStatus(error.message); 
        }
    };

    const containerStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px',
        maxWidth: '100%',
        margin: '0 auto',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#333',
        fontSize: '28px',
        marginBottom: '10px',
    };

    const subheadingStyle = {
        textAlign: 'center',
        color: '#555',
        fontSize: '18px',
        marginBottom: '20px',
    };

    const formDivStyle = {
        marginBottom: '15px',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '14px',
        color: '#555',
        marginBottom: '5px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        outline: 'none',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const statusStyle = {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '16px',
        color: enrollmentStatus.startsWith("Failed") ? 'red' : 'green',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>PAYMENT PORTAL</h1>
            <h2 style={subheadingStyle}>Complete Your Purchase</h2>
            <form onSubmit={handleSubmit}>
                <div style={formDivStyle}>
                    <label style={labelStyle}>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formDivStyle}>
                    <label style={labelStyle}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formDivStyle}>
                    <label style={labelStyle}>Course Name</label>
                    <input
                        type="text"
                        value={coursename}
                        onChange={(e) => setCoursename(e.target.value)}
                        placeholder="Enter your course"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formDivStyle}>
                    <label style={labelStyle}>Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Enter your card number"
                        style={inputStyle}
                        required
                    />
                </div>
                <div style={formDivStyle}>
                    <label style={labelStyle}>Password</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ENTER YOUR PIN"
                        style={inputStyle}
                        required
                    />
                </div>
               
                <div style={formDivStyle}>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
                    >
                        Enroll
                    </button>
                </div>
            </form>
            {enrollmentStatus && <div style={statusStyle}>{enrollmentStatus}</div>} {/* Display status */}
        </div>
    );
};

export default Pay;
