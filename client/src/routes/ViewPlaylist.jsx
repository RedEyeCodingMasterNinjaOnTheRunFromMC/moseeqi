import {
	Box,
	Avatar,
	Button,
	HStack,
	Spacer,
	VStack,
	Heading,
	Container,
	Text,
	List,
	ListItem
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { SimpleInput } from '../components/TextInput';
// import { InvalidMessage } from '../components/InvalidMessage';
import { useParams } from 'react-router';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const RetSongs = ({ songs }) => {
	return (
		<List spacing={3}>
			{songs.map((song, index) => (
				<ListItem key={index}>
					<SongCard song={song} />
				</ListItem>
			))}
		</List>
	);
};

const SongCard = ({ song }) => {
	return (
		<Box shadow="md" borderRadius="full" padding={1} w="500px" bgGradient="linear(to-t, gray.200, gray.100)">
			{/* <Text>{song}</Text> */}
			<Link to={`/music/${song.s_ph}/${song.s_name}`}>
				<HStack>
					<Avatar
						shadow="md"
						size="md"
						name={song.s_name}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikhddhHqZyLCxvwFFd1weIv6wQttST0z9q4MjTnLnyxv9cp1HEqvBNnzqm98IXfvWyFI&usqp=CAU"
					/>
					<Box w="10px" />
					<Text fontSize="l" textColor="black">
						{song.s_name}
					</Text>
					{/* <Text fontSize="md" textColor="gray">
						(creator: {song.username})
					</Text> */}
				</HStack>
			</Link>
		</Box>
	);
};

export const ViewPlaylist = () => {
	const navigate = useNavigate();
	const { p_name, p_ph } = useParams();
	const [ songs, setSongs ] = useState([]);

	useEffect(() => {
		Axios.post(
			`${process.env.REACT_APP_SERVER_URL}/view_playlist`,
			{
				p_name: p_name,
				p_ph: p_ph
				//phone_number: JSON.parse(sessionStorage.getItem('user-data')).phone_number
			},
			{
				headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
			}
		).then((response) => {
			// for (let i = 0; i < response.data.length; i++) {
			//     setSongs((songs) => [ ...songs, response.data[i] ]);
			// }

			setSongs(response.data);
		});
	}, []);

	useEffect(
		() => {
			console.log('Songs: ', songs);
		},
		[ songs ]
	);

	return (
		<div>
			<HStack w="full" pr={20} pt={5} pb={5} pl={10} spacing={10} bg="brand.primary">
				<Spacer />
				<Button colorScheme="blue" textColor="white" size="sm" onClick={() => navigate(-1)}>
					Back
				</Button>
			</HStack>
			<Container maxWidth="full" pt="30px">
				<VStack padding={0} spacing={10}>
					<Heading size="md">Songs in: {p_name}</Heading>
					<RetSongs songs={songs} />
					{/* <SimpleInput
						label="Playlist Name"
						value={playlistName}
						onChange={(event) => {
							setPLName(event.target.value);
						}}
					/>
					<Button w={200} colorScheme="green" onClick={createPL}>
						Upload
					</Button>
					<VStack w="300px" align="left" pt={5}>
						<Text textColor="gray" align="center" fontSize="8pt">
							By Uploading this file, you agree to our terms and conditions.{' '}
						</Text>
					</VStack>
					{playlistAdded ? (
						<InvalidMessage
							message="Playlist Created!"
							color="green.800"
							bg="linear(to-t, green.200, green.100)"
						/>
					) : null} */}
				</VStack>
			</Container>
		</div>
	);
};
