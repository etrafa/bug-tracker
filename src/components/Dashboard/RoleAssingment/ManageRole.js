import RoleAssingment from "./RoleAssingment";
import YourPersonel from "./YourPersonel";

const ManageRole = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-4">Manage User Roles</h1>
      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto lg:flex lg:gap-12 lg:mt-12">
        <RoleAssingment />
        <YourPersonel />
      </div>
    </div>
  );
};

export default ManageRole;
