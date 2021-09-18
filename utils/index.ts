import {useState} from 'react';

export const useInputChange = () => {
	const [input, setInput] = useState({});

	// Making inputs being handled in just one function to make it scalable if needed
	// link: https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn
	const handleInputChange = (event: any) =>
		setInput({
			...input,
			[event.currentTarget.name]: event.currentTarget.value,
		});

	return [input, handleInputChange];
};