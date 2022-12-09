import Header from "../UI/Header/Header";

export default function Article({ children, header, className }) {
  return (
    <article className="container section">
      {header && <Header title={header} />}
      <section className={className}>{children}</section>
    </article>
  );
}
