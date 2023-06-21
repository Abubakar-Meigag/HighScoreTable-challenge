
const TopButton = ({ handleClick }) => {

    return (
        <div>
            <button onClick={handleClick} className="sort-scores">
                Sort Scores
            </button>
        </div>
    );
};

export default TopButton;