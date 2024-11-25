import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="content head-content">
        <h1>
          <span
            style={{
              color: "#ff798f",
            }}
          >
            Paw
          </span>Clothes
        </h1>
        <span>We sell rare, exclusive products and clothing all over the world.</span>
        <a href="shop"><button className="btn-shop">View</button></a>
      </div>
    </>
  )
}

export default Home;