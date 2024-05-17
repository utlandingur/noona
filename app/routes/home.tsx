import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as jose from 'jose';
import { getUserByCompanyId } from '~/db/getUserByCompanyId';
import Dashboard from './dashboard';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	try {
		const url = new URL(request.url);
		const idToken = jose.decodeJwt(url.searchParams.get('id_token')!);
		const user = await getUserByCompanyId({ companyId: idToken['company_id'] as string });

		return { user };
	} catch (exception) {
		console.error(exception);
	}

	return new Response('Unauthorized', { status: 401 });
};

export default function Home() {
	const { user } = useLoaderData<typeof loader>();

	if (!user) return null;

	return <Dashboard />;
}
