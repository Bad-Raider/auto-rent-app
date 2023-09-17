import CarCard from 'components/CarCard/CarCard';
import { useSelector,  } from 'react-redux';
import { ListCar } from '../CarsList/CarsList.styled';


const FavoritesList = () => {
    const { favorites } = useSelector(state => state);

    
    return <>
        {favorites.items.length === 0
            && <div> You have not added cars to your favorites list </div>}
        <ListCar >
            {favorites.items.map((data, index) => (
                <CarCard
                    key={index}
                    data={data}
                />
            ))}
        </ListCar>
    </>
};

export default FavoritesList;

