export const Filters = ({categoryList, selectedCategory, setCategory})=>{
    return (
        <div className="category-list">
            {categoryList.map((category)=>{
                return(<div className="category">
                    <input 
                        id = {category} 
                        type="radio" 
                        value={category} 
                        checked={category === selectedCategory}
                        name="category"
                        onChange={(e)=>{setCategory(e.target.value)}} />
                    <label htmlFor={category}>{category}</label>
                </div>)
            })}
        </div>
    )
}
// export default Filters;