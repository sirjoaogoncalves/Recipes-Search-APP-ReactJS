import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
	return (
		<List>
			<StyledLink to={'/cuisine/Italian'}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</StyledLink>
			<StyledLink to={'/cuisine/American'}>
				<FaHamburger />
				<h4>American</h4>
			</StyledLink>
			<StyledLink to={'/cuisine/Thai'}>
				<GiNoodles />
				<h4>Thai</h4>
			</StyledLink>
			<StyledLink to={'/cuisine/Chinese'}>
				<GiChopsticks />
				<h4>Chinese</h4>
			</StyledLink>
		</List>
	);
};

const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(35deg, rgb(53, 50, 50), #2c2c2c);
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(0.8);
	h4 {
		color: white;
		font-size: 1rem;
	}
	svg{
		color: white;
		font-size: 1.8rem
	}
	&.active{
		background: linear-gradient(to right, rgb(190, 45, 45), #ce7979);
		svg{
			color: white;
		}
		h4{
			color: white;
		}
	}
`

export default Category;
