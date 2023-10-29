import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const starRating = (rate:number) => {
  return Array(5)
    .fill(<AiFillStar />)
    .fill(<AiOutlineStar />, Math.round(rate));
};
