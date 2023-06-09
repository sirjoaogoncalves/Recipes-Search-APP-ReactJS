import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import React from 'react';

function Recipe() {
	let params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');

	const fecthDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
		const detailData = await data.json();
		setDetails(detailData);
	};

	useEffect(() => {
		fecthDetails();
	}, [params.name]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt='' />
			</div>
			<Info>
				<Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
					Instructions
				</Button>
				<Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
					Ingredients
				</Button>
				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						<h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
					</div>
				)}
				
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map(ingredient => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
				
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column; /* Change flex-direction to column for mobile */
	align-items: center; /* Center align items for mobile */
	.active {
		background: linear-gradient(35deg, rgb(53, 50, 50), #2c2c2c);
		color: white;
	}
	h2 {
		margin-bottom: 2rem;
		text-align: center; /* Center align title for mobile */
	}
	img {
		width: 100%; /* Make image width 100% for mobile */
		max-width: 400px; /* Set max-width for image */
		margin-bottom: 2rem; /* Add margin bottom for spacing */
	}
	li {
		font-size: 1.5rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
`;
const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: white;
	border: 2px solid black;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 10rem;
	@media (max-width: 768px) {
		margin-left: 0; /* Remove margin left for mobile */
	}
`;


export default Recipe;
