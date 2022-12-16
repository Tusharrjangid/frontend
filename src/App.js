import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./component/Home/Home"
import Header from "./component/Header/Header"
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getUser, loadUser } from './actions/user';
import AdminPanel from './component/Admin/AdminPanel.js';
import Timeline from './component/Admin/Timeline';
import Youtube from './component/Admin/Youtube';
import Project from "./component/Admin/Project"

function App() {

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.login)
  const { loading,user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      {loading ? <div>Loading</div> : (
        <>
          <Header />
          <Routes>

            <Route path='/' element={<Home youtubes={user.youtube} timelines={user.timeline} skills={user.skills} />} />
            <Route path='/about' element={<About about={user.about} />} />
            <Route path='/projects' element={<Projects projects={user.projects} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path='/admin/timeline' element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route path='/admin/youtube' element={isAuthenticated ? <Youtube /> : <Login />} />
            <Route path='/admin/project' element={isAuthenticated ? <Project /> : <Login />} />


          </Routes>
          <Footer />
        </>
      )}
    </Router>
  )
}

export default App;
