import React, { useState } from 'react';
import { FlexContainer } from '../../globalStyles';
import IconWithIndicator from '../IconWithIndicator';
import {
  CardWrapper,
  CardFooter,
  Text,
  Author,
  Options,
  MainImage
} from './styled';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import Loader from '../Loader';

const PostCard = ({ image, text, ownerName, ownerImage, likes, comments }) => {
  const [mainImageError, setMainImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <CardWrapper>
      {imageLoading && <Loader />}
      {!mainImageError && (
        <MainImage
          onError={() => {
            setMainImageError(true);
            setImageLoading(false);
          }}
          onLoad={() => {
            setImageLoading(false);
          }}
          src={image}
          alt={text}
        />
      )}
      <CardFooter>
        <Text>{text}</Text>
        <FlexContainer justifyContent="space-between">
          <Author>
            <img src={ownerImage} alt={ownerName} />
            <p>{ownerName}</p>
          </Author>
          <Options>
            <IconWithIndicator count={likes} image={like} alt="like" />
            <IconWithIndicator count={comments} image={comment} alt="comment" />
          </Options>
        </FlexContainer>
      </CardFooter>
    </CardWrapper>
  );
};

export default PostCard;
