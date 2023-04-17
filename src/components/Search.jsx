import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate('/searched/' + input);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<InputContainer>
				<SearchIcon />
				<InputField onChange={e => setInput(e.target.value)} type='text' value={input} placeholder='Search...' />
			</InputContainer>
		</FormStyle>
	);
};

const FormStyle = styled.form`
	margin: 0rem 20rem;

	@media (max-width: 1296px) {
		margin: 0rem 1rem;
		margin-top: 60px;
	}
`;

const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;

const InputField = styled.input`
	border: none;
	background: linear-gradient(35deg, rgb(53, 50, 50), #2c2c2c);
	font-size: 1.4rem; /* Reduced font size */
	color: white;
	padding: 0.8rem 2rem; /* Reduced padding */
	border: none;
	border-radius: 1rem;
	outline: none;
	width: 100%;

	::placeholder {
		color: #aaa;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem; /* Further reduced font size */
		padding: 0.6rem 1.6rem; /* Further reduced padding */
	}
`;

const SearchIcon = styled(FaSearch)`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	color: white;
	font-size: 2rem;

	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

export default Search;
