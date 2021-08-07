import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import AddCustomer from 'views/AddCustomer'
import Customer from 'views/Customer'
import Customers from 'views/Customers'
import Landing from 'views/Landing'
import Transactions from 'views/Transactions'

export default function Main() {
    return (
        <div>
            <Router>
            <Navbar transparent />
                <Route exact path="/" component={Landing} />
                <Route exact path="/customers" component={Customers} />
                <Route exact path="/customers/:id" component={Customer} />
                <Route exact path="/transactions" component={Transactions} />
                <Route exact path="/add" component={AddCustomer} />
                <Footer />
            </Router>
        </div>
    )
}
