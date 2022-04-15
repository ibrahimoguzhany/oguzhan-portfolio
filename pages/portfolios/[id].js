import PortfolioDetailComponent from "@/components/portfolios/PortfolioDetail";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from '../../apollo/queries'



 const PortfolioDetail = ({ query }) => {



  const { loading, error, data } = useQuery(GET_PORTFOLIO, {
    variables: { id: query.id }
  });
  const portfolio = (data && data.portfolio) || {};

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return <PortfolioDetailComponent portfolio={portfolio} />;
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

export default PortfolioDetail;
