import React from "react";

const SearchPanel = () => {

    const seachText = 'Type here to seach';
    const seachStyle = {
        fontSize: '20px'
    };

    return (
        <input
            style={seachStyle}
            placeholder={seachText}/>
    );
};

export default SearchPanel;