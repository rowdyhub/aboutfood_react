import { useParams } from "react-router-dom";
import styles from './Profile.module.css';


let Profile = () => {

    const {id} = useParams();
    
    return (
        <div>
            Profile {id}
        </div>
    );
}

export default Profile;