import "./show.css";

// eslint-disable-next-line react/prop-types
const Show = ({ direction, data }) => {
  const { title, url, description } = data;
  return (
    <article className={direction === "right" ? "show__right" : "show"}>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="show__info">
        <h3 className="info__title">{title}</h3>
        <p className="info__text">{description}</p>
      </div>
    </article>
  );
};

export default Show;
