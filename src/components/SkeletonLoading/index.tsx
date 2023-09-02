import { Container, Skeleton } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';
function SkeletonLoading() {
    return (
        <Container
            sx={{
                background: 'white',
                borderRadius: '15px',
                padding: '15px',
                borderBottom: `1px solid ${blueGrey[50]}`,
            }}
        >
            <Grid container spacing={2} bgcolor={'white'} py={2}>
                {Array(1, 2, 3, 4).map((item) => (
                    <Grid xs={6} sm={3} px={1} py={1} key={item}>
                        <Skeleton variant="rounded" height={100} />
                        <Skeleton variant="text" width={90} />
                        <Skeleton variant="rounded" height={30} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default SkeletonLoading;
