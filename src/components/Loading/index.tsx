import { Box, CircularProgress, Stack } from '@mui/material';

function Loading() {
    return (
        <Stack
            direction={'column'}
            component={'section'}
            position={'fixed'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ inset: 0, opacity: 0.25 }}
            bgcolor={'black'}
            zIndex={100}
        >
            <CircularProgress color="error" />
        </Stack>
    );
}

export default Loading;
