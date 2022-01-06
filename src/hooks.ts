import cookie from 'cookie';

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
	if (request.headers.cookie) {
		console.log('hello', request.headers);
		return JSON.parse(cookie.parse(request.headers.cookie).session);
	} else {
		return null;
	}
}
