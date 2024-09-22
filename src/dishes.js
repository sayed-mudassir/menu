export const DishesList = ({selectedList})=>{
    return (
        <div className="dishes-list">
            {selectedList.map((dish)=>{
                return(
                <div className="dish-card">
                    <img src={dish.img}/>
                    <div>
                        <div>
                            <b>{dish.title}</b>
                            <span>{dish.price}</span>
                        </div>
                        <p>{dish.desc}</p>
                    </div>
                </div>)
            })}
        </div>
    )
}
 