import { gql, useLazyQuery } from "@apollo/client";

export const GET_PORTFOLIO = gql`
    query Portfolio($id: ID) {
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
        }
        `;

export const GET_PORTFOLIOS = gql`
    query Portfolios {
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

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
        createPortfolio(input: {
        title: "Job in Siemens 2"
        company: "New Company 2"
        companyWebsite: "www.dasdasdsa.com"
        location: "dasdasdas, dasdas"
        jobTitle: "New Job Title"
        description: "New Description."
        startDate: "2012-12-12T23:59Z"
        endDate: "2013-12-16T23:59Z"
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

export const UPDATE_PORTFOLIO = gql`
    mutation UpdatePortfolio($id: ID) {
        updatePortfolio(id: $id, input: {
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

export const DELETE_PORTFOLIO = gql`mutation DeletePortfolio($id:ID) {deletePortfolio(id: $id)}`;


// AUTH QUERIES STARTS ------------------
export const SIGN_UP = gql`
  mutation SignUp(
    $email: String!,
    $username: String!,
    $name: String,
    $avatar: String,
    $password: String!,
    $passwordConfirmation: String!
  ) {
    signUp(input: {
      email: $email
      username: $username
      name: $name
      avatar: $avatar
      password: $password
      passwordConfirmation: $passwordConfirmation
    })
  }
`;

export const SIGN_IN = gql`
  mutation SignIn(
    $email: String!,
    $password: String!,
  ) {
    signIn(input: {
      email: $email
      password: $password
    }) {
      _id
      username
      role
      avatar
    }
  }
`;

export const GET_USER = gql`
  query User {
    user {
      _id
      username
      role
    }
  }
`;
// AUTH QUERIES ENDS ------------------
