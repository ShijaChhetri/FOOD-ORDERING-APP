import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>The food's not here! But the menu is still full of tasty treats.</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </div>
    );
};

export default Error;