import {
    Box,
    Button,
    Container,
    Stack,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { memo, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emptyState from '../../assets/images/EmptyOrder.png';
import ProductOrder from '../../components/ProductOrder';
import { AppDispatch, RootState } from '../../redux/store';
import formatMoneyVn from '../../utils/formatMoneyVn';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {children}
        </Box>
    );
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function Order(): React.ReactElement {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const order = useSelector((state: RootState) => state.order.data);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box component={'section'} bgcolor={'white'} sx={{ height: '100vh' }}>
            <Container
                sx={{
                    position: 'sticky',
                    top: -1,
                    borderBottom: `1px solid ${blueGrey[50]}`,
                    background: 'white',
                    zIndex: 10,
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
                        <Typography fontWeight={500}>Đơn hàng</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography fontWeight={500} fontSize={14}>
                            Sản phẩm: &nbsp;
                        </Typography>
                        <Typography color={blueGrey[200]}>
                            ({order.products.length})
                        </Typography>
                    </Stack>
                </Stack>
            </Container>

            {order.products.length > 0 ? (
                <>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="Tất cả" {...a11yProps(0)} />
                            <Tab label="Xác nhận" {...a11yProps(1)} />
                            <Tab label="Chưa xác nhận" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Box px={1} pt={3} pb={7}>
                            <Stack
                                direction={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={5}
                                mb={5}
                            >
                                {' '}
                                {order.products.map((product) => (
                                    <ProductOrder
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box px={1} pt={3} pb={7}>
                            Xác nhận
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Box px={1} pt={3} pb={7}>
                            Chưa Xác nhận
                        </Box>
                    </TabPanel>
                </>
            ) : (
                <Stack
                    direction={'column'}
                    justifyItems={'center'}
                    justifyContent={'center'}
                >
                    <Box
                        component={'img'}
                        src={emptyState}
                        alt="Empty State"
                        sx={{
                            objectFit: 'cover',
                            width: '250px',
                            margin: 'auto',
                        }}
                    ></Box>
                </Stack>
            )}

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
                    >
                        Gọi Thanh toán - {formatMoneyVn(order.total_price)}
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default memo(Order);
