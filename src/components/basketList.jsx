import { BasketItem } from "./basketItem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incQuantity = Function.prototype, decQuantity = Function.prototype, } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + (el.price.finalPrice * el.quantity);
    }, 0);
    return (
        <div className="basket-modal">
            <div className="basket-header active white-text">
                Корзина
                <i className="material-icons basket-clear" 
                    onClick={handleBasketShow}>
                    clear
                </i>
            </div>
            
            <div className="basket-body">
                {order.length ? order.map((item) => (
                    <BasketItem 
                        key={item.mainId} 
                        removeFromBasket={removeFromBasket} 
                        incQuantity={incQuantity} 
                        decQuantity={decQuantity} 
                        {...item} 
                        price={item.price.finalPrice} 
                    />
                )) : <div className="collection-item">Корзина пуста</div>}
            </div>
            
            <div className="basket-footer active white-text">
                Общая стоимость заказа: {totalPrice} руб.
            </div>
        </div>
    );
}
export { BasketList };