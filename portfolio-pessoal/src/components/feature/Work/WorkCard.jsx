import { useEffect, useState } from 'react';
import { SITE_URL } from '../../../constants/constant';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const WorkCard = ({ numberOfWorks, numberOfWorksMobile }) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch(`${SITE_URL}/api/work.json`)
      .then((response) => response.json())
      .then((works) => {
        setWorks(works);
      });
  }, []);
  return (
    <>
      <div className="work-cards f-row f-wrap gap-m f-justify-space f-align-center ">
        {numberOfWorksMobile && numberOfWorks
          ? works
              .filter((work, index) =>
                window.innerWidth < 767
                  ? index < numberOfWorksMobile
                  : index < numberOfWorks
              )
              .map((work) => (
                <Link
                  to={`/works/${work.id}`}
                  key={work.id}
                  className={`${styles['work-card__wrapper']} container-fluid f-row gap-s col-lg-12 col-md-12 f-wrap`}
                >
                  <div
                    className={`${styles['work-card__image-wrapper']} col-lg-4 col-md-12`}
                    key={work.id}
                  >
                    <img
                      src={work.featured_image?.src}
                      alt={work.featured_image.alt}
                      className={`${styles['work-card__image']}`}
                    />
                  </div>
                  <div
                    className={`${styles['work-card__content']} col-lg-8 col-md-12 f-col gap-xs`}
                  >
                    <h3 className="work-card__title text-dark text-xxl text-w600">
                      {work.title}
                    </h3>
                    <div
                      className={`${styles['work-card__info']} f-row f-align-center gap-xs`}
                    >
                      <span className={`${styles['work-card__date']}`}>
                        {work.year}
                      </span>
                      <span className="text-dark--light text-m">
                        {work.category?.primary}
                      </span>
                    </div>
                    <p className="work-card__description text-dark text-m">
                      {work.description}
                    </p>
                  </div>
                </Link>
              ))
          : works.map((work) => (
              <Link
                to={`/works/${work.id}`}
                key={work.id}
                className={`${styles['work-card__wrapper']} container-fluid f-row gap-s col-lg-12 col-md-12 f-wrap`}
              >
                <div
                  className={`${styles['work-card__image-wrapper']} col-lg-4 col-md-12`}
                  key={work.id}
                >
                  <img
                    src={work.featured_image.src}
                    alt={work.featured_image.alt}
                    className={`${styles['work-card__image']}`}
                  />
                </div>
                <div
                  className={`${styles['work-card__content']} col-lg-8 col-md-12 f-col gap-xs`}
                >
                  <h3 className="work-card__title text-dark text-xxl text-w600">
                    {work.title}
                  </h3>
                  <div
                    className={`${styles['work-card__info']} f-row f-align-center gap-xs`}
                  >
                    <span className={`${styles['work-card__date']}`}>
                      {work.year}
                    </span>
                    <span className="text-dark--light text-m">
                      {work.category?.primary}
                    </span>
                  </div>
                  <p className="work-card__description text-dark text-m">
                    {work.description}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </>
  );
};

export default WorkCard;
