import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'
import Test from './pages/Test'
import TestFinish from './pages/TestFinish'
import PostManagement from './pages/PostManagement';
import SentApplications from './pages/SentApplications';
import ReceivedApplications from './pages/ReceivedApplications';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/testfinish" element={<TestFinish />} />
        <Route path='/postmanagement' element={<PostManagement />} />
        <Route path='/sentapplications' element={<SentApplications />} />
        <Route path='/receivedapplications' element={<ReceivedApplications/>} />
      </Routes>

    
    </>
  )
}

export default App