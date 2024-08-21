import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>츄핑 | {title}</title>
    </Helmet>
  );
};
