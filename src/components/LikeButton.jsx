import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";


function LikeButton() {
    // State to manage if the button is liked or not
    const [liked, setLiked] = useState(false);

    // Toggle liked state
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className={` rounded-full cursor-pointer ${liked ? 'text-blue-600 hover:bg-blue-100' : 'text-gray-800 hover:bg-gray-100'}`}>
            <AiOutlineLike
                className={`text-3xl m-2 rounded-full ${liked ? 'bg-blue-100 text-blue-800 ' : 'text-gray-600 '}`}
                onClick={toggleLike}
            />
        </div>
    );
}

export default LikeButton;
