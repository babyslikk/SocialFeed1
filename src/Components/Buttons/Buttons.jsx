import { useState } from "react";
import '../../style/Main.css';


const Buttons = (props) => {
    const [likeButton, setLikeButton] = useState('inactive');
    const [dislikeButton, setDislikeButton] = useState('inactive');
    const handleClick = (event) => {
      switch (event.target.name) {
        case 'likeButton':
          if (likeButton === 'inactive') {
            setLikeButton('active');
            setDislikeButton('inactive');
          } else if (likeButton === 'active') {
            setLikeButton('inactive');
          }
          break;
        case "dislikeButton":
          if (dislikeButton === 'inactive') {
            setDislikeButton('active');
            setLikeButton('inactive');
          } else if (dislikeButton === 'active') {
            setDislikeButton('inactive');
          }
          break;
        default:
          break;
      }
      console.log(event.target.name + likeButton);
    };
  
    return (
      <div className='Buttons'>
      <br/>
        <button
          className={likeButton}
          onClick={handleClick}
          name="likeButton"
          id="likeButton"
        >
          Like<span>{'\u{1F64c}'}</span>
        </button>
  
        <button
          className={dislikeButton}
          onClick={handleClick}
          name="dislikeButton"
          id="dislikeButton"
        >
          Dislike<span>{'\u{1F47F}'}</span> 
        </button>
      </div>
    );
  };
  
  export default Buttons;
  
