import "./styles/home.css";

function Home(){
    return(
        <div className="home">
        <h1>Welcome To Whole Foods</h1>
        {/* image in the public folder*/}
        <img className="img-1" src="/images/banana.jpg" alt=""/>
        <div className="info">
            <h2>Whole Foods</h2>
            <h5>Your Favorite Produce In One Place!</h5>
        </div>
        </div>
    );
}
export default Home;