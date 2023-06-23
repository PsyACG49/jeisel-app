import Show from "../show/Show";
import "./shows.css";

const Shows = () => {
  return (
    <section className="shows">
      <h2 className="section__subtitle">Algunas presentaciones</h2>

      <div className="shows__list">
        <Show />
        <Show direction="right" />
        <Show />
      </div>
    </section>
  );
};

export default Shows;
