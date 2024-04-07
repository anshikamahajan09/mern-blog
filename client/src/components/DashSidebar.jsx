import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <Sidebar.Item icon={HiArrowSmRight}>Sign Out</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
