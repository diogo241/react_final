import Button from '../../ui/Button/Button';
import styles from './style.module.css';
import kid from '/src/assets/homepage/banner/kid.png';

function Banner({ info }) {
  return (
    <>
      <section className="banner container container-fluid f-row f-justify-space gap-l f-wrap pad-tb-l f-align-center">
        <div className={`${styles['banner__content']} col-lg-8 col-md-12 f-col f-align-start gap-xs`}>
          <h1 className="banner__title text-dark text-xxl text-w600">{`Hi, I am ${info.name}, ${info.job}`}</h1>
          <p className="banner__description text-dark text-m">
            {info.description}
          </p>
          <Button
            label="Download Resume"
            to={info.resume}
            type="btn-primary"
            target="_blank"
          />
        </div>
        <div className={styles['banner__img-wrapper']}>
          <img src={kid} alt="" className={styles['banner__img']} />
        </div>
      </section>
    </>
  );
}

export default Banner;
