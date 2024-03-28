import Banner from '../../components/feature/Banner/Banner';
import RecentPosts from '../../components/feature/Posts/RecentPosts/RecentPosts';
import WorkCard from '../../components/feature/Work/WorkCard';
import styles from './style.module.css';
import { SITE_URL } from '../../constants/constant';
import { useEffect, useState } from 'react';
const Home = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch(`${SITE_URL}/api/info.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        const [info] = jsonResponse;
        setInfo(info);
      });
  }, []);

  return (
    <>
      <Banner info={info} />
      <RecentPosts numberOfPosts="2" />
      <section className="featured-works container-fluid pad-tb-xl">
        <div className="container container-fluid f-col gap-m">
          <div
            className={`${styles['featured-works__header']} f-row f-justify-space gap-m`}
          >
            {' '}
            <h2 className="featured-works__title text-dark text-xl text-w500">
              Featured works
            </h2>
          </div>
          <WorkCard numberOfWorks="3" numberOfWorksMobile="1" />
        </div>
      </section>
    </>
  );
};

export default Home;
