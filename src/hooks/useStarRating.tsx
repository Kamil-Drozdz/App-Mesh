import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const useStarRating = rate => {
	const stars: JSX.Element[] = [];
    
	for (let i = 0; i < 5; i++) {
		if (i < Math.round(rate)) {
			stars.push(<AiFillStar key={i} />);
		} else {
			stars.push(<AiOutlineStar key={i} />);
		}
	}

	return stars;
};

