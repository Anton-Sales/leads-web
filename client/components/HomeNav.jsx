import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

const HomeNav = (props) => {
  return (
    <div>
      <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="dropdown navigation">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo"><strong>leads</strong></Link>
          </div>

          <div className="navbar-end">

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <Link to="/browse/map" className="has-text-light">browse</Link>
              </div>

              <div className="navbar-dropdown">
                <Link to="/browse/map" className="navbar-item">your community map</Link>
                <Link to="/browse/" className="navbar-item">leads</Link>
              </div>

            </div>

            <div className="navbar-item">
              <Link to="/post" className="has-text-light">post a lead</Link>
            </div>

            {
              props.auth.isAuthenticated
                ? <div className="navbar-item">
                  <button onClick={(props.dispatch(logoutUser()))}>Logout</button>
                </div>

                : <div className="navbar-item">
                  <Link to="/login" className="has-text-light">sign-in</Link>
                </div>
            }

            {
              !props.auth.isAuthenticated && (
                <div className="navbar-item">
                  <Link to="/register" className="has-text-light">register</Link>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  )

}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(HomeNav)
