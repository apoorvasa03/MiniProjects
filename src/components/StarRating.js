
// import {FaStar} from 'react-icons/fa'

import StarIcon from '@mui/icons-material/Star';

const StarRating = ({id, rating, onClick, onMouseEnter, onMouseLeave}) => {
     const starBorderOutlined = id <= rating ? 'star-yellow': 'star-grey'

    return (
        <div className='star-container'>
            <StarIcon  style={{ fontSize: 50 }}  onClick ={onClick} className={starBorderOutlined} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
         </div>
    );
}

export default StarRating