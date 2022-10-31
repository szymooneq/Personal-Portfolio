import Breadcrumb from './Breadcrumb';

const withBreadcrumb = (Component) => function HOC() {
  return (
    <>
      <Breadcrumb />
      <Component />
    </>
  );
};

export default withBreadcrumb
