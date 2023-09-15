import CarsList from 'components/CarsList/CarsList';
import { CatalogSection } from 'components/Catalog/CatalogPage.styled';
import { Container } from 'components/Shared/Container.styled';
import Form from 'components/Form/Form';

const CatalogPage = () => {
  return (
    <CatalogSection>
      <Container>
        <Form/>
        <CarsList />
      </Container>
    </CatalogSection>
  );
};

export default CatalogPage;
