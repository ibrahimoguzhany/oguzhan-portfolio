import withApolloV2 from "@/hoc/withApolloV2";

const Logout = () => {


    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Login</h1>
                        <p>Signing out...</p>


                    </div>
                </div>
            </div>

        </>
    );
};

export default withApolloV2(Logout);
