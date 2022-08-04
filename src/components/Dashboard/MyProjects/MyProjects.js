import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";
import { useAuth } from "../../../firebase/firebaseConfig";
import MyProjectAsAdmin from "./MyProjectAsAdmin";
import MyProjectAsUser from "./MyProjectAsUser";

const MyProjects = () => {
  //get current user and their role
  const currentUser = useAuth();
  const { dbData: userRole } = useGetSingleDoc("users", currentUser?.uid);

  return (
    <div>
      {userRole?.role === "user" && <MyProjectAsUser />}
      {userRole?.role === "admin" && <MyProjectAsAdmin />}
    </div>
  );
};

export default MyProjects;
