import FavoritesList from 'components/FavoritesList/FavoritesList';
import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
import { Container } from 'components/Shared/Container.styled';

const FavoritesPage = () => {
  return (
    <CatalogSection>
      <Container>
        <FavoritesList />
      </Container>
    </CatalogSection>
  );
};

export default FavoritesPage;
