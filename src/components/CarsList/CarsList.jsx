import CarCard from 'components/CarCard/CarCard';
import { useSelector, useDispatch  } from 'react-redux';
import { ListCar, BtnLoadeMore } from './CarsList.styled';
import { fetchMoreCars } from '../../redux/operation';


const CarsList = () => {
  const { car } = useSelector(state => state);
  const dispatch = useDispatch();
  const lastItem = car.items?.length % car.limit;

  const handleClickLoadMore = () => {
    dispatch(fetchMoreCars());
  };

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
    {(car.items.length > 0 && lastItem !== 1) &&
      <BtnLoadeMore onClick={handleClickLoadMore}>Load more</BtnLoadeMore>}
  </>
};

export default CarsList;

