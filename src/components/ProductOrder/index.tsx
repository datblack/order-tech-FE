import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { blueGrey } from '@mui/material/colors';
import React from 'react';
import formatMoneyVn from '../../utils/formatMoneyVn';
function ProductOrder({ product }: { product: any }): React.ReactElement {
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
                <Grid xs={10} px={1.5}>
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

                                {product.note && (
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
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductOrder;
