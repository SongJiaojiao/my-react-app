import React from 'react';

const TagRow = ({ tags }) => {
    return (
        <div className="tag-row">
            {tags.map((tag, index) => (
                <div key={index} className="tag">
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagRow;