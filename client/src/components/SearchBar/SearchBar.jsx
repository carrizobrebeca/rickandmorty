import { Container, Button } from "./styled";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);

  };
  
  const clearInput = () => {
    setId("");
  };
  
  return (
    <Container>
      {/* <ImputContainer> */}
      <input onChange={handleChange}  value={id} type="number"/>
      <Button onClick={() => {onSearch(id); clearInput();}}>Agregar</Button>
      {/* </ImputContainer> */}
    </Container>
  );
}
