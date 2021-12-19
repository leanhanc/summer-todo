import cookie from 'cookie';

export function getSession(request) {
	if (request.headers.cookie) {
		return JSON.parse(cookie.parse(request.headers.cookie).session);
	} else {
		return null;
	}
}
