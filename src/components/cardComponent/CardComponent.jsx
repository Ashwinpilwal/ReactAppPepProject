import './cardComponent.css';

function CourseCard(props) {
    return (
        <article className="card">
            <img src={props.image} alt={props.title} />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p className="course-instructor">Instructor: {props.instructor}</p>
                <div className="course-meta">
                    <span className="course-level">{props.level}</span>
                    <span className="course-price">₹{props.price}</span>
                </div>
            </div>
        </article>
    );
}

export default CourseCard;