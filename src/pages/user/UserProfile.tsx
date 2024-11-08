import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


function UserProfile() {
    const user = useSelector((state: RootState) => state.user.user);
    return (
        <div>
            <h1>User Profile</h1>
            <p>{user?.email}</p>
            <p>{user?.fullName}</p>
            <p>{user?.bio}</p>
        </div>
    )
}

export default UserProfile
