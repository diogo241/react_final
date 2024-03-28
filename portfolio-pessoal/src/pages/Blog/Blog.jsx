import { SITE_URL } from '../../constants/constant';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${SITE_URL}/api/posts.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        const posts = jsonResponse;
        setPosts(posts);
      });
  }, []);

  return (
    <>
      <div className="posts container container-fluid f-col gap-m pad-tb-xl">
        <h1 className="posts__title text-dark text-xxl text-w700">Blog</h1>
        <div className="posts__wrapper f-col gap-m container-fluid text">
          {posts.map((post) => {
            const date = new Date(post.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            });
            return (
              <div
                className={`${styles['posts__card']} col-lg-12 col-md-12 f-col`}
                key={post.id}
              >
                <div className="posts-card__content container-fluid f-col gap-xs">
                  <p className="posts-card__title text-dark text-l text-w600">
                    {post.title}
                  </p>
                  <div className="posts-card__info f-row f-align-center gap-xs">
                    <span className="text-dark text-xs">{formattedDate}</span>
                    <span className={styles['divider']}></span>
                    <span className="text-dark--light text-xs">
                      {post.category.main}, {post.category.secondary}
                    </span>
                  </div>
                  <p className="posts-card__description text-dark text-m">
                    {post.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
