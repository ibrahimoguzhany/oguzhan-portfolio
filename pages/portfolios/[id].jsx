import PortfolioDetailComponent from "@/components/portfolios/PortfolioDetail";
import axios from "axios";

const fetchPortfolioById = (id) => {
  const query = `query Portfolio($id: ID) {
            portfolio(id: $id) {
                _id
                title
                company
                companyWebsite
                location
                jobTitle
                description
                startDate
                endDate
            }
        }`;
  const variables = { id };
  return axios
    .post("http://localhost:3000/graphql", { query, variables })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.portfolio);
};

const PortfolioDetail = ({ portfolio }) => {
  return <PortfolioDetailComponent portfolio={portfolio} />;
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  const portfolio = await fetchPortfolioById(query.id);
  return { portfolio };
};

export default PortfolioDetail;
