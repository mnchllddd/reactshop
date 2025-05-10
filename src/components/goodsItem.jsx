function GoodsItem(props) {
    const {
        mainId: id,
        displayName,
        price: { finalPrice: price },
        displayAssets,
        description,
        addToBasket = Function.prototype,
    } = props;
    const imageUrl = displayAssets?.[0]?.full_background;
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={imageUrl} alt={displayName} />
                <span className="card-title black-text">{displayName}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn deep-purple accent-1" onClick={() => addToBasket(props)}>Купить</button>
                <span className="right">{price} руб.</span>
            </div>
        </div>
    );
}
export { GoodsItem };