import React, { useCallback } from 'react';
import { withSize } from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ContentWrapper, Title, Description } from './styled';
import { HashTag } from '../../globalStyles';
import usePosts from '../../hooks/usePosts';
import Loader from '../../components/Loader';
import PostCard from '../../components/PostCard';

const MainPage = ({ size: { width } }) => {
  const { posts, errorMessage, loading } = usePosts();
  const getColumnWidth = useCallback(() => {
    if (width >= 1280) {
      return '20%';
    } else if (width > 1024) {
      return '25%';
    } else if (width > 768) {
      return '33.33%';
    } else if (width > 480) {
      return '50%';
    }

    return '100%';
  }, [width]);

  const renderPosts = () => {
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    if (loading) {
      return <Loader />;
    }
    if (posts) {
      return (
        <StackGrid
          monitorImagesLoaded
          gutterWidth={16}
          gutterHeight={16}
          columnWidth={getColumnWidth()}
        >
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </StackGrid>
      );
    }
  };

  return (
    <>
      <Header />
      <Footer />
      <ContentWrapper>
        <Title>Candy cotton candy sesame snaps biscuit</Title>
        <Description>
          Candy cotton candy sesame <HashTag>#Design</HashTag>{' '}
          <HashTag>#HR</HashTag> biscuit dessert topping halvah marshmallow
          gummies. Pie toffee dragée chocolate toffee biscuit. Icing chocolate
          cake ice cream jelly beans chocolate cake soufflé candy.
        </Description>
        {renderPosts()}
      </ContentWrapper>
    </>
  );
};

export default withSize()(MainPage);
