import "./NavigationCard.css";
import profileImg from "../../assets/images/image-jeremy.png";
import { frequencyValues } from "../../constants";

const NavigationCard = ({ frequency, onFrequencyChange }) => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image-container">
                    <img
                        className="img-profile"
                        src={profileImg}
                        alt="Jeremy Image"
                    />
                </div>
                <div className="profile-detail">
                    <p className="profile-prefix">Report for</p>
                    <h1 className="profile-name">Jeremy Robson</h1>
                </div>
            </div>
            <div className="frequency-container">
                <p
                    className={
                        frequency === frequencyValues.DAILY ? "selected" : ""
                    }
                    onClick={() => onFrequencyChange(frequencyValues.DAILY)}
                >
                    Daily
                </p>
                <p
                    className={
                        frequency === frequencyValues.WEEKLY ? "selected" : ""
                    }
                    onClick={() => onFrequencyChange(frequencyValues.WEEKLY)}
                >
                    Weekly
                </p>
                <p
                    className={
                        frequency === frequencyValues.MONTHLY ? "selected" : ""
                    }
                    onClick={() => onFrequencyChange(frequencyValues.MONTHLY)}
                >
                    Monthly
                </p>
            </div>
        </div>
    );
};

export default NavigationCard;
