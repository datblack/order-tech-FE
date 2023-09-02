import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { memo } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emptyState from '../../assets/images/EmptyState.png';
import ProductCart from '../../components/ProductCart';
import { orderProducts } from '../../redux/order/orderSlice';
import { AppDispatch, RootState } from '../../redux/store';
import formatMoneyVn from '../../utils/formatMoneyVn';
import Loading from '../../components/Loading';

function Cart(): React.ReactElement {
    const cart = useSelector((state: RootState) => state.cart.data);
    const isLoading = useSelector((state: RootState) => state.order.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    let total_price = cart.reduce((result: any, item: any) => {
        return result + item.price.value * item.quantity;
    }, 0);
    let handleOrderProducts = () => {
        if (cart.length > 0) {
            let data = {
                tableId:1,
                products: cart,
            };

            dispatch(orderProducts({ data, dispatch }));
        }
    };
    return (
        <Box component={'section'} bgcolor={'white'} sx={{ height: '100vh' }}>
            <Container
                sx={{
                    position: 'sticky',
                    top: -1,
                    borderBottom: `1px solid ${blueGrey[50]}`,
                    background: 'white',
                    zIndex: 10,
                    marginBottom: 2,
                    py: 2,
                }}
            >
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={1}
                    component={'div'}
                    position={'sticky'}
                    zIndex={100}
                    top={0}
                >
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <IoChevronBackOutline
                            size={24}
                            onClick={() => navigate(-1)}
                        />
                        <Typography fontWeight={500}>Giỏ hàng</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography fontWeight={500} fontSize={14}>
                            Sản phẩm: &nbsp;
                        </Typography>
                        <Typography color={blueGrey[200]}>
                            ({cart.length})
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
            <Box px={1} pb={7}>
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={5}
                    mb={5}
                >
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <ProductCart product={product} key={product.uuid} />
                        ))
                    ) : (
                        <Box
                            component={'img'}
                            src={emptyState}
                            alt="Empty State"
                            sx={{ objectFit: 'cover' }}
                        ></Box>
                    )}
                </Stack>
            </Box>
            <Box
                position={'fixed'}
                bottom={0}
                left={0}
                right={0}
                paddingX={1}
                paddingY={2}
                bgcolor={'white'}
                borderTop={`1px solid ${blueGrey[50]}`}
            >
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={2}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ borderRadius: 50 }}
                        onClick={handleOrderProducts}
                    >
                        Gọi món - {formatMoneyVn(total_price)}
                    </Button>
                </Stack>
            </Box>
            {isLoading && <Loading />}
        </Box>
    );
}

export default memo(Cart);
