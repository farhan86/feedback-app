import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
}

export default FeedbackList
