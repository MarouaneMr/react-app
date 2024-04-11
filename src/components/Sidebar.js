import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onCuisineChange }) => {
    const handleCuisineChange = (e) => {
        onCuisineChange(e.target.value);
    };

    return (
        <aside className="sidebar">
            <h2>browse by...</h2>
            <section className="filter-section">
                <h3>cuisine</h3>
                <div className="custom-checkbox">
                    <input type="checkbox" id="lebanese" value="Lebanese" onChange={handleCuisineChange} />
                    <label htmlFor="lebanese"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="moroccan" value="Moroccan" onChange={handleCuisineChange} />
                    <label htmlFor="moroccan"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="italian" value="Italian" onChange={handleCuisineChange} />
                    <label htmlFor="italian"></label>
                </div>
            </section>
            <section className="filter-section">
                <h3>diet</h3>
                <div className="custom-checkbox">
                    <input type="checkbox" id="vegetarian" value="Vegetarian" onChange={handleCuisineChange} />
                    <label htmlFor="vegetarian"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="vegan" value="Vegan" onChange={handleCuisineChange} />
                    <label htmlFor="vegan"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="keto" value="Keto" onChange={handleCuisineChange} />
                    <label htmlFor="keto"></label>
                </div>
            </section>
            <section className="filter-section">
                <h3>type</h3>
                <div className="custom-checkbox">
                    <input type="checkbox" id="breakfast" value="Breakfast" onChange={handleCuisineChange} />
                    <label htmlFor="breakfast"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="lunch" value="Lunch" onChange={handleCuisineChange} />
                    <label htmlFor="lunch"></label>
                </div>
                <div className="custom-checkbox">
                    <input type="checkbox" id="dinner" value="Dinner" onChange={handleCuisineChange} />
                    <label htmlFor="dinner"></label>
                </div>
            </section>
            {/* ... add other sections here for additional filters */}
        </aside>
    );
};

export default Sidebar;
