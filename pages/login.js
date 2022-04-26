import LoginForm from '@/components/forms/LoginForm';
import { Mutation } from 'react-apollo';
import { SIGN_IN } from '@/apollo/queries';
import withApolloV2 from "@/hoc/withApolloV2";
import Redirect from '@/components/shared/Redirect';
import { useSignIn } from '../apollo/actions';

const Login = () => {


  const errorMessage = (error) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Something went wrong';
  };
  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            <Mutation mutation={SIGN_IN}>
              {(signInUser, { data, error }) =>
                <>
                  <LoginForm onSubmit={loginData => signInUser({ variables: loginData })} />
                  {data && data.signIn && <Redirect to="/" />}
                  {error && <div className='alert alert-danger'>{errorMessage(error)}</div>}
                </>
              }
            </Mutation>

          </div>
        </div>
      </div>

    </>
  );
};

export default withApolloV2(Login);
