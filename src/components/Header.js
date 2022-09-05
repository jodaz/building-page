import Box from '@mui/material/Box'
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
        <Box width='1rem' />
    </Box>
);

export default Header;