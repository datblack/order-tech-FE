import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image404 from '../../assets/images/404.png';
const NoPage = () => {
    const navigate = useNavigate();
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
                    src={Image404}
                    srcSet={Image404}
                    style={{ width: '80%' }}
                    alt="404"
                />
                <Typography variant="h6" marginBottom={2}>
                    Không tìm thấy trang!
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate(-1)}
                    color="error"
                >
                    Quay lại
                </Button>
            </Stack>
        </Box>
    );
};

export default NoPage;
