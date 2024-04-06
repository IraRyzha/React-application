import './AboutFurniture.css'
import furnitureDark from './image-about-dark.jpg'
import furnitureLight from './image-about-light.jpg'

function AboutFurniture() {
    return (
        <div className="about-furniture-section">
            <img src={furnitureDark} alt="furniture-image" className="furniture" />
            <div className="text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, excepturi amet?</p>
            </div>
            <img src={furnitureLight} alt="furniture-image" />
        </div>
    )
}

export default AboutFurniture;