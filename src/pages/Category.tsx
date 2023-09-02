import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import categories from '../__mock/Categories';

const Category = () => {
    return (
        <Box component={'section'}>
            <Grid container spacing={1} mt={1}>
                {categories?.map((category) => (
                    <Grid
                        xs={6}
                        sm={3}
                        md={4}
                        lg={5}
                        key={category.id}
                        borderRadius={6}
                        overflow={'hidden'}
                    >
                        <Box component={'div'} width={'100%'} height={'100px'}>
                            <Box
                                component={'img'}
                                src={category.cover}
                                alt={category.name}
                                width={'100%'}
                                height={'100%'}
                                sx={{ objectFit: 'cover' }}
                            />
                        </Box>
                        <Box
                            component={'div'}
                            py={2}
                            px={1}
                            bgcolor={'white'}
                            maxHeight={90}
                        >
                            <Typography
                                component={'a'}
                                href={`#${category.name}`}
                                fontWeight={500}
                                className="text three-line"
                                fontSize={13}
                                textAlign={'center'}
                            >
                                {category.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Category;
