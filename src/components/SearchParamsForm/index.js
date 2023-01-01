import React from "react";
import "./SearchParamsForm.css"

export default function SearchParamsForm({ HandleChange, HandleSumbit, typOfaccesibility, accessibility, customPrice, price }) {
    
    return (
        <form className="searchForm" onChange={HandleChange} onSubmit={HandleSumbit}>
            <div className="input">
                <div className="parent-input">
                    <label htmlFor="all-options">Types:</label>
                    <select className="all-options">
                        <option value='type:all' className="type-option">All</option>
                        <option value='type:busywork' className="type-option">Busywork</option>
                        <option value='type:social' className="type-option">Social</option>
                        <option value='type:education' className="type-option">Education</option>
                        <option value='type:relaxation' className="type-option">Relaxation</option>
                        <option value='type:cooking' className="type-option">Cooking</option>
                        <option value='type:recreational' className="type-option">Recreational</option>
                        <option value='type:charity' className="type-option">Charity</option>
                        <option value='type:diy' className="type-option">Diy</option>
                        <option value='type:music' className="type-option">Music</option>
                    </select>
                </div>
                <div className="parent-input">
                    <label htmlFor="all-options">Accesibility:</label>
                    <select className="all-options">
                        <option value='accessibility:all' className="type-option">All</option>
                        <option value='accessibility:custom' className="type-option">Customize</option>
                    </select>

                    {(typOfaccesibility === 'custom') &&
                        <div>
                            <label htmlFor='accessibility'>{accessibility}</label>
                            <input className="all-input-range" name="accessibility" step='0.1' type='range' defaultValue='0.5' min='0' max='1' ></input>
                        </div>
                    }
                </div>
                <div className="parent-input">
                    <label htmlFor="all-options">Price:</label>
                    <select className="all-options">
                        <option value='price:all' className="type-option">All</option>
                        <option value='price:custom' className="type-option">Custom</option>
                    </select>

                    {(customPrice === 'custom') &&
                        <div>
                            <label htmlFor='price'>{price}</label>
                            <input className="all-input-range" name="price" step='0.1' type='range' defaultValue='0' min='0' max='1' ></input>
                        </div>
                    }
                </div>
            </div>
            <div className="search">
                <button className="search-button">Give me a new idea!</button>
            </div>
        </form>
    )
}