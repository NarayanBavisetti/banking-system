import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Landing from "./views/Landing"
import Customers from "./views/Customers"
import Customer from "./views/Customer"
import Transactions from "./views/Transactions"
import AddCustomer from "./views/AddCustomer"
import Footer from './components/Footer'
import Navbar from "./components/Navbar"
import StepContext from './Context/StepContext'


export default function Main() {
    return (
        <div>
            <StepContext>
            <Router>
            <Navbar transparent />
            <Route exact path="/" component={Landing} />
                <Route exact path="/customers" component={Customers} />
                <Route exact path="/customers/:id" component={Customer} />
                <Route exact path="/transactions" component={Transactions} />
                <Route exact path="/add" component={AddCustomer} />
               <Footer />
            </Router>
            </StepContext>
        </div>
    )
}
