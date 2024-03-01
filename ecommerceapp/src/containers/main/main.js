import React, {useState} from "react";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import "./main.css";


import Cart from "../../components/cart/cart.js";

import Blusa from "../../assets/images/blusabranca.avif";
import BlusaPreta from "../../assets/images/camisapreta.png";
import Delivery from "../../assets/icons/delivery.png";
import Discount from "../../assets/icons/discount.png";
import Support from "../../assets/icons/support.png";



function Main(){
    const [cartItems, setCartItems] = useState([]);
    const [cartId, setCartId] = useState(1);

    const addToCart = (productName, productPrice, productImage) =>{
        const newItem = {
            id: cartId,
            name: productName,
            price: productPrice,
            image: productImage
        };
        setCartItems([...cartItems, newItem]);
        setCartId(cartId + 1);
    }



    return(
        <div>
            <Header cartItems={cartItems}/>
            
            <main>
                <section className="bannerarea">
                    <div className="banner">
                    <div className="bannertext">
                        <h1></h1> 
                            <span className="anim"></span>
                        
                        <button>Comprar agora</button>
                    </div>
                    </div>
                </section>
            

            <div className="mainbar">
                <div className="mainarea">
                    <div className="ic1"><img src={Delivery} alt=""></img>Entrega rápida para todo o Brasil</div>
                    <div className="ic1"><img src={Discount} alt=""></img>Ganhe ofertas e descontos nos produtos</div>
                    <div className="ic1"><img src={Support} alt=""></img>Suporte funcionando 24/7</div>
                </div>
            </div>

            <section>
                <div className="products">
                    <h3 className="productpromotion">Promoções do mês</h3>
                    <div className="productarea">

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={BlusaPreta} alt="blusa"></img>
                            <h4>Blusa preta Masculina</h4>
                            <p>R$ 100,00</p>
                            <button onClick={() => addToCart("Blusa preta Masculina", 100, BlusaPreta)}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                        <div className="product">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                            <button onClick={addToCart}>Comprar</button>
                        </div>

                    </div>
                </div>
            </section>
            </main>
            <Footer/>

           
        </div>
        
    )
}

export default Main;