import axios from "axios";
import PortfolioCard from "@/components/portfolios/PortfolioCard";
import Link from "next/link";
import {useState} from 'react'

const graphlDeletePortfolio = (id) => {
  const query = `mutation DeletePortfolio {deletePortfolio(id: "${id}")}`;

  return axios
    .post("http://localhost:3000/graphql", { query }).then(({ data: graph }) => graph.data).then((data) => data.deletePortfolio)
};

const graphlUpdatePortfolio = (id) => {
  const query = `
  mutation UpdatePortfolio {
        updatePortfolio(id: "${id}", input: {
        title: "Updated Portfolio Title",
        company: "Updated Portfolio Company",
        companyWebsite: "Updated CompanyWebsite",
        location: "Updated Location",
        jobTitle: "Updated Job Tiele",
        description: "Updated Description.",
        startDate: "01/01/2011",
        endDate: "01/01/2013"
        })  {
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
}
        `;
        

  return axios
    .post("http://localhost:3000/graphql", { query })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.updatePortfolio);
};


const graphlCreatePortfolio = () => {
  const query = `
  mutation CreatePortfolio {
        createPortfolio(input: {
        title: "Job in Siemens 2",
        company: "New Company 2",
        companyWebsite: "www.dasdasdsa.com",
        location: "dasdasdas, dasdas",
        jobTitle: "New Job Title",
        description: "New Description.",
        startDate: "01/01/2011",
        endDate: "01/01/2013"
        })  {
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
}
        `;
  
  return axios
    .post("http://localhost:3000/graphql", { query })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.createPortfolio)
};


const fetchPortfolios = () => {
  const query = `query Portfolios {
            portfolios {
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
  return axios
    .post("http://localhost:3000/graphql", { query })
    .then(({ data: graph }) => graph.data)
    .then((data) => data.portfolios)
};



const Portfolios = ({ data }) => {
  const [portfolios, setPortfolios] = useState(data.portfolios)

  const createPortfolio = async () => {
    const newPortfolio = await graphlCreatePortfolio();
    setPortfolios([...portfolios, newPortfolio])
}

const updatePortfolio = async (id) => {
  const updatedPortfolio = await graphlUpdatePortfolio(id);
  const index = portfolios.findIndex(p=>p._id === id)  
  const newPortfolios = portfolios.slice()
  newPortfolios[index] = updatedPortfolio
  setPortfolios(newPortfolios)
}

const deletePortfolio = async (id) => {
  const deletedId = await graphlDeletePortfolio(id)
  const newPortfolios = portfolios.filter((p) => p._id !== deletedId);
  setPortfolios(newPortfolios)
}


  return (
    <>
      <div className="container">
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
          <button onClick={createPortfolio} className="btn btn-primary">
            Create Portfolio
          </button>
        </section>

        <section className="pb-5">
          <div className="row">
            {portfolios.map((portfolio) => (
              <div key={portfolio._id} className="col-md-4">
                <Link
                  href="/portfolios/[id]"
                  as={`/portfolios/${portfolio._id}`}
                >
                  <a className="card-link">
                    <PortfolioCard portfolio={portfolio} />
                  </a>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => updatePortfolio(portfolio._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePortfolio(portfolio._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { data: {portfolios} };
};

export default Portfolios;
