import { Link } from 'react-router-dom';
import { Spacer, Button, HStack } from '@chakra-ui/react';

export const NavbarUser = () => {
	const logOut = () => {
		sessionStorage.removeItem('user-data');
		sessionStorage.setItem('isUserLogged', false);
		console.log('good');
	};

	return (
		<HStack w="full" pr={20} pt={5} pb={5} pl={10} spacing={10} bg="brand.primary">
			<Spacer />
			{/* <Link to="/create_playlist">
				<Button colorScheme="primary" textColor="white" size="sm">
					CREATE PLAYLIST
				</Button>
			</Link> */}
			<Link to="/upload_music">
				<Button colorScheme="primary" textColor="white" size="sm">
					Upload Music
				</Button>
			</Link>
			{/* <Link to="/delete_music">
				<Button colorScheme="orange" textColor="white" size="sm">
					DELETE MUSIC
				</Button>
			</Link> */}
			<Link to={`/profile/${JSON.parse(sessionStorage.getItem('user-data')).phone_number}`}>
				<Button colorScheme="primary" textColor="white" size="sm">
					Profile
				</Button>
			</Link>
			<Link to="/search">
				<Button colorScheme="primary" textColor="white" size="sm">
					Search
				</Button>
			</Link>
			<Link to="/">
				<Button colorScheme="red" textColor="white" size="sm" onClick={logOut}>
					Log Out
				</Button>
			</Link>
		</HStack>
	);
};
