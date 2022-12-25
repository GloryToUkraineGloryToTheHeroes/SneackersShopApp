import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//import ProductPage from './pages/ProductsPage'
import { useRouter } from './router'
import { checkUserToken, createUserToken } from './redux/actions/user.actions'
import { NavBar } from './components/NavBar'

const App = ({singleUser, checkUserToken, createUserToken}) => {
  const routes = useRouter()

  React.useEffect(() => {
    checkUserToken()
  }, [checkUserToken])

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {routes}
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    singleUser: state.user.id
  }
}

const mapDispatchToProps = {
  checkUserToken, createUserToken
}

export default connect(mapStateToProps, mapDispatchToProps)(App)