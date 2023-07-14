// // import {switch} from 'react-router-dom'
// // import {Route, Switch} from 'react-router-dom'
// import './App.css'

// import Home from './components/Home'
// // import About from './components/About'
// // import Contact from './components/Contact'
// // import BlogsList from './components/BlogsList'
// // import BlogItemDetails from './components/BlogItemDetails'
// // import NotFound from './components/NotFound'

// const App = () => (
//   <div>
//     <Home />
//     {/* <Switch>
//       <Route exact path="/" component={BlogsList} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/blogs/:id" component={BlogItemDetails} />
//       <Route component={NotFound} />
//     </Switch> */}
//   </div>
// )

// export default App
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
