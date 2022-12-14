import { useParams } from "react-router-dom";

let Recipe = () => {
    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export default Recipe;