import {
  ImagePreviewContainer,
  PicturePreview,
} from "../styledComponents/ImagePreview";
import { useImageBounceEffect } from "../hooks/BounceAnimation";
import { useEffect, useState } from "react";

export const ImagePreview = ({ image, setImageSelected }) => {
  const { imagePreviewRef } = useImageBounceEffect(image);
  const [color, setColor] = useState(`255, 255, 255`);

  useEffect(() => {
    const hexToRgb = () => {
      let color = image.avg_color;
      color = color.replace("#", "");
      const int = parseInt(color, 16);
      const r = (int >> 16) & 255;
      const g = (int >> 8) & 255;
      const b = int & 255;
      setColor(`${r}, ${g}, ${b}`);
    };
    hexToRgb();
  }, [image.avg_color]);

  return (
    <ImagePreviewContainer
      ref={imagePreviewRef}
      color={color}
      onClick={() => setImageSelected(null)}
    >
      <PicturePreview src={image.src.portrait} alt={image.src.alt} />
    </ImagePreviewContainer>
  );
};
