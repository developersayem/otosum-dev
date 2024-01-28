import UploadImg from "./UploadImg";

export default function addEmployeesPage() {
  return (
    <div className="p-5 m-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-black">Add Employee</h1>
      <p className="text-[#6C696A]">Create new employee</p>
      <div className="flex ">
        {/* FROM MAIN SECTIONS START */}
        <div className="bg-[#F8F8F8] m-5 p-5 w-96 rounded-xl">
          <div>
            <UploadImg />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
        </div>
        {/* FROM MAIN SECTIONS END */}
        {/* FROM 2MAIN SECTIONS START */}
        <div className=" m-5 p-5 w-96 rounded-xl">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Branch
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Role
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              State
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs bg-transparent"
            />
          </div>
        </div>
        {/* FROM 2MAIN SECTIONS END */}
      </div>
    </div>
  );
}
