import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const starRating = (rate) => {
  return Array(5)
    .fill(<AiFillStar />)
    .fill(<AiOutlineStar />, Math.round(rate));
};
