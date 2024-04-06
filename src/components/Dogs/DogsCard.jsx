import { useContext, useState } from "react";
import "./dogs.css"
import { CartContext } from "../../Contexts/CartContext";
const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const {addToCart, setTotal} = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    const handleclick = () => {
        setIsAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,   
        };
        addToCart((item) => [...item,newItems]);
        setTotal((total) => total += Number(price));
    }
    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img className="dogs-img" src={imageUrl} alt={`pickture of ${name}`}/>
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}$</div>
            {isAdded ? (
                <button disabled className="dogs-btn">ADDED</button>
            ) : (
                <button className="dogs-btn" onClick={handleclick}>ADD TO CART</button>
            ) }
            
        </section>
        </>
     );
}
 
export default DogsCard;