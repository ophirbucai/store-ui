import { styled } from "../theme";

export const description = styled.p`
  font-family: ${(props) => props.theme.fontFamily};
  padding: 0px 38px 30px;
  font-size: 16px;
  margin: 0;
  line-height: ${(props) => props.theme.lineHeight};
  color: ${(props) => props.theme.light.text};
  max-height: 25px;
  position: relative;
  transition: max-height 0.2s;
  &:after {
    display: block;
    content: "";
    inset: 0;
    position: absolute;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.13) 70%,
      rgba(255, 255, 255, 0.04) 100%
    );
  }
`;

export const wrapper = styled.article`
  font-family: ${(props) => props.theme.fontFamily};
  max-width: 480px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;
  background-color: ${(props) => props.theme.light.primary};
  &:hover ${description} {
    max-height: 300px;
    &:after {
      background-image: none;
    }
  }
`;

export const title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  margin: 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: ${(props) => props.theme.light.text};
  text-transform: capitalize;
`;

export const label = styled.span`
  margin: 0 0 47px 38px;
  margin-top: 15px;
  font-weight: 400;
  letter-spacing: 0.2em;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  text-transform: uppercase;
  color: ${(props) => props.theme.light.tag};
`;

export default {
  wrapper,
  title,
  description,
  label,
};
