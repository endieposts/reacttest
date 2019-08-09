import React, { Component } from 'react';


class Skilllist extends Component {
    constructor(props) {
        super(props);
        this.state = { skills: []};
    }

    componentDidMount() {
        fetch('http://localhost:8082/skills/')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    skills: responseData._embedded.skills,
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        const tableRows = this.state.skills.map((skill, index) =>
            <tr key={index}><td><div className="TableText">{skill.name}</div></td>
                <td><div className="TableText">{skill.description}</div></td></tr>);
        return (
            <div className="App">
                <table><tbody>{tableRows}</tbody></table>
            </div>
        );
    }
}
export default Skilllist;