import Header from "../UI/Header/Header";

export default function ContentLayout({ children, header, className }) {
  return (
    <article className="container">
      {header && <Header title={header} />}
      <section className={className}>{children}</section>
    </article>
  );
}
