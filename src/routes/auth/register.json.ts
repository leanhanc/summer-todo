import supabaseClient from '../../lib/api/supabase';

export async function post(request) {
	const email = request.body.get('email');
	const password = request.body.get('password');

	const { session, error } = await supabaseClient.auth.signUp({ email, password });

	if (error) {
		return {
			status: error.status,
			body: error.message,
		};
	}

	return {
		status: 200,
		body: 'success',
		headers: {
			'set-cookie': `session=${JSON.stringify(
				session
			)}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				session.expires_at * 1000
			).toUTCString()};`,
		},
	};
}
