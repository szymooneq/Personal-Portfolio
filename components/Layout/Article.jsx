import Title from "../UI/Title/Title";

export default function Article({ children, header, style }) {
  return (
    <article className="container section">
      {header && <Title title={header} />}
      <section className={style}>
        {children}
      </section>
    </article>
  )
}
