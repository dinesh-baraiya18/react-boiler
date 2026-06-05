
import { useState } from "react";
import DropdownTask from "./DropdownTask";
import DebounceTask from "./DebounceTask";
const InterviewTaskLink = [
  {
    name: "Dropdown Task",
    slug: "dropdown-task",
    component: DropdownTask,
  },
  {
    name: "Debounce Task",
    slug: "debounce-task",
    component: DebounceTask,
  },
]

interface InterviewTaskLink {
  name: string;
  slug: string;
  component: React.FC;
}

const InterviewTask = () => {
  const [selectedTask, setSelectedTask] = useState<InterviewTaskLink | null>(null);

  return (
    <section className="interview-task py-10 bg-gray-100 min-h-screen p-3">
      <div className="flex gap-5 ">
        <aside className="w-75 p-5 bg-white shaxlow rounded-xl min-h-screen">
          <h2 className="mb-10">Interview Task</h2>
          <div className="flex flex-col gap-3" >
            {
              InterviewTaskLink.map((link) => (
                <div key={link.name} className="">
                  <button className={`block w-full bg-gray-100 hover:bg-gray-200 
                    ${selectedTask?.slug === link.slug ? "bg-gray-300" : ""}`}

                    onClick={() => setSelectedTask(link)}>
                    {link.name}
                  </button>
                </div>
              ))
            }
          </div>
        </aside>

        <div className="p-5 bg-white shadow flex-1 rounded-xl">
          <h2 className="mb-5">{selectedTask?.name}</h2>
          {selectedTask?.component && <selectedTask.component />}
        </div>
      </div>

    </section>
  )
}

export default InterviewTask