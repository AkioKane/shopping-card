import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="head-content">
        <h1>
          <span
            style={{
              color: "#ff798f",
            }}
          >
            Paw
          </span>Store
        </h1>
        <span>We sell rare, exclusive products and clothing all over the world.</span>
        <Link to={"shop"}><button className="btn-shop">View</button></Link>
      </div>
    </>
  )
}

export default Home;