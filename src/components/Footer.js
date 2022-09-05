import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

const Footer = () => (
    <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'start',
        padding: '1rem 0',
        borderBottom: '1px solid gray',
        flexDirection: 'column',
        fontWeight: '300'
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center'
        }}>
            © 2022 <Link target="_blank" to={{ pathname: "vanguarddevs.com" }}>VanguardDevs</Link>
        </Box>
    </Box>
);

export default Footer;