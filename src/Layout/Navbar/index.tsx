import {
    Badge,
    Box,
    Container,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
    BsBasket,
    BsLifePreserver,
    BsReceiptCutoff,
    BsShop,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { menu } from '../../__mock/Navbar';
import { setShowCart, setShowOrder } from '../../redux/setting/settingSlice';
import { AppDispatch, RootState } from '../../redux/store';

function Navbar(): React.ReactElement {
    const [isScroll, setIsScroll] = useState(false);
    const cart = useSelector((state: RootState) => state.cart.data);
    const orders = useSelector((state: RootState) => state.order.data.products);

    const dispatch = useDispatch<AppDispatch>();

    let handleShowCart = () => {
        dispatch(setShowCart(true));
        history.pushState({}, '', null);
    };
    let handleShowOrder = () => {
        dispatch(setShowOrder(true));
        history.pushState({}, '', null);
    };

    useEffect(() => {
        let prevScrollpos = window.scrollY;
        window.addEventListener('scroll', () => {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                setIsScroll(false);
            } else {
                setIsScroll(true);
            }
            prevScrollpos = currentScrollPos;
        });
    }, []);

    const getIcons = (icon: string, name: string) => {
        switch (icon) {
            case 'home':
                return <BsShop />;
            case 'cart':
                return (
                    <IconButton
                        size="small"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            rowGap: '5px',
                            padding: 0,
                        }}
                        onClick={handleShowCart}
                    >
                        <Badge badgeContent={cart.length} color="error">
                            <BsBasket />
                        </Badge>
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            display="inline-block"
                        >
                            {name}
                        </Typography>
                    </IconButton>
                );
            case 'order':
                return (
                    <IconButton
                        size="small"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            rowGap: '5px',
                            padding: 0,
                        }}
                        onClick={handleShowOrder}
                    >
                        <Badge
                            overlap="circular"
                            badgeContent={orders.length}
                            variant="dot"
                            color="primary"
                        >
                            <BsReceiptCutoff />
                        </Badge>
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            display="inline-block"
                        >
                            {name}
                        </Typography>
                    </IconButton>
                );
            case 'help':
                return (
                    <IconButton
                        size="small"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            rowGap: '5px',
                            padding: 0,
                        }}
                    >
                        <BsLifePreserver />
                        <Typography
                            fontSize={12}
                            fontWeight={500}
                            display="inline-block"
                        >
                            {name}
                        </Typography>
                    </IconButton>
                );

            default:
                break;
        }
    };

    return (
        <>
            <Box
                component={'nav'}
                sx={{
                    position: 'fixed',
                    right: 0,
                    left: 0,
                    bottom: isScroll ? -100 : -1,
                    boxShadow: '0px -3px 14px rgba(0, 0, 0, 0.1)',
                    borderRadius: '13px 13px 0px 0px;',
                    paddingY: 1,
                    bgcolor: '#fff',
                    transition: 'all 0.25s linear',
                }}
            >
                <Container>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        paddingY={1}
                    >
                        {menu.map((item) => (
                            <Box
                                key={item.id}
                                style={{
                                    textDecoration: 'none',
                                    textTransform: 'capitalize',
                                    visibility: 'inherit',
                                }}
                            >
                                {getIcons(item.icon, item.name)}
                            </Box>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

export default Navbar;
