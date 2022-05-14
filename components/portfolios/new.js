import withAuth from '@/hoc/withAuth';
import { PortfolioForm } from '@/components/forms/PortfolioForm';

const PortfolioNew = () => {
    returm(
        <>
            <div className='bwm-form mt-5'>
                <div className="row">
                    <div className="page-title">Create New Portfolio</div>
                    <PortfolioForm onSubmit={data => alert(JSON.stringify(data))} />
                    
                </div>
            </div>
        </>
    );
};

export default withApollo(withAuth(PortfolioNew, ['admin', 'instructor']));