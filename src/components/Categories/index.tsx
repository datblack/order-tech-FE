import { Box, Container, Stack, Typography } from '@mui/material';
import { grey, red, blueGrey } from '@mui/material/colors';
import Slider from 'react-slick';
import type { categoryType } from '../../__mock/Categories';
import { Link } from 'react-router-dom';
import {
    IoChevronForwardCircleOutline,
    IoChevronForward,
} from 'react-icons/io5';
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            },
        },
    ],
};
const Categories = ({ categories }: { categories: categoryType[] }) => {
    return (
        <Container
            style={{
                background: 'white',
                borderRadius: '15px',
                padding: '15px',
                paddingBottom: '30px',
                marginBottom: '8px',
                borderBottom: `1px solid ${blueGrey[50]}`,
            }}
            className="categories_container"
        >
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mb={2}
            >
                <Typography fontWeight={500} color={red[600]}>
                    Danh mục
                </Typography>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    color={blueGrey[200]}
                >
                    <Link
                        to={'/category'}
                        style={{ color: blueGrey[200], fontSize: 13 }}
                    >
                        Xem tất cả
                    </Link>{' '}
                    <IoChevronForward />
                </Stack>
            </Stack>

            <Slider {...settings}>
                {categories?.map((category) => (
                    <Box
                        component={'div'}
                        bgcolor={grey[50]}
                        key={category.id}
                        style={{ flex: 1 }}
                        height={'100%'}
                    >
                        <Box
                            component={'div'}
                            sx={{ width: '100%', height: '100px' }}
                        >
                            <img
                                src={category.cover}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                alt="Danh muc"
                            />
                        </Box>
                        <Box component={'div'} py={2} px={1} height={'75px'}>
                            <Typography
                                component={'a'}
                                href={`#${category.name}`}
                                fontWeight={500}
                                className="text two-line"
                                fontSize={13}
                            >
                                {category.name}
                            </Typography>
                        </Box>
                    </Box>
                ))}
                <Stack
                    component={'a'}
                    href="/category"
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={1}
                    color={red[600]}
                    height={'175px'}
                    textAlign={'center'}
                    className="category__see__more"
                >
                    <IoChevronForwardCircleOutline />
                    <p>Xem tất cả</p>
                </Stack>
            </Slider>
        </Container>
    );
};

export default Categories;
