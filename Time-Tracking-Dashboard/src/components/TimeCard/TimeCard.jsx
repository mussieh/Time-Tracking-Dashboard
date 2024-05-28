import "./TimeCard.css";
import ellipsisIcon from "../../assets/images/icon-ellipsis.svg";
import { frequencyValues, timeCategory } from "../../constants";
import exerciseImg from "../../assets/images/icon-exercise.svg";
import playImg from "../../assets/images/icon-play.svg";
import selfCareImg from "../../assets/images/icon-self-care.svg";
import socialImg from "../../assets/images/icon-social.svg";
import studyImg from "../../assets/images/icon-study.svg";
import workImg from "../../assets/images/icon-work.svg";

const TimeCard = ({ frequency, cardData }) => {
    const cardTitle = cardData.title;
    const currentHours = cardData.timeframes[frequency].current;
    const previousHours = cardData.timeframes[frequency].previous;

    const getPreviousStatus = () => {
        let message = "";
        switch (frequency) {
            case frequencyValues.DAILY:
                message = `Previous Day - ${previousHours}hrs`;
                break;
            case frequencyValues.WEEKLY:
                message = `Last Week - ${previousHours}hrs`;
                break;
            case frequencyValues.MONTHLY:
                message = `Last Month - ${previousHours}hrs`;
                break;
            default:
                message = "Time status can't be determined.";
        }
        return message;
    };

    const getBackgroundStyle = () => {
        const backgroundStyle = {};
        backgroundStyle.backgroundRepeat = "no-repeat";
        backgroundStyle.backgroundPosition = "top -1rem right 2rem";

        switch (cardData.title.toLowerCase()) {
            case timeCategory.WORK:
                backgroundStyle.backgroundColor = "var(--light-orange)";
                backgroundStyle.backgroundImage = `url(${workImg})`;
                break;
            case timeCategory.STUDY:
                backgroundStyle.backgroundColor = "var(--light-red)";
                backgroundStyle.backgroundImage = `url(${studyImg})`;
                break;
            case timeCategory.SOCIAL:
                backgroundStyle.backgroundColor = "var(--violet)";
                backgroundStyle.backgroundImage = `url(${socialImg})`;
                break;
            case timeCategory.SELF_CARE:
                backgroundStyle.backgroundColor = "var(--soft-yellow)";
                backgroundStyle.backgroundImage = `url(${selfCareImg})`;
                break;
            case timeCategory.PLAY:
                backgroundStyle.backgroundColor = "var(--soft-blue)";
                backgroundStyle.backgroundImage = `url(${playImg})`;
                break;
            case timeCategory.EXERCISE:
                backgroundStyle.backgroundColor = "var(--lime-green)";
                backgroundStyle.backgroundImage = `url(${exerciseImg})`;
                break;
        }
        return backgroundStyle;
    };

    return (
        <div style={getBackgroundStyle()} className="time-card-container">
            <div className="inner-time-card-container">
                <div className="time-card-header">
                    <p className="card-title">{cardTitle}</p>
                    <img
                        className="ellipsis-icon"
                        src={ellipsisIcon}
                        alt="Ellipsis Icon"
                    />
                </div>
                <div className="status-container">
                    <p className="card-hours">{currentHours}hrs</p>
                    <p className="card-status">{getPreviousStatus()}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;
