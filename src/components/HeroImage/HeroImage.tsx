import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHero = styled.div<{ disabled?: boolean }>`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  background: rgba(255, 255, 255, 0.7);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #000;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = "/mofusand.jpg",
  text = "mofusand",
  disabled,
}) => {
  return (
    <StyledHero disabled={disabled}>
      <StyledImg src={src} alt={text} />
      <TextOverlay>{text}</TextOverlay>
    </StyledHero>
  );
};

export default HeroImage;
