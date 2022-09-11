import styled from "styled-components";

export default function Movement({ movementData }) {

  const { description, price, type, date } = movementData;

  function adjustNumber(number) {
    let adjusted = number.replace(',', '.');
    adjusted = Number(adjusted).toFixed(2);
    adjusted = adjusted.replace('.', ',');
    return adjusted;
  }

  return (
    <Wrapper>
      <div>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </div>
      <Price type={type}>R$ {adjustNumber(price)}</Price>
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
  color: ${({ type }) => type === "Income" ? '#03AC00' : '#C70000'} 
`;