import { Box, Drawer } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
    setShowCart,
    setShowOrder,
    setShowProductDetail,
} from '../redux/setting/settingSlice';
import { AppDispatch, RootState } from '../redux/store';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import ProductDetail from '../pages/ProductDetail';
import Header from './Header';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isShowProductDetail = useSelector(
        (state: RootState) => state.setting.isShowProductDetail,
    );
    const isShowCart = useSelector(
        (state: RootState) => state.setting.isShowCart,
    );
    const isShowOrder = useSelector(
        (state: RootState) => state.setting.isShowOrder,
    );

    useEffect(() => {
        const preventBackNavigation = (event: Event) => {
            event.preventDefault();
            if (isShowProductDetail === true) {
                dispatch(setShowProductDetail(false));
            } else if (isShowCart === true) {
                dispatch(setShowCart(false));
            } else if (isShowOrder === true) {
                dispatch(setShowOrder(false));
            }
            navigate('/'); // Điều hướng đến trang chính hoặc trang khác bạn muốn
        };

        window.addEventListener('popstate', preventBackNavigation);

        return () => {
            window.removeEventListener('popstate', preventBackNavigation);
        };
    }, [isShowProductDetail, isShowCart, isShowOrder]);

    return (
        <Box component={'section'} className="App">
            <Header />
            <Box component={'main'} className="main-content">
                <Outlet />
            </Box>
            <Navbar />
            {/* Show product detail */}
            <Drawer
                anchor={'bottom'}
                open={isShowProductDetail}
                onClose={() => dispatch(setShowProductDetail(false))}
            >
                <ProductDetail />
            </Drawer>
            {/* Show product detail */}
            {/* Show cart */}
            <Drawer
                anchor={'bottom'}
                open={isShowCart}
                onClose={() => dispatch(setShowCart(false))}
            >
                <Cart />
            </Drawer>
            {/* Show cart */}
            {/* Show order */}
            <Drawer
                anchor={'bottom'}
                open={isShowOrder}
                onClose={() => dispatch(setShowOrder(false))}
            >
                <Order />
            </Drawer>
            {/* Show order */}
        </Box>
    );
};

export default Layout;
