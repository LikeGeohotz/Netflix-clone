import { Button } from '@/components/ui/button';
import { Heart, PlayCircle } from 'lucide-react';

interface MovieCardProps {
	title: string;
	overview: string;
	movieId: number;
	watchList: boolean;
	watchListId: string;
	youtubeUrl: string;
	year: number;
	age: number;
	time: number;
}

export function MovieCard({
	title,
	overview,
	movieId,
	watchList,
	watchListId,
	youtubeUrl,
	year,
	age,
	time,
}: MovieCardProps) {
	return (
		<>
			<button className='-mt-14'>
				<PlayCircle className='h-20 w-20' />
			</button>

			<div className='right-5 top-5 absolute z-10'>
				{watchList ? (
					<form>
						<Button variant='outline' size='icon'>
							<Heart className='w-4 h-4 text-red-500' />
						</Button>
					</form>
				) : (
					<Button variant='outline' size='icon'>
						<Heart className='w-4 h-4' />
					</Button>
				)}
			</div>

			<div className='p-5 absolute bottom-0 left-0'>
				<h1 className='font-bold text-lg line-clamp-1'>{title}</h1>
				<div className='flex gap-x-2 items-center'>
					<p className='font-normal text-sm'>{year}</p>
					<p className='font-normal border py-0.5 px-1 border-gray-200 rounded text-sm'>
						{age}+
					</p>
					<p>{time}h</p>
				</div>
			</div>
		</>
	);
}
