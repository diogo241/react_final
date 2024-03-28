import WorkCard from "../../components/feature/Work/WorkCard";

const Works = () => {
  return (
    <>
      <div className="work container container-fluid f-col gap-m pad-tb-xl">
        <h1 className="work__title text-dark text-xxl text-w700">Work</h1>
        <div className="work__wrapper f-col gap-m container-fluid text">
          <WorkCard  />
        </div>
      </div>
    </>
  );
}

export default Works