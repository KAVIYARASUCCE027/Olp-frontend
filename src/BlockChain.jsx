import "./BlockChain.css";
import { Link } from "react-router";

const BlockChain = () => {
  return (
    <div className="container">
      <h1 className="heading">Blockchain Courses</h1>

      <div className="courses">
        <div className="card">
          <img src="./bc.jpeg" alt="Blockchain Basics" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Blockchain Basics</h2>
            <Link to="/pay">Pay</Link>
            <p className="card-description">
              Learn the fundamentals of blockchain technology.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./iot.jpeg" alt="Smart Contracts" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Smart Contracts</h2>
            <Link to="/pay">Pay</Link>
            <p className="card-description">
              Dive deep into smart contract development.
            </p>
          </div>
        </div>

        <div className="card">
          <img src="./bc.jpeg" alt="Ethereum Development" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Ethereum Development</h2>
            <Link to="/pay">Pay</Link>
            <p className="card-description">
              Build decentralized apps on the Ethereum platform.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h2 className="footer-heading">Contact Our Tutors</h2>
        <ul className="tutors-list">
          <li className="tutor-item">
            Alice Johnson - <a href="mailto:alice.johnson@example.com">alice.johnson@example.com</a>
          </li>
          <li className="tutor-item">
            Bob Smith - <a href="mailto:bob.smith@example.com">bob.smith@example.com</a>
          </li>
          <li className="tutor-item">
            Charlie Brown - <a href="mailto:charlie.brown@example.com">charlie.brown@example.com</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default BlockChain;
