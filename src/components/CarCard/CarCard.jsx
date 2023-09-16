import PropTypes from "prop-types";
import { ItemCar, WraperImg, Img, WraperTitle, AccentSpan } from "./CarCard.styled";



const CarCard = ({ data }) => {

  const { id, year, make, model, type, img, functionalities, rentalPrice, rentalCompany, address, } = data;

  return <ItemCar>
    <WraperImg>
      <Img src={img} alt={make} />
    </WraperImg>
    <WraperTitle>
      <p>
        {make} <AccentSpan>{model},</AccentSpan> {year}
      </p>
      <p>{rentalPrice}</p>
    </WraperTitle>
    <div>
      <p>
        <span>{address}</span>
        <span>{rentalCompany}</span>
        <span>Premium</span>
        <span>{type}</span>
        <span>{ model}</span>
        <span>{ id}</span>
        <span>{ functionalities[0]}</span>
      </p>
    </div>

  </ItemCar>;
};

export default CarCard;


CarCard.propTypes = {
  data: PropTypes.object,
};