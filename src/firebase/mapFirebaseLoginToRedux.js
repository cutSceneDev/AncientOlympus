import { loginUser, logoutUser } from '../store/actions/index'
import { connect } from 'react-redux'
import { auth } from '../firebase/firebase'

const firebaseStoreActions = (props) => {
  auth.onAuthStateChanged(user => {
    user ? (
      props.onloginUser(user.email)
    ) : (
      props.onlogoutUser()
    )
  })
  return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    onloginUser: email => dispatch( loginUser(email) ),
    onlogoutUser: () => dispatch( logoutUser() )
  }
}

export default connect(null, mapDispatchToProps)(firebaseStoreActions)