import { Container, Button} from "./styled";  

export default function SearchBar(onSearch) {
   return (
      <Container>
         
            <input type='search' />
            <Button onClick={onSearch}>Agregar</Button>
         
      </Container>
   );
}
