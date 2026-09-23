import {
  BrowserRouter,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css'

import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Sales from './pages/Sales'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'

type IconName =
  | 'grid'
  | 'box'
  | 'sales'
  | 'transactions'
  | 'settings'

const navItems: {
  label: string
  path: string
  icon: IconName
}[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'grid',
  },
  {
    label: 'Inventory',
    path: '/inventory',
    icon: 'box',
  },
  {
    label: 'Sales',
    path: '/sales',
    icon: 'sales',
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icon: 'transactions',
  },
]

function NavIcon({ icon }: { icon: IconName }) {
  if (icon === 'grid') {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6.5C4 5.672 4.672 5 5.5 5H10.5C11.328 5 12 5.672 12 6.5V10.5C12 11.328 11.328 12 10.5 12H5.5C4.672 12 4 11.328 4 10.5V6.5ZM12 6.5C12 5.672 12.672 5 13.5 5H18.5C19.328 5 20 5.672 20 6.5V10.5C20 11.328 19.328 12 18.5 12H13.5C12.672 12 12 11.328 12 10.5V6.5ZM4 13.5C4 12.672 4.672 12 5.5 12H10.5C11.328 12 12 12.672 12 13.5V18.5C12 19.328 11.328 20 10.5 20H5.5C4.672 20 4 19.328 4 18.5V13.5ZM12 13.5C12 12.672 12.672 12 13.5 12H18.5C19.328 12 20 12.672 20 13.5V18.5C20 19.328 19.328 20 18.5 20H13.5C12.672 20 12 19.328 12 18.5V13.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (icon === 'box') {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L19 7V17L12 21L5 17V7L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 3V12L19 17M12 12L5 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (icon === 'sales') {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 18L8.5 14L11.5 16L19 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8H19V12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (icon === 'transactions') {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 7H17M7 12H17M7 17H13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5V6M12 18V20.5M4.953 4.953L6.7 6.7M17.3 17.3L19.047 19.047M3.5 12H6M18 12H20.5M4.953 19.047L6.7 17.3M17.3 6.7L19.047 4.953"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function Layout() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 8.5C4 6.567 5.567 5 7.5 5H16.5C18.433 5 20 6.567 20 8.5V16.5C20 18.433 18.433 20 16.5 20H7.5C5.567 20 4 18.433 4 16.5V8.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M8 9H16M8 13H16M8 17H12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span>ShopKeeper</span>
        </div>

        <nav className="nav-menu" aria-label="Sidebar navigation">
          {navItems.map(({ label, path, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="nav-icon" aria-hidden="true">
                <NavIcon icon={icon} />
              </span>

              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-profile">
          <div className="profile-avatar">JM</div>

          <div>
            <strong>James Miller</strong>
            <small>Manager</small>
          </div>
        </div>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `nav-item footer-item ${isActive ? 'active' : ''}`
          }
        >
          <span className="nav-icon" aria-hidden="true">
            <NavIcon icon="settings" />
          </span>

          <span>Settings</span>
        </NavLink>
      </aside>

      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
          <Route
            path="transactions"
            element={<Transactions />}
          />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App