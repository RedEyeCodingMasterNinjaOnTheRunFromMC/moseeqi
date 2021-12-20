import { VStack, Image, Text, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { MusicCovers } from '../assets/music covers/MusicCovers';
import { Link, useNavigate } from 'react-router-dom';
export const PlaylistCard = ({ name, phoneNumber, height, width }) => {
	const [ image, setImage ] = useState(null);
	useEffect(
		() => {
			console.log(name.charCodeAt(0), name.charCodeAt(0) % MusicCovers.length);
			setImage(MusicCovers[name.charCodeAt(0) % MusicCovers.length]);
		},
		[ name ]
	);
	return (
		<Link to={`/view_playlist/${name}/${phoneNumber}`}>
			<VStack
				height={height}
				width={width}
				boxShadow="dark-lg"
				bgColor="brand.secondary"
				overflow="hidden"
				borderRadius="20px"
			>
				<Image src={image} />
				<Text textColor="white">{name}</Text>
			</VStack>
		</Link>
	);
};

export const EmptyPlaylistCard = ({ height, width }) => {
	return (
		<Box height={height} width={width} boxShadow="dark-lg" overflow="hidden" borderRadius="20px">
			You have not created a playlist yet. Create one now!
		</Box>
	);
};
