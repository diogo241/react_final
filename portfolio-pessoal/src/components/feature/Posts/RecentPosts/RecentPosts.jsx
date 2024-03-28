import { useEffect, useState } from 'react';
import { SITE_URL } from '../../../../constants/constant';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
function RecentPosts({ numberOfPosts }) {
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
      <section className="recent-posts container-fluid bg-accent--light pad-tb-xl">
        <div className="container container-fluid f-col gap-xs">
          <div className="recent-posts__header f-row f-justify-space gap-m">
            <h2 className="recent-posts__title text-dark text-xl text-w500">
              Recent Posts
            </h2>
            <Link to="/blog" className="recent-posts__link text-s text-accent">
              View All
            </Link>
          </div>

          <div className="recent-posts__cards f-row f-wrap gap-m f-justify-space f-align-center ">
            {posts
              .filter((posts, idx) => idx < numberOfPosts)
              .map((post) => {
                const date = new Date(post.date);
                const formattedDate = date.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                });
                return (
                  <div
                    className={`${styles['recent-posts__card']} pad-tb-m pad-rl-m col-lg-6 col-md-12 f-col`}
                    key={post.id}
                  >
                    <div className="recent-posts-card__content container-fluid f-col gap-xs">
                      <p className="recent-posts-card__title text-dark text-l text-w600">
                        {post.title}
                      </p>
                      <div className="recent-posts-card__info f-row f-align-center gap-xs">
                        <span className="text-dark text-xs">
                          {formattedDate}
                        </span>
                        <span className={styles['divider']}></span>
                        <span className="text-dark text-xs">
                          {post.category.main}, {post.category.secondary}
                        </span>
                      </div>
                      <p className="recent-posts-card__description text-dark text-m">
                        {post.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentPosts;
