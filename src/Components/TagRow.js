import React from 'react';

const TagRow = ({ tags }) => {
    return (
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
                <div key={index} className='rounded-full bg-espresso-100 px-4 py-2 w-fit'>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagRow;