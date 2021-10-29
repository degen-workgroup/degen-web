import { signIn, signOut, useSession } from 'next-auth/react';

const SignInComponent = () => {
	const { data: session }: any = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.name} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
};

export default SignInComponent;