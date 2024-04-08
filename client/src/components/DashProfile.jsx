import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-full max-w-lg mx-auto p-3">
      <h1 className="text-center my-7 font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-5">
        <div className="w-32 h-32 self-center cursor-pointer shadow-lg overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user-profile"
            className="rounded-full border-8 border-[lightgray] w-full  h-full object-cover"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
        />
        <Button type="submit" gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>
      <div className="flex justify-between text-red-500 mt-5">
          <span className="cursor-pointer">Delete account</span>
          <span className="cursor-pointer">Sign out</span>
        </div>
    </div>
  );
}
