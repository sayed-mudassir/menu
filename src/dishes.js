export const DishesList = ({selectedList})=>{
    return (
        <div className="dishes-list">
            {selectedList.map((dish)=>{
                return(
                <div className="dish-card">
                    <img src={dish.img}/>
                    <div>
                        <div className="title">
                            <b>{dish.title}</b>
                            <span>Rs. {dish.price}</span>
                        </div>
                        <p style={{color:"#868686"}}>{dish.desc}</p>
                    </div>
                </div>)
            })}
        </div>
    )
}
 