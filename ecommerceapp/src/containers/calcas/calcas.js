import React, {useState} from "react";
import "./calcas.css";


import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Calca from "../../assets/images/calcapreta.jpg";

function Calcas(){

    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);


    return(
        <div>
            <Header items={cartItems}/>
             <main>
            <section className="calcassection">
                <h3 className="calcastext">Calças</h3>

                <div className="calcasproductarea">

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                </div>

            </section>

        </main>

        <Footer/>
        </div>
       
    )
}


export default Calcas;