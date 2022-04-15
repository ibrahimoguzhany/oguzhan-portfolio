import PortfolioDetailComponent from "@/components/portfolios/PortfolioDetail";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from '../../apollo/queries'
import withApollo from "../../hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';


const PortfolioDetail = ({ query }) => {
  const { data,loading,error} = useQuery(GET_PORTFOLIO, {variables: {id: query.id}});
  const portfolio = data && data.portfolio || {}

  return <PortfolioDetailComponent portfolio={portfolio} />;
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

export default withApollo(PortfolioDetail, {getDataFromTree});
