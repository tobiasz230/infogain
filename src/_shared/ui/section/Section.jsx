import "./Section.css";

const Section = ({ children, subheader, subheaderEnd }) => (
  <section className="section">
    {!!subheader && (
      <div className="section__header">
        <span className="section__subheader">{subheader}</span>
        {subheaderEnd}
      </div>
    )}
    <div className="section__row">{children}</div>
  </section>
);

export default Section;
