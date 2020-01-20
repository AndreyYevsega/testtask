import { useState, useEffect, useCallback } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://5c07ecd0646dca0013f87e8b.mockapi.io/flow'
      );

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setErrorMessage(
        'Please check your internet connection, or try again later.'
      );
    } finally {
      setLoading(false);
    }
  }, [setErrorMessage, setPosts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { posts, errorMessage, loading };
};

export default usePosts;
