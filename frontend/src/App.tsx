import './App.css'

const navItems = [
  { label: 'Dashboard', active: true, icon: 'grid' },
  { label: 'Inventory', active: false, icon: 'box' },
  { label: 'Sales', active: false, icon: 'sales' },
  { label: 'Transactions', active: false, icon: 'transactions' },
  { label: 'Settings', active: false, icon: 'settings', footer: true },
]

const stats = [
  { label: "Today's Sales", value: '$1,840.50', change: '+12.4%', detail: 'since yesterday', accent: 'emerald' },
  { label: 'Total Orders', value: '48', change: '+8.3%', detail: 'since yesterday', accent: 'blue' },
  { label: 'Products in Stock', value: '312', change: '0.6%', detail: 'since yesterday', accent: 'purple' },
  { label: 'Low Stock Items', value: '4', change: '-1%', detail: 'since yesterday', accent: 'amber' },
]

const weeklyData = [
  { day: 'Mon', value: 58 },
  { day: 'Tue', value: 62 },
  { day: 'Wed', value: 73 },
  { day: 'Thu', value: 81 },
  { day: 'Fri', value: 67 },
  { day: 'Sat', value: 90 },
  { day: 'Sun', value: 70 },
]

const alerts = [
  { name: 'Organic Dark Breads (1kg)', sku: 'SKU-001', stock: '2 left' },
  { name: 'Eco-Friendly Paper Cups (10pk)', sku: 'SKU-010', stock: '3 left' },
  { name: 'Almond Milk Barista Edition (1L)', sku: 'SKU-004', stock: '4 left' },
  { name: 'Premium Matcha Powder (250g)', sku: 'SKU-006', stock: '2 left' },
]

const transactions = [
  { id: 'TX-9042', time: '10:32 AM', items: 3, total: '$42.50', payment: 'Card', status: 'Completed' },
  { id: 'TX-9041', time: '10:15 AM', items: 1, total: '$8.00', payment: 'Cash', status: 'Completed' },
  { id: 'TX-9040', time: '09:48 AM', items: 5, total: '$124.20', payment: 'Card', status: 'Completed' },
  { id: 'TX-9039', time: '09:12 AM', items: 2, total: '$31.50', payment: 'Mobile Pay', status: 'Completed' },
  { id: 'TX-9038', time: '08:55 AM', items: 4, total: '$65.00', payment: 'Card', status: 'Completed' },
]

function App() {
  const maxValue = Math.max(...weeklyData.map(({ value }) => value))

  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 8.5C4 6.567 5.567 5 7.5 5H16.5C18.433 5 20 6.567 20 8.5V16.5C20 18.433 18.433 20 16.5 20H7.5C5.567 20 4 18.433 4 16.5V8.5Z" stroke="currentColor" strokeWidth="1.7"/>
              <path d="M8 9H16M8 13H16M8 17H12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
            </svg>
          </div>
          <span>ShopKeeper</span>
        </div>

        <nav className="nav-menu" aria-label="Sidebar navigation">
          {navItems.map(({ label, active, icon, footer }) => (
            <button
              key={label}
              className={`nav-item ${active ? 'active' : ''} ${footer ? 'footer-item' : ''}`}
              type="button"
            >
              <span className="nav-icon" aria-hidden="true">
                {icon === 'grid' && (
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 6.5C4 5.672 4.672 5 5.5 5H10.5C11.328 5 12 5.672 12 6.5V10.5C12 11.328 11.328 12 10.5 12H5.5C4.672 12 4 11.328 4 10.5V6.5ZM12 6.5C12 5.672 12.672 5 13.5 5H18.5C19.328 5 20 5.672 20 6.5V10.5C20 11.328 19.328 12 18.5 12H13.5C12.672 12 12 11.328 12 10.5V6.5ZM4 13.5C4 12.672 4.672 12 5.5 12H10.5C11.328 12 12 12.672 12 13.5V18.5C12 19.328 11.328 20 10.5 20H5.5C4.672 20 4 19.328 4 18.5V13.5ZM12 13.5C12 12.672 12.672 12 13.5 12H18.5C19.328 12 20 12.672 20 13.5V18.5C20 19.328 19.328 20 18.5 20H13.5C12.672 20 12 19.328 12 18.5V13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                )}
                {icon === 'box' && (
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L19 7V17L12 21L5 17V7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M12 3V12L19 17M12 12L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                )}
                {icon === 'sales' && (
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 18L8.5 14L11.5 16L19 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 8H19V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
                {icon === 'transactions' && (
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>
                )}
                {icon === 'settings' && (
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5V6M12 18V20.5M4.953 4.953L6.7 6.7M17.3 17.3L19.047 19.047M3.5 12H6M18 12H20.5M4.953 19.047L6.7 17.3M17.3 6.7L19.047 4.953" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7"/></svg>
                )}
              </span>
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-profile">
          <div className="profile-avatar">JM</div>
          <div>
            <strong>James Miller</strong>
            <small>Manager</small>
          </div>
        </div>
      </aside>

      <main className="content-panel">
        <header className="topbar">
          <div>
            <p className="welcome-text">Good morning!</p>
            <h1>Dashboard</h1>
          </div>

          <div className="action-row">
            <button className="action-button secondary" type="button">
              <span className="button-plus">+</span>
              Add Product
            </button>
            <button className="action-button primary" type="button">
              New Sale
            </button>
          </div>
        </header>

        <section className="stats-grid" aria-label="Summary statistics">
          {stats.map(({ label, value, change, detail, accent }) => (
            <article key={label} className={`stat-card ${accent}`}>
              <div className="stat-header">
                <span className="stat-label">{label}</span>
                <span className="stat-icon" aria-hidden="true">↗</span>
              </div>
              <div className="stat-value-row">
                <h2>{value}</h2>
                <span className="trend-pill">{change}</span>
              </div>
              <p className="stat-detail">{detail}</p>
            </article>
          ))}
        </section>

        <section className="analytics-grid">
          <article className="panel chart-panel">
            <div className="panel-header">
              <div>
                <h3>Weekly Sales Performance</h3>
                <p>Total revenue calculated per day</p>
              </div>
            </div>

            <div className="chart-area" aria-label="Weekly sales chart">
              {weeklyData.map(({ day, value }) => (
                <div key={day} className="bar-group">
                  <div className="bar-wrapper">
                    <div className="bar" style={{ height: `${(value / maxValue) * 100}%` }} />
                  </div>
                  <span className="bar-label">{day}</span>
                </div>
              ))}
            </div>
          </article>

          <aside className="panel alert-panel">
            <div className="panel-header compact">
              <div>
                <h3>Low Stock Alert</h3>
                <p>Items needing immediate restock attention</p>
              </div>
            </div>

            <ul className="stock-list">
              {alerts.map(({ name, sku, stock }) => (
                <li key={sku} className="stock-item">
                  <div>
                    <strong>{name}</strong>
                    <small>{sku}</small>
                  </div>
                  <span className="stock-badge">{stock}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="panel table-panel">
          <div className="panel-header row-header">
            <div>
              <h3>Recent Transactions</h3>
              <p>Most recent point-of-sale checkouts</p>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Time</th>
                  <th>Purchased Items</th>
                  <th>Total Paid</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(({ id, time, items, total, payment, status }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{time}</td>
                    <td>{items} items</td>
                    <td>{total}</td>
                    <td>{payment}</td>
                    <td><span className="status-badge">{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App