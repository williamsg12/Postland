const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://howling-nightmare-76061.herokuapp.com/';

export default API_URL;
