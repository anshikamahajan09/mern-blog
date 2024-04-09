import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

export default function DashSidebar() {
  const location = useLocation();
  console.log(location);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const dispatch = useDispatch();
  const handleSignout =async () => {
    try {
      const res = await fetch("/api/user/signout",{
        method:'POST'
      });
      const data = await res.json();
      if(data.success === false){
        console.log(data.message);
      }
      if(res.ok){
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="md:w-56 w-full">
      <Sidebar className="w-full ">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile" >
              <Sidebar.Item active={tab==='profile'} icon={HiUser} label={"User"} labelColor="dark" as={'div'}>
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={HiArrowSmRight} onClick={handleSignout}>Sign Out</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
