'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@/public/google.png';

export default function GoogleSignInButton() {
	return (
		<Button onClick={() => signIn('google')} variant='outline' size='icon'>
			<Image src={GoogleIcon} alt='Google icon' className='w-4 h-4' />
		</Button>
	);
}
