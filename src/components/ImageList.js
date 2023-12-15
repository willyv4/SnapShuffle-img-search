import { UlImageList } from "../styledComponents/ImageListUnorderd";
import { StyledDiv } from "../styledComponents/ImageDiv";
import { ImageCard } from "../styledComponents/ImageCard";
import { useState, useEffect, useContext } from "react";
import imgApi from "../api/pexelsApi";
import { MyContext } from "../App";
import { useImageHoverEffect } from "../hooks/ImageHover";
import { ImagePreview } from "./ImagePreview";

export const ImageList = () => {
  const [images, setImages] = useState([]);
  const { query } = useContext(MyContext);
  const [imageSelected, setImageSelected] = useState(null);
  const { imageElements } = useImageHoverEffect(images);

  useEffect(() => {
    async function getPhotos() {
      const images = await imgApi.getPhotosByName(query);
      if (images) setImages(images);
    }
    if (query) getPhotos();
  }, [query]);

  return (
    <>
      {imageSelected && (
        <ImagePreview
          image={imageSelected}
          setImageSelected={setImageSelected}
        />
      )}
      {images && (
        <UlImageList role="list">
          {images.map((image, index) => (
            <li
              onClick={() => setImageSelected(image)}
              id="image-card"
              key={image.id}
              style={{ position: "relative", cursor: "pointer" }}
            >
              <StyledDiv
                ref={(el) => (imageElements.current[index] = el)}
                className="image-card"
              >
                <ImageCard src={image.src.portrait} alt={image.src.alt} />
              </StyledDiv>
            </li>
          ))}
        </UlImageList>
      )}
    </>
  );
};
