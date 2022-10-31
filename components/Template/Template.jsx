const Element = ({ className, title, children }) => (
  <div className={className}>
    <h2>{title}</h2>
    {children}
  </div>
);

const List = ({ className, title, children }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {children}
    </ul>
  </div>
);

export default function Template(props) {
  switch (props.type) {
    case 'list':
      return <List {...props} />;
    default:
      return <Element {...props} />;
  }
}
