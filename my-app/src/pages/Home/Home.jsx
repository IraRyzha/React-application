import './Home.css'
import WaysToDecorate from "../../components/WaysToDecorate/WaysToDecorate";
import AboutFurniture from "../../components/AboutFurniture/AboutFurniture";

function Home() {
    return (
        <header>
            <div className="image-section"></div>
            <WaysToDecorate />
            <AboutFurniture />
        </header>
    )
}

export default Home;