import Show from "../show/Show";
import "./shows.css";
import { data } from "./data";

const Shows = () => {
  return (
    <section className="shows">
      <h2 className="section__subtitle">Presentaciones</h2>

      <div className="shows__list">
        <Show data={data[0]} />
        <Show data={data[1]} direction="right" />
        <Show data={data[2]} />
      </div>
    </section>
  );
};

export default Shows;
