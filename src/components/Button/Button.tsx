import React, { FC } from "react";
import styled from "styled-components";

export interface ButtonProps {
  label?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  color: #ff0000;
`;

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
