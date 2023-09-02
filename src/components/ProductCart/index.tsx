import {
    Box,
    Button,
    ButtonGroup,
    Fade,
    IconButton,
    Modal,
    Stack,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { blueGrey } from '@mui/material/colors';
import { IoAddCircleSharp, IoRemoveCircleSharp } from 'react-icons/io5';
import formatMoneyVn from '../../utils/formatMoneyVn';
import {
    increaseQuantity,
    reduceQuantity,
    removeCartItem,
} from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import React from 'react';
function ProductCart({ product }: { product: any }): React.ReactElement {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box component={'div'}>
            <Grid container spacing={1} width={'95vw'}>
                <Grid xs={2}>
                    <Box
                        component={'img'}
                        src={product.thumbnail}
                        srcSet={product.thumbnail}
                        alt={product.name}
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: 2,
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    ></Box>
                </Grid>
                <Grid xs={10}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                    >
                        <Box>
                            <Typography
                                variant="body1"
                                fontWeight={500}
                                component={'h3'}
                                className="text two-line"
                                mb={1}
                            >
                                {product.name}
                            </Typography>
                            <Stack direction={'column'}>
                                <Typography
                                    variant="caption"
                                    fontWeight={400}
                                    component={'i'}
                                    sx={{ wordBreak: 'break-all' }}
                                    color={blueGrey[300]}
                                    mb={1}
                                >
                                    Size: {product.price.name} -
                                    {formatMoneyVn(
                                        parseFloat(product.price.value),
                                    )}
                                    &nbsp;x {product.quantity}
                                </Typography>

                                {product.request_note && (
                                    <Typography
                                        variant="caption"
                                        fontWeight={400}
                                        component={'i'}
                                        sx={{ wordBreak: 'break-all' }}
                                        color={blueGrey[300]}
                                        mb={1}
                                    >
                                        Ghi chú: {product.note}
                                    </Typography>
                                )}

                                <Typography
                                    variant="body2"
                                    fontWeight={400}
                                    component={'h3'}
                                    className="text one-line"
                                >
                                    {formatMoneyVn(
                                        product.price.value * product.quantity,
                                    )}
                                </Typography>
                            </Stack>
                        </Box>

                        <Stack direction={'column'} justifyContent={'center'}>
                            <ButtonGroup
                                variant="outlined"
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <IconButton
                                    color="primary"
                                    disabled={product.quantity <= 1 && true}
                                    onClick={() =>
                                        dispatch(reduceQuantity(product))
                                    }
                                >
                                    <IoRemoveCircleSharp size={24} />
                                </IconButton>
                                <Typography fontWeight={500}>
                                    {' '}
                                    {product.quantity}
                                </Typography>
                                <IconButton
                                    color="primary"
                                    onClick={() =>
                                        dispatch(increaseQuantity(product))
                                    }
                                >
                                    <IoAddCircleSharp size={24} />
                                </IconButton>
                            </ButtonGroup>
                            <IconButton
                                onClick={() =>
                                    dispatch(removeCartItem(product))
                                }
                            >
                                <Typography
                                    variant="body1"
                                    fontWeight={400}
                                    fontSize={12}
                                    align="center"
                                    component={'p'}
                                    color={blueGrey[200]}
                                >
                                    Loại bỏ
                                </Typography>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductCart;
