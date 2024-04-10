import React from 'react';

const Sidebar = ({ onCuisineChange }) => {
    const handleCuisineChange = (e) => {
        onCuisineChange(e.target.value);
    };

    return (
        <aside className="sidebar">
            <h2>browse by...</h2>
            <section className="filter-section">
                <h3>cuisine</h3>
                <ul>
                    <li>
                        <input type="checkbox" id="lebanese" value="Lebanese" onChange={handleCuisineChange} />
                        <label htmlFor="lebanese">Lebanese</label>
                    </li>
                    <li>
                        <input type="checkbox" id="moroccan" value="Moroccan" onChange={handleCuisineChange} />
                        <label htmlFor="moroccan">Moroccan</label>
                    </li>
                    <li>
                        <input type="checkbox" id="italian" value="Italian" onChange={handleCuisineChange} />
                        <label htmlFor="italian">Moroccan</label>
                    </li>
                    {/* ... add other cuisines here */}
                </ul>
            </section>
            {/* ... add other sections here for diet and type */}
        </aside>
    );
};

export default Sidebar;