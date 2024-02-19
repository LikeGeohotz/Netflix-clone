import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GoogleIcon from '@/public/google.png';
import GithubIcon from '@/public/github.png';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth';
import { redirect } from 'next/navigation';

export default async function SignUp() {
	const session = await getServerSession(authOptions);
	if (session) {
		return redirect('/home');
	}

	return (
		<div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
			<form method='post' action='/api/auth/signin'>
				<h1 className='text-3xl font-semibold text-white'>Sign Up</h1>
				<div className='space-y-4 mt-5'>
					<Input
						type='email'
						name='email'
						placeholder='Email'
						className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
					/>
					<Button
						type='submit'
						variant='destructive'
						className='w-full bg-[#e50914]'
					>
						Sign Up
					</Button>
				</div>
			</form>
			<div className='text-gray-500 text-sm mt-2'>
				Already Have a account?{' '}
				<Link className='text-white hover:underline' href='/login'>
					Log in now!
				</Link>
			</div>
			<div className=' w-full flex items-center justify-center gap-x-3 mt-6'>
				<Button variant='outline' size='icon'>
					<Image src={GithubIcon} alt='Github icon' className='h-6 w-6' />
				</Button>
				<Button variant='outline' size='icon'>
					<Image src={GoogleIcon} alt='Google icon' className='h-6 w-6' />
				</Button>
			</div>
		</div>
	);
}
