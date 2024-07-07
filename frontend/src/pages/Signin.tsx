import { AuthSignin } from '../components/AuthSignin';
import { Quote } from '../components/Quote';

const Signin = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div><AuthSignin /></div>
                <div className='invisible lg:visible'>
                    <Quote />
                </div>
            </div>
        </div>
    );
};

export default Signin