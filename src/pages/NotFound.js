import Box from '@mui/material/Box'
import ButtonLink from '../components/ButtonLink';
import { alpha } from '@mui/material'

const NotFound = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                textAlign: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    fontSize: '4rem',
                    padding: '1rem 0'
                }}>
                    404 - Ups!
                </Box>
                <Box sx={{
                    fontSize: '2rem',
                    padding: '1rem 0'
                }}>
                    La página que estaba buscando no se encuentra.
                </Box>
                <Box sx={{
                    padding: '1rem 0'
                }}>
                    <ButtonLink href="/" sx={{
                        backgroundColor: '#fb5343',
                        color: '#fff',
                        fontWeight: '900',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: alpha('#fb5343', 0.85)
                        }
                    }}>
                        Ir al inicio
                    </ButtonLink>
                </Box>
            </Box>
        </Box>
    );
}

export default NotFound;