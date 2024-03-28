import { useEffect, useState } from 'react';
import { SITE_URL } from '../../constants/constant';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';

const WorkDetails = () => {
  const [work, setWork] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${SITE_URL}/api/work.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        const [workItem] = jsonResponse.filter((work) => work.id == id);
        setWork(workItem);
      });
  }, []);

  return (
    <>
      <div className="work-detail container container-fluid f-col gap-m pad-tb-xl">
        <h1 className="work-detail__tile text-dark text-xxl text-w700">
          {work.title}
        </h1>
        <div className="work-detail__header f-col gap-s f-justify-center f-align-start">
          <div className="work-detail__info f-row gap-xs">
            <span className={`${styles['work-detail__date']}`}>
              {work?.year}
            </span>
            <span className="work-detail__categories text-dark--light text-m">
              {work.category?.primary}, {work.category?.secondary}{' '}
            </span>
          </div>
          <p className="work-detail__description text-dark text-m text-w400">
            {work.description}
          </p>
        </div>
        <div className="work-detail__content f-col f-align-start f-justify-start gap-xs">
          <div
            className={`${styles['work-detail__featured-image-wrapper']} col-lg-4 col-md-12`}
          >
            <img
              src={work.featured_image?.src}
              alt={work.featured_image?.alt}
              className={`${styles['work-detail__image']}`}
            />
          </div>
          <h2 className="work-detail__subtitle text-xxl text-dark text-w500 margin-top-xl">
            {work.subtitle}
          </h2>
          <h3 className="work-detail__content-title text-xl text-dark text-w500">
            {work.body_title}
          </h3>
          <p className="work-detail__content-body text-m text-dark text-w400">
            {work.body}
          </p>
          <div
            className={`${styles['work-detail__image-wrapper']} col-lg-4 col-md-12`}
          >
            <img
              src={work.first_img?.src}
              alt={work.first_img?.alt}
              className={`${styles['work-detail__image']}`}
            />
          </div>
          <div
            className={`${styles['work-detail__image-wrapper']} col-lg-4 col-md-12`}
          >
            <img
              src={work.secondary_img?.src}
              alt={work.secondary_img?.alt}
              className={`${styles['work-detail__image']}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetails;
