import Box from '@mui/material/Box'
import ButtonLink from '../components/ButtonLink';
import { alpha } from '@mui/material'

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flex: 1
        }}>
            <Box sx={{
                display: 'flex',
                height: 'fit-content',
                marginLeft: '30px',
                marginTop: '45px',
                flexDirection: 'column'
            }}>
                <Box sx={{
                    fontSize: '2rem',
                    padding: '1rem 0',
                    textTransform: 'uppercase',
                    borderBottom: '5px solid black',
                    width: '25rem',
                    display: 'flex',
                    fontWeight: 300
                }}>
                    Próximamente
                </Box>
                <Box sx={{
                    fontSize: '3rem',
                    padding: '1rem 0',
                    width: '25rem',
                    display: 'flex',
                    fontWeight: 500,
                }}>
                    El Macarapanero
                </Box>
            </Box>
        </Box>
    );
}

export default Home;