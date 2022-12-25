export const ProductComponent = ({name, manufacturer, photo}) => {
    return(
        <div>
            <p>{photo}</p>
            <div>
                <h2>{name}</h2>
                <b>{manufacturer}</b>
            </div>
        </div>
    )
}