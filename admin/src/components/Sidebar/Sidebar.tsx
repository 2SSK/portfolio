import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="w-64 h-screen">
      <div className="w-full h-full bg-sidebar">
        <ul className="flex flex-col gap-1 p-4">
          <li className="sidebar-btn" onClick={() => router.push("/")}>
            Bio
          </li>
          <li className="sidebar-btn" onClick={() => router.push("/resume")}>
            Resume
          </li>
          <li className="sidebar-btn" onClick={() => router.push("/tool")}>
            Tools
          </li>
          <li className="sidebar-btn" onClick={() => router.push("/social")}>
            Social
          </li>
          <li className="sidebar-btn" onClick={() => router.push("/project")}>
            Project
          </li>
          <li
            className="sidebar-btn"
            onClick={() => router.push("/experience")}
          >
            Experience
          </li>
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
