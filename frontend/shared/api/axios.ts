import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use((req) => {
	req.params = {
		userId: localStorage.getItem('userId') || 0,
	};

	return req;
});

export default instance;
