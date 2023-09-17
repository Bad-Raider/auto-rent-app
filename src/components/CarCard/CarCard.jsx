import PropTypes from "prop-types";
import {
  ItemCar,
  WraperImg,
  Img,
  WraperTitle,
  AccentSpan,
  DiscriptionBlock,
  BorderSpan,
  BtnLearneMore,
} from "./CarCard.styled";
import placeholderImg from '../../images/auto.webp';
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchCarById } from "redux/operation";

const CarCard = ({ data }) => {
  const dispatch = useDispatch();

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

  const shortAdress = address.substring(address.indexOf(",") + 2).trim();
  
  const handleClickWraperImg = (id) => {
    // console.log("handleClickWraperImg", id);
    // dispatch(fetchCarById(id))
  };


  return <ItemCar>
    <WraperImg onClick={handleClickWraperImg(id)}>
      <Img src={img || placeholderImg} alt={make} />
      <AiOutlineHeart
        width={18}
        height={18}
        color="#3470ff"
      />
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


CarCard.propTypes = {
  data: PropTypes.object,
};