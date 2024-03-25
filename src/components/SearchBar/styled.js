//Stykled components mezcla entre CSS React y JS

import styled from "styled-components";

const Container = styled.div`
    /* display: flex;
    justify-content: end;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: rgba(255, 255, 255, 0.123); */

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
