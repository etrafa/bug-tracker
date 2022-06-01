//components
import UserChangePassword from "./UserChangePassword";
import UserProfileInformation from "./UserProfileInformation";

const UserProfile = () => {
  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6 block">
      <div className="w-11/12 mx-auto mt-24 relative border border-black pb-12">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-fbFillColor text-center text-white text-lg py-3">
          <h1 className="text-2xl font-extrabold tracking-wider">My Profile</h1>
        </div>
        <div className="w-full mt-8 flex flex-col lg:flex-row lg:justify-between">
          <UserProfileInformation />
          <UserChangePassword />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
