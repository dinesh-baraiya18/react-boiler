
import { useState } from "react";
import DropdownTask from "./DropdownTask";
const InterviewTaskLink = [
  {
    name: "Dropdown Task",
    slug: "dropdown-task",
    component: DropdownTask,
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
        <aside className="w-[300px] p-5 bg-gray-200 bg-white shaxlow rounded-xl">
          <h2 className="mb-5">Interview Task</h2>
          {
            InterviewTaskLink.map((link) => (
              <div key={link.name}>
                <button className="btn" key={link.name} onClick={() => setSelectedTask(link)}>
                  {link.name}
                </button>
              </div>
            ))
          }
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