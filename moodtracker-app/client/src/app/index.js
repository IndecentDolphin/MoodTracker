import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoodsList, MoodsInsert, MoodsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/moods/list" exact component={MoodsList} />
                <Route path="/moods/create" exact component={MoodsInsert} />
                <Route
                    path="/moods/update/:id"
                    exact
                    component={MoodsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App