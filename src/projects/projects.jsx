export function Projects(props) {
  return (
    <>
      <div className="container text-center work-page-container">
        <div className="row justify-content-center">
          <h3 className="work-links-title roboto-black-italic"> {props.name} </h3>
          <a className="work-page-links" href={props.link}>
            <img className="work-page-img" src={props.source} alt={props.alt} />
          </a>
          <p className="work-page-descripiton raleway">{props.description}</p>
        </div>
      </div>
    </>
  );
}
