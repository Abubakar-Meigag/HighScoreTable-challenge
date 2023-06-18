import allCountryScores from "./scores";

const HighScores = () => {
    const data = allCountryScores; 

    data.map((ele) => (
        ele.scores.sort((a, b) => (
            b.s - a.s
        ))
    ))

    return data.map((el, index) => (
        <div key={index}>
            <table className="table">
                <thead>
                    <tr>
                        <th>High Scores:  {el.name}</th>
                    </tr>
                </thead>
                    {el.scores.map((e, key) => (
                    <tbody key={key}>
                        <tr>
                            <td>{e.n} </td>
                            <td> {parseFloat(e.s)}</td>
                        </tr>
                    </tbody>
                    ))}
            </table>
        </div>
    ));
};

export default HighScores;

