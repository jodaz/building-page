import Box from '@mui/material/Box'
// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';

const Header = () => (
    <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'end',
        padding: '1rem 0',
        borderBottom: '1px solid gray',
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: '300'
        }}>
            <LocationOnIcon/> Carupano, Venezuela
        </Box>
        <Box sx={{
            padding: '0 1rem',
            '&>*': {
                marginRight: '1rem'
            }
        }}>
            <a href="#" target="_blank">
                <FacebookIcon />
            </a>
            <a href="#" target="_blank">
                <InstagramIcon />
            </a>
        </Box>
        <Box width='1rem' />
    </Box>
);

export default Header;