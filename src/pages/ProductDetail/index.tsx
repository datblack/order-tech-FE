import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { blueGrey, red } from '@mui/material/colors';
import { memo, useEffect, useRef, useState } from 'react';
import {
    IoCloseCircle,
    IoAddCircleSharp,
    IoRemoveCircleSharp,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { RootState, AppDispatch } from '../../redux/store';
import formatMoneyVn from '../../utils/formatMoneyVn';
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import notice from '../../utils/notice';
import { v4 as uuidv4 } from 'uuid';
function ProductDetail() {
    const [quantity, setQuantity] = useState<number>(1);
    const [note, setNote] = useState<string>('');
    const currentProduct = useSelector(
        (state: RootState) => state.products.currentProduct,
    );
    const [price, setPrice] = useState<string>(
        `${currentProduct.price[0].name} - ${currentProduct.price[0].value}`,
    );

    const [errorMsg, setErrMsg] = useState<{ status: boolean; msg: string }>({
        status: false,
        msg: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Handle images Slider
    const [navBottom, setNavBottom] = useState<Slider | undefined>(undefined);
    const [navTop, setNavTop] = useState<Slider | undefined>(undefined);
    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);
    useEffect(() => {
        setNavBottom(slider1.current === null ? undefined : slider1.current);
        setNavTop(slider2.current === null ? undefined : slider2.current);
    }, []);
    // Handle images Slider

    let handleAddToCart = () => {
        let product = {
            id: currentProduct.id,
            uuid: uuidv4(),
            name: currentProduct.name,
            thumbnail: currentProduct.thumbnail,
            quantity: quantity,
            note: note,
            price: {
                name: price.split('-')[0],
                value: price.split('-')[1],
            },
            status: 'DELIVERING',
        };
        if (price.length === 0) {
            return setErrMsg({ status: true, msg: 'Vui lòng chọn giá' });
        }
        dispatch(addToCart(product));
        navigate(-1);
        notice(true, 'Thêm món thành công');
    };
    let handleIncrementQuantity = (): void => {
        setQuantity((prev) => prev + 1);
    };
    let handleReduceQuantity = (): void => {
        setQuantity((prev) => prev - 1);
    };
    let handleChoosePrice = (e: any): void => {
        setPrice(e.target.value);
    };

    return (
        <Box
            component={'section'}
            className="product__detail"
            sx={{ height: '100vh' }}
            bgcolor={'#f6f6f6'}
        >
            <Stack
                component={'div'}
                style={{ background: 'transparent' }}
                px={1}
                position={'fixed'}
                zIndex={100}
                top={-1}
                right={0}
            >
                <IconButton onClick={() => navigate(-1)}>
                    <IoCloseCircle size={30} style={{ opacity: 0.5 }} />
                </IconButton>
            </Stack>

            <Box
                component={'div'}
                className="detail__slide"
                bgcolor={'white'}
                pb={3}
            >
                {currentProduct.image?.length >= 3 ? (
                    <>
                        <Slider asNavFor={navTop} ref={slider1} arrows={false}>
                            {currentProduct?.image?.map((img, index) => (
                                <Box component={'div'} key={index}>
                                    <img
                                        src={img}
                                        srcSet={img}
                                        style={{
                                            width: '100%',
                                            height: '200px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                        alt="Chi tiết sản phẩm"
                                    />
                                </Box>
                            ))}
                        </Slider>
                        <Slider
                            asNavFor={navBottom}
                            ref={slider2}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            centerPadding="50px"
                        >
                            {currentProduct?.image?.map((img, index) => (
                                <Box component={'div'} key={index}>
                                    <img
                                        src={img}
                                        srcSet={img}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                        alt="Chi tiết sản phẩm"
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </>
                ) : (
                    <Box
                        component={'img'}
                        src={currentProduct.thumbnail}
                        srcSet={currentProduct.thumbnail}
                        sx={{ width: '100%' }}
                        alt={currentProduct.name}
                    ></Box>
                )}
            </Box>

            <Box
                component={'div'}
                marginBottom={1}
                className="detail__info"
                bgcolor={'white'}
                py={2}
                borderBottom={`1px solid ${blueGrey[50]}`}
            >
                <Container>
                    <Typography
                        variant="h6"
                        component="h2"
                        marginBottom={1}
                        className="text two-line"
                    >
                        {currentProduct.name}
                    </Typography>
                </Container>
            </Box>

            <Box
                component={'div'}
                className="detail__select"
                pb={10}
                bgcolor={'white'}
                py={3}
                borderBottom={`1px solid ${blueGrey[50]}`}
            >
                <Container>
                    <FormControl>
                        <FormLabel>Chọn size</FormLabel>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={`${currentProduct.price[0].name} - ${currentProduct.price[0].value}`}
                            name="radio-buttons-group"
                        >
                            {currentProduct.price.map((price, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={`${price.name} - ${price.value}`}
                                    control={
                                        <Radio onChange={handleChoosePrice} />
                                    }
                                    label={`${price.name} - ${formatMoneyVn(
                                        price.value,
                                    )}`}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormHelperText
                        disabled={errorMsg.status === false}
                        sx={{ color: red[600] }}
                    >
                        {errorMsg.msg}
                    </FormHelperText>
                </Container>
            </Box>

            <Box
                component={'div'}
                className="detail__select"
                pb={11}
                bgcolor={'white'}
                pt={3}
                borderBottom={`1px solid ${blueGrey[50]}`}
            >
                <Container>
                    <TextField
                        label="Lời nhắn"
                        multiline
                        rows={4}
                        fullWidth
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Lời nhắc tới nhà bếp"
                    />
                </Container>
            </Box>

            <Box
                mt={1}
                paddingY={2}
                px={1}
                bgcolor={'white'}
                position={'fixed'}
                bottom={0}
                left={0}
                right={0}
                zIndex={10}
                borderTop={`1px solid ${blueGrey[50]}`}
            >
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <ButtonGroup
                        variant="outlined"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <IconButton
                            color="primary"
                            disabled={quantity <= 1 && true}
                            onClick={handleReduceQuantity}
                        >
                            <IoRemoveCircleSharp size={28} />
                        </IconButton>
                        <Typography fontWeight={500}> {quantity}</Typography>
                        <IconButton
                            color="primary"
                            onClick={handleIncrementQuantity}
                        >
                            <IoAddCircleSharp size={28} />
                        </IconButton>
                    </ButtonGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddToCart}
                        sx={{ borderRadius: 10 }}
                    >
                        Thêm vào giỏ
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default memo(ProductDetail);
