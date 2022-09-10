import styled from "styled-components";

export default function Movement({ movementData }) {

  const { description, price, date } = movementData;

  return (
    <Wrapper>
      <div>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </div>
      <Price>R$ {price}</Price>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.span`
  font-size: 16px;
  color: #C6C6C6;
`;

const Description = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #000000;
`;

const Price = styled.span`
  font-size: 16px;
  color: ${({ price }) => price > 0 ? '#03AC00' : '#C70000'} 
`;