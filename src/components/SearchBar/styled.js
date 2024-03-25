//Stykled components mezcla entre CSS React y JS

import styled from "styled-components";

const Container = styled.div`
 
  input {
    margin-right: 30px;
    border-radius: 10px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: rgb(141, 223, 238);
  color: darkblue;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
  }
`;

export { Container, Button };
