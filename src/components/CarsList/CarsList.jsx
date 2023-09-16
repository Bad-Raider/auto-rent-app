import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { ListCar } from './CarsList.styled';


const CarsList = () => {
  const { car } = useSelector(state => state);
  


  return <>
      {car.isLoading && <h2>Loading...</h2>}
      {car.error && <h2>Oooopsss! Try again, please</h2>}
      <ListCar >
        {car.items.map((data, index) => (
          <CarCard
            key={index}
            data={data}
          />
        ))}
      </ListCar>
    </>
};

export default CarsList;

