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
import myImage from '../../images/auto.webp';



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

  const shortAdress = address.substring(address.indexOf(",") + 2).trim();
  

  return <ItemCar>
    <WraperImg>
      <Img src={img || myImage} alt={make} />
    </WraperImg>
    <WraperTitle>
      <p>
        {make} <AccentSpan>{model},</AccentSpan> {year}
      </p>
      <span>{rentalPrice}</span>
    </WraperTitle>
    
    <DiscriptionBlock>
      {shortAdress} <BorderSpan> | </BorderSpan>
      {rentalCompany} < BorderSpan> | </BorderSpan>
      <span>Premium</span> < BorderSpan> | </BorderSpan>
      {type} < BorderSpan> | </BorderSpan>
      {model} < BorderSpan> | </BorderSpan>
      {id} < BorderSpan> | </BorderSpan>
      {functionalities[0]}
    </DiscriptionBlock>
    <BtnLearneMore>Learn more</BtnLearneMore>
  </ItemCar>;
};

export default CarCard;


CarCard.propTypes = {
  data: PropTypes.object,
};