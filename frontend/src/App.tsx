import StatCard from './components/StatCard'
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-green-600">
          ShopKeeper
          <nav className="mt-8 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-green-50 text-green-700 font-medium">
              Dashboard
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              Inventory
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              Checkout
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              Transactions
            </button>
          </nav>
        </h1>
      </aside>
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's what's happening with your shop today.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Today's Sales"
            value="Rs. 24,500"
          />

          <StatCard
            title="Total Products"
            value="128"
          />

          <StatCard
            title="Low Stock"
            value="7"
          />

          <StatCard
            title="Transactions"
            value="34"
          />
        </div>
      </main>
    </div>
  )
}

export default App