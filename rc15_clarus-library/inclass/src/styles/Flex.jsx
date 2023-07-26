import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ aling }) => aling || "center"};
`;
export default Flex;
