import React from 'react'
import {render} from 'react-dom'

import Manager from './component/manager'
import {BrowserRouter} from 'react-router-dom'

render(
    (<BrowserRouter>
    <Manager />
    </BrowserRouter>
    ),document.getElementById('root')
)
