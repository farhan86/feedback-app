import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }

  //with animation
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

//Without animation
//   return (
//     <div className='feedback-list'>
//       {feedback.map((item) => (
//         <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//     </div>
//   )
// }

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
}

export default FeedbackList
