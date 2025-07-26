import "./App.css";
import Course from "./Course";
import Header from "./Header";
import { courses } from "./data";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="flex mt-10 px-10 space-x-2 ">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
