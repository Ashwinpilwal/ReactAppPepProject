import CourseCard from "../../components/cardComponent/CardComponent";
import courses from "../../data/courses";
import './dashboard.css';

function Dashboard() {
    return (
        <section className="dashboard-page">
            <div className="dashboard-hero">
                <div>
                    <span className="eyebrow">Summer learning</span>
                    <h1>Build skills with curated project-based courses</h1>
                    <p>Browse top-rated lessons, real practice projects, and mentor-led training for every learner.</p>
                </div>
            </div>

            <div className="courses-grid">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.title}
                        instructor={course.instructor}
                        price={course.price}
                        level={course.level}
                    />
                ))}
            </div>
        </section>
    );
}

export default Dashboard;