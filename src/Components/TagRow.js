import React from 'react';

const TagRow = ({ tags }) => {
    if (!tags || tags.length === 0) {
        return null;
    }
    
    return (
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
                <div key={index} className='rounded-full text-sm font-regular bg-espresso-100 px-4 py-2 w-fit'>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagRow;