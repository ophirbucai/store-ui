import { styled } from "../theme";

const button = styled.button`
  --size: 32px;
  --margin: 6px;
  margin: 0 var(--margin);
  border-radius: 6px;
  background: #202020;
  max-width: auto;
  min-width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 6px;
  @media (hover: hover) {
    &:hover {
      background: lighten(#202020, 3%);
    }
  }
  &:active {
    background: lighten(#202020, 3%);
  }
`;

export default {
  button,
};
