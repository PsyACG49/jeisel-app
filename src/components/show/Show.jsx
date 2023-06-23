import "./show.css";

// eslint-disable-next-line react/prop-types
const Show = ({ direction }) => {
  return (
    <article className={direction === "right" ? "show__right" : "show"}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/daZUbpYT678?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="show__info">
        <h3 className="info__title">Title Show</h3>
        <p className="info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamc
        </p>
      </div>
    </article>
  );
};

export default Show;
