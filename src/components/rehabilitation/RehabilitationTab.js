import "../../scss/Rehabilitation.scss";

export default function RehabilitationTab({handleCategoryChange, category}){

    return(
        <div className="RehabilitationTab-container">
            <div className="radio">
                <div className="radio__1">
                    <input id="radio-1" type="radio" name="radio" value="All" onClick={(e)=>handleCategoryChange(e.target.value)}/>
                    <label for="radio-1"></label>
                </div>
                <div className="radio__2">
                    <input id="radio-2" type="radio" name="radio" value="Upper" onClick={(e)=>handleCategoryChange(e.target.value)}/>
                    <label for="radio-2"></label>
                </div>
                <div className="radio__3">
                    <input id="radio-3" type="radio" name="radio" value="Lower"onClick={(e)=>handleCategoryChange(e.target.value)} />
                    <label for="radio-3"></label>
                </div>
            </div>
            <div className="radioValue">
                <div className={`radioAll ${category==="All" ? "active" : ""}`}>
                    <h2>All</h2>
                    <p>전체</p>
                </div>
                <div className={`radioUpper ${category==="Upper" ? "active" : ""}`}>
                    <h2>Upper</h2>
                    <p>상체</p>
                </div>
                <div className={`radioLower ${category==="Lower" ? "active" : ""}`}>
                    <h2>Lower</h2>
                    <p>하체</p>
                </div>
            </div>
        </div>
    )
}