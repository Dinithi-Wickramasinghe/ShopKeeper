const stats = [
  {
    label: "Today's Sales",
    value: '$1,840.50',
    change: '+12.4%',
    detail: 'since yesterday',
    accent: 'emerald',
  },
  {
    label: 'Total Orders',
    value: '48',
    change: '+8.3%',
    detail: 'since yesterday',
    accent: 'blue',
  },
  {
    label: 'Products in Stock',
    value: '312',
    change: '0.6%',
    detail: 'since yesterday',
    accent: 'purple',
  },
  {
    label: 'Low Stock Items',
    value: '4',
    change: '-1%',
    detail: 'since yesterday',
    accent: 'amber',
  },
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
  {
    name: 'Organic Dark Breads (1kg)',
    sku: 'SKU-001',
    stock: '2 left',
  },
  {
    name: 'Eco-Friendly Paper Cups (10pk)',
    sku: 'SKU-010',
    stock: '3 left',
  },
  {
    name: 'Almond Milk Barista Edition (1L)',
    sku: 'SKU-004',
    stock: '4 left',
  },
  {
    name: 'Premium Matcha Powder (250g)',
    sku: 'SKU-006',
    stock: '2 left',
  },
]

const transactions = [
  {
    id: 'TX-9042',
    time: '10:32 AM',
    items: 3,
    total: '$42.50',
    payment: 'Card',
    status: 'Completed',
  },
  {
    id: 'TX-9041',
    time: '10:15 AM',
    items: 1,
    total: '$8.00',
    payment: 'Cash',
    status: 'Completed',
  },
  {
    id: 'TX-9040',
    time: '09:48 AM',
    items: 5,
    total: '$124.20',
    payment: 'Card',
    status: 'Completed',
  },
  {
    id: 'TX-9039',
    time: '09:12 AM',
    items: 2,
    total: '$31.50',
    payment: 'Mobile Pay',
    status: 'Completed',
  },
  {
    id: 'TX-9038',
    time: '08:55 AM',
    items: 4,
    total: '$65.00',
    payment: 'Card',
    status: 'Completed',
  },
]

function Dashboard() {
  const maxValue = Math.max(...weeklyData.map(({ value }) => value))

  return (
    <main className="content-panel">
      <header className="topbar">
        <div>
          <p className="welcome-text">Welcome back!</p>
          <h1><b>Dashboard</b></h1>
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
              <span className="stat-icon" aria-hidden="true">
                ↗
              </span>
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
                  <div
                    className="bar"
                    style={{
                      height: `${(value / maxValue) * 100}%`,
                    }}
                  />
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
              {transactions.map(
                ({ id, time, items, total, payment, status }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{time}</td>
                    <td>{items} items</td>
                    <td>{total}</td>
                    <td>{payment}</td>
                    <td>
                      <span className="status-badge">{status}</span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Dashboard