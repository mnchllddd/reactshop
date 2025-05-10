function BasketItem(props) {
    const { mainId, displayName, price, quantity, removeFromBasket, incQuantity, decQuantity } = props;
    
    return (
        <ul className="collection">
            <li className="collection-item">
                {displayName} <i className="material-icons basket-quantity " onClick={() => decQuantity(mainId)}>remove</i> x {quantity}<i className="material-icons basket-quantity deep-purple-text text-lighten-2" onClick={() => incQuantity(mainId)}>add</i> = {price * quantity} руб.
                <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
                    <i className="material-icons basket-delete ">clear</i>
                </span>
            </li>
        </ul>
    );
}
export { BasketItem };