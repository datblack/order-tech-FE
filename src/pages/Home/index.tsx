import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { blueGrey, red } from '@mui/material/colors';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoading from '../../components/SkeletonLoading';
import {
    getAllProducts,
    setCurrentProduct,
} from '../../redux/product/productSlice';
import { setShowProductDetail } from '../../redux/setting/settingSlice';
import { AppDispatch, RootState } from '../../redux/store';
import formatMoneyVn from '../../utils/formatMoneyVn';
import { currentProductTypes } from '../../types';
import { getOrderProducts } from '../../redux/order/orderSlice';
import Loading from '../../components/Loading';

function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products);
    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getOrderProducts());
    }, []);
    let handleGetProductDetail = useCallback(
        (product: currentProductTypes): void => {
            dispatch(setCurrentProduct(product));
        },
        [],
    );

    let handleShowProductDetail = useCallback((): void => {
        dispatch(setShowProductDetail(true));
        history.pushState({}, '', null);
    }, []);

    return (
        <section className="home__app">
            {products.isLoading ? (
                <SkeletonLoading />
            ) : (
                <Stack direction={'column'} gap={2}>
                    {products?.data?.map((category) => {
                        if (category.product_response_list.length) {
                            return (
                                <Container
                                    sx={{
                                        background: 'white',
                                        borderRadius: '15px',
                                        padding: '15px',
                                        borderBottom: `1px solid ${blueGrey[50]}`,
                                    }}
                                    key={category.category_id}
                                >
                                    <Typography
                                        mb={2}
                                        fontWeight={500}
                                        color={red[600]}
                                    >
                                        {category.category_name}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {category.product_response_list.map(
                                            (product) => (
                                                <Grid
                                                    key={product.id}
                                                    xs={6}
                                                    sm={3}
                                                    bgcolor={'white'}
                                                    onClick={() => {
                                                        handleGetProductDetail(
                                                            product,
                                                        );
                                                        handleShowProductDetail();
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent:
                                                                'space-between',
                                                            flexDirection:
                                                                'column',
                                                            height: '100%',
                                                        }}
                                                    >
                                                        <Box>
                                                            <Box
                                                                component={
                                                                    'div'
                                                                }
                                                                sx={{
                                                                    backgroundImage: `url(${product.thumbnail})`,
                                                                    backgroundSize:
                                                                        'cover',
                                                                    backgroundPosition:
                                                                        'center',
                                                                    width: '100%',
                                                                    height: '100px',
                                                                    marginBottom: 2,
                                                                }}
                                                            ></Box>
                                                            <Typography
                                                                variant="subtitle2"
                                                                className="text two-line"
                                                                gutterBottom
                                                            >
                                                                {product.name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                gutterBottom
                                                                color={
                                                                    blueGrey[300]
                                                                }
                                                                marginBottom={2}
                                                            >
                                                                {formatMoneyVn(
                                                                    product
                                                                        .price[0]
                                                                        .value,
                                                                )}
                                                            </Typography>
                                                        </Box>

                                                        <Button
                                                            variant="outlined"
                                                            fullWidth
                                                            sx={{
                                                                borderRadius: 50,
                                                            }}
                                                            size="small"
                                                            color="primary"
                                                        >
                                                            Chọn
                                                        </Button>
                                                    </Box>
                                                </Grid>
                                            ),
                                        )}
                                    </Grid>
                                </Container>
                            );
                        }
                    })}
                </Stack>
            )}
        </section>
    );
}

export default Home;
