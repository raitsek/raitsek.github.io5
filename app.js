// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Auth components
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

// Game components
import Slots from "./components/Games/Slots";
import Crash from "./components/Games/Crash";
import Dice from "./components/Games/Dice";

// Admin components
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import UserManagement from "./admin/UserManagement";
import Transactions from "./admin/Transactions";
import GameStats from "./admin/GameStats";
import Settings from "./admin/Settings";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";

// UI components
import Loader from "./components/UI/Loader";
import ErrorMessage from "./components/UI/ErrorMessage";

function App() {
  return (
    <Router>
      <Switch>
        {/* User Auth */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {/* Games (should be protected in a real app) */}
        <Route path="/slots" component={Slots} />
        <Route path="/crash" component={Crash} />
        <Route path="/dice" component={Dice} />

        {/* Admin Panel */}
        <Route path="/admin/login" component={AdminLogin} />
        <ProtectedAdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <ProtectedAdminRoute path="/admin/users" component={UserManagement} />
        <ProtectedAdminRoute path="/admin/transactions" component={Transactions} />
        <ProtectedAdminRoute path="/admin/games" component={GameStats} />
        <ProtectedAdminRoute path="/admin/settings" component={Settings} />

        {/* Default route */}
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
