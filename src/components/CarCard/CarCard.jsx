import {
  ItemCar,
  WraperImg,
  Img,
  WraperTitle,
  AccentSpan,
  DiscriptionBlock,
  BorderSpan,
  BtnLearneMore,
  HeartIcon,
} from "./CarCard.styled";
import placeholderImg from '../../images/auto.webp';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favoritesSlise';


const CarCard = ({ data }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = data;
  const dispatch = useDispatch();
  const isFavorite = useSelector(state =>
    state.favorites.items.some(car => car.id === data.id)
  );
  const shortAdress = address.substring(address.indexOf(",") + 2).trim();
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(data));
  };


  return <ItemCar>
    <WraperImg onClick={handleToggleFavorite}>
      <Img src={img || placeholderImg} alt={make} />

      <HeartIcon>{isFavorite
        ? <AiFillHeart
          width={18}
          height={18}
          color="#3470ff"
        />
        : <AiOutlineHeart
          width={18}
          height={18}
          color="#3470ff"
        />
      }</HeartIcon>

    </WraperImg>
    <WraperTitle>
      <p>
        {make} <AccentSpan>{model},</AccentSpan> {year}
      </p>
      <span>{rentalPrice}</span>
    </WraperTitle>
    
    <DiscriptionBlock>
      {shortAdress}
      <BorderSpan> | </BorderSpan>
      {rentalCompany}
      < BorderSpan> | </BorderSpan>
      <span>Premium</span>
      < BorderSpan> | </BorderSpan>
      {type}
      < BorderSpan> | </BorderSpan>
      {model}
      < BorderSpan> | </BorderSpan>
      {id}
      < BorderSpan> | </BorderSpan>
      {functionalities[0]}
    </DiscriptionBlock>
    <BtnLearneMore>Learn more</BtnLearneMore>
  </ItemCar>;
};

export default CarCard;


