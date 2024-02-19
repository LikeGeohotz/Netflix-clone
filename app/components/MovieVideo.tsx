import prisma from '../utils/db';

async function getData() {
	const data = await prisma.movie.findFirst({
		select: {
			title: true,
			overview: true,
			videoSource: true,
			imageString: true,
			release: true,
			duration: true,
			id: true,
		},
	});
}

export default function MovieVideo() {
	return <h1>Hello</h1>;
}
