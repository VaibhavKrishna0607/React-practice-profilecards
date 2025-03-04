
import React, {useState} from 'react'
const Button = ()=>{
   
        const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: liked ? 'red' : 'gray'
      }}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};
    
export default Button;

