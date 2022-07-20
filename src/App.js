import {Routes,Route} from "react-router-dom"
import PostsProvider from "./contexts/posts-contex"
import "./assets/scss/main.scss"
import Home from "./pages/home/home"
import NotFound from "./pages/not-found/not-found"
import SinglePost from "./pages/single-post/single-post"

function App  () {

  
  return (
    <PostsProvider >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post/:id" element={<SinglePost />}/>
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    </PostsProvider>
  )
}
export default App