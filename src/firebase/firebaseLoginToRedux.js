import { loginUser, logoutUser } from '../store/actions/index'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase'

const firebaseStoreActions = (props) => {
  auth.onAuthStateChanged((user) => {
    user ? (
      props.login(user.email)
    ) : (
      props.logout()
    )
  })

  return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: email => dispatch(loginUser(email)),
    logout: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(firebaseStoreActions)