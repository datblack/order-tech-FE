import { useEffect, useState } from 'react';

import {
    Box,
    Container,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material';
import { blueGrey, grey, red } from '@mui/material/colors';
import { IoLocation, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const HeaderTop = () => {
    const [isScrollHeader, setIsScroll] = useState(false);
    useEffect(() => {
        let prevScrollpos = window.scrollY;

        window.addEventListener('scroll', () => {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos === 0) {
                setIsScroll(false);
            } else {
                setIsScroll(true);
            }
            prevScrollpos = currentScrollPos;
        });
    }, []);

    return (
        <Box
            component={'header'}
            py={3}
            marginBottom={2}
            borderRadius={' 0px 0px 15px 15px'}
            style={{
                transition: 'all 0.25s linear',
                top: isScrollHeader ? '-55px' : '-2px',
            }}
            overflow={'hidden'}
            bgcolor={'white'}
            position={'sticky'}
            zIndex={100}
            borderBottom={`1px solid ${blueGrey[50]}`}
        >
            <Container>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    component={'div'}
                    mb={2}
                >
                    <Link to={'/'}>
                        <img src={logo} width={80} alt="Logo" />
                    </Link>
                    <Typography fontWeight={500}>Bàn: 20 Tầng: 3</Typography>
                </Stack>
                {/* <Stack direction={'row'} alignItems={'center'} gap={0.5} mb={2}>
                    <IoLocation color={red[700]} size={20} width={'10%'} />
                    <Typography className="text one-line" width={'90%'}>
                        20 Ngh. 63/5 Đường Lê Đức Thọ, Mai dịch, Nam Từ Liêm, Hà
                        Nội
                    </Typography>
                </Stack> */}
                <OutlinedInput
                    size="small"
                    fullWidth
                    placeholder="Tìm kiếm món ăn..."
                    sx={{ borderRadius: '8px', background: grey[100] }}
                    color="primary"
                    startAdornment={
                        <InputAdornment position="start">
                            <IoSearchOutline />
                        </InputAdornment>
                    }
                />
            </Container>
        </Box>
    );
};

export default HeaderTop;
