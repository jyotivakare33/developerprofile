import Arrow from './Arrow';
import { ReactComponent as AccountCircle } from '../images/account_circle-24px.svg';

function developerDetails() {
    return (
        <div className="container_developer">
            <div>
                <AccountCircle className="account_circle" />
            </div>
            <p className="developer_name">Jyoti</p>
            <Arrow />
        </div>
    );
}

export default developerDetails;
