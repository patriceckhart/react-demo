const FetchData = async (endpoint, method, headers = false, params = false, body = false, formData = false) => {

	let requestOptions = {
		method: method,
		redirect: 'follow'
	};

	const requestHeaders = new Headers();

	if(headers) {
		for (let i in headers) {
			requestHeaders.append(i, headers[i]);
		}
	}

	const csrfToken = document.querySelector('[data-csrf]').dataset.csrf;

	if(csrfToken) {
		requestHeaders.append('X-Flow-Csrftoken', csrfToken);
	}

	requestHeaders.append('Content-Type', 'application/json');
	requestOptions.headers = requestHeaders;

	let parameters = '';
	if(params) {
		let paramIterator = 0;
		for (let n in params) {
			parameters = parameters + (paramIterator === 0 ? '?' : '&') + n + '=' + params[n];
			paramIterator = paramIterator + 1;
		}
	}

	if(formData) {
		const update = (data, keys, value) => {
			if (keys.length === 0) {
				return value;
			}
			let key = keys.shift();
			if (!key) {
				data = data || [];
				if (Array.isArray(data)) {
					key = data.length;
				}
			}
			let index = +key;
			if (!isNaN(index)) {
				data = data || [];
				key = index;
			}
			data = data || {};
			data[key] = update(data[key], keys, value);
			return data;
		}
		const serializeForm = (form) => {
			return Array.from((new FormData(form)).entries())
				.reduce((data, [field, value]) => {
					let [_, prefix, keys] = field.match(/^([^\[]+)((?:\[[^\]]*\])*)/);

					if (keys) {
						keys = Array.from(keys.matchAll(/\[([^\]]*)\]/g), m => m[1]);
						value = update(data[prefix], keys, value);
					}
					data[prefix] = value;
					return data;
				}, {});
		}
		requestOptions.body = JSON.stringify(serializeForm(body));
	} else {
		if(body) {
			requestOptions.body = JSON.stringify(body);
		}
	}

	return fetch(endpoint + parameters, requestOptions)
		.then((response) => response && response.json())
		.catch(error => console.log('error', error));
}

export default FetchData;
