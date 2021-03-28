import { ReactComponent as AccountCircle } from '../images/account_circle-24px.svg';
import GithubIcon from '../images/github.png';
import LinkedinIcon from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import Medium from '../images/medium.png';
import CodeChef from '../images/codechef.png';
import Hackeerank from '../images/hackerrank.png';
import Email from '../images/email-24px.svg';
import { ReactComponent as Link } from '../images/link.svg';
import { ReactComponent as Business } from '../images/business-24px.svg';
import { ReactComponent as Location } from '../images/location.svg';

function ProfileInfo() {
    return (
        <div>
            <header className="developer-info">
                <div className="container_developer">
                    <AccountCircle className="account_circle_info" />
                    <div className="content_developer">
                        <p className="info_name">JYOTI VAKARE</p>
                        <p className="info_name designation">Web Developer</p>
                        <div className="container_developer">
                            <img src={GithubIcon} className="social_icon" alt="" />
                            <img src={Hackeerank} className="social_icon" alt="" />
                            <img src={LinkedinIcon} className="social_icon" alt="" />
                            <img src={Twitter} className="social_icon" alt="" />
                            <img src={Medium} className="social_icon" alt="" />
                            <img src={CodeChef} className="social_icon" alt="" />
                            <img src={Email} className="social_icon" alt="" />
                        </div>
                        <div className="container_developer">
                            <Location />
                            <span className="info_name location">Bangaluru </span>
                            <Business />
                            <span className="info_name location">Hsr </span>
                            <Link />
                            <span className="info_name location">Work.attech </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default ProfileInfo;
