
import courses from "./data/courses.js";

function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>{course.lecturer}</p>

      <strong>
        {course.completed ? "Completed" : "In progress"}
      </strong>

      <p>Progress: {course.progress}%</p>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>

      {courses.length > 0 ? (
        <section className="grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      ) : (
        <p>No courses available yet. Please check again later.</p>
      )}
    </main>
  );
}
