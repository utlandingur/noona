import { LoaderFunctionArgs, json, redirect } from '@remix-run/node';
import { upsertUserFromNoonaUser } from '~/db/upsertUser';
import { codeTokenExchange } from '~/oauth/codeTokenExchange.server';
import { createWebhooks } from '~/oauth/createWebhooks.server';
import { getUserFromToken } from '~/oauth/getUserFromToken.server';
import Dashboard from './dashboard';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const id_token = url.searchParams.get('id_token');
	const action = url.searchParams.get('action');
	const code = url.searchParams.get('code');
	const scopes = url.searchParams.getAll('scope') ?? [];

	console.log('id_token', id_token);

	if (id_token) {
		return redirect(`/home?id_token=${id_token}&action=${action}`);
	}

	if (!code) {
		return redirect('/');
	}

	const token = await codeTokenExchange({ code });

	const user = await getUserFromToken(token.access_token!);

	await createWebhooks({
		token: token.access_token!,
		companyId: user.companies![0] as string,
	});

	const localUser = await upsertUserFromNoonaUser({
		user,
		scopes,
		token,
	});

	return json({ user: localUser, appStoreUrl: process.env.APP_STORE_URL! });
};

export default function OAuthAuthorize() {
	return <Dashboard />;
}
