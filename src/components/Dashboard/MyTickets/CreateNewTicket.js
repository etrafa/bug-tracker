import SubmitButton from "../../Utilities/SubmitButton";

const CreateNewTicket = () => {
  return (
    <div className="w-full lg:w-6/12 mr-16 my-8 lg:my-0">
      <h2 className="text-gray-400 text-xl text-center">New Ticket</h2>
      <div className="flex flex-col">
        <label className="flex my-4 items-center mx-3">
          <span className="w-32">Select Project:</span>
          <select className="border w-7/12 h-8">
            <option>A</option>
            <option>B</option>
          </select>
        </label>
        {/* <label className="flex my-4 items-center mx-3">
          <span className="w-32">Assign User:</span>
          <select className="border w-7/12 h-8">
            <option>A</option>
            <option>B</option>
          </select>
        </label> */}
        <div className="">
          <span className="w-32">Assign User:</span>
          <label for="vehicle1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            I have a bike
          </label>
          <label for="vehicle1">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            I have a bike
          </label>
        </div>
        <label className="flex my-4 items-center mx-3">
          <span className="w-32">Description:</span>
          <input type="text" className="border w-7/12 h-12" />
        </label>
        <label className="flex my-4 items-center mx-3">
          <span className="w-32">Attach a File:</span>
          <input
            id="attach-ticket-file"
            type="file"
            accept="image/png, image/jpeg"
          />
        </label>
        <button className=" bg-mainGreen w-44 h-10 mb-4 mx-auto mt-12 block text-white text-lg font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateNewTicket;
