import react from "react";

function Links(props){

return <div>
    <h3>Links</h3>
    <a href="https://github.com/liza">{props.github}</a>
    <a href="https://www.linkedin.com/in/liza/">{props.linkedin}</a>
    </div>
};

export default Links;