import { Box, Stack, Typography } from '@mui/material';
import Error500 from '../../assets/images/error-system.png';
const ErrorSystem = () => {
    return (
        <Box component={'section'} width={'100%'} height={'100vh'}>
            <Stack
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
            >
                <img
                    src={Error500}
                    srcSet={Error500}
                    style={{ width: '320px', objectFit: 'cover' }}
                    alt="500"
                />
                <Typography variant="h6" marginBottom={2} mt={2}>
                    Vui lòng sử dụng điện thoại hoặc Tablet để quét mã !
                </Typography>
            </Stack>
        </Box>
    );
};

export default ErrorSystem;
