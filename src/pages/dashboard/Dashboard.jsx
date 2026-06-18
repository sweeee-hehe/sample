import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Dashboard.css";

function Dashboard() {

const navigate = useNavigate();

const currentUser =
JSON.parse(
localStorage.getItem("currentUser")
);

useEffect(() => {

if (!currentUser) {

  navigate("/login");

}


}, []);

const storageKey =
`transactions_${currentUser?.id}`;

const [amount, setAmount] = useState("");
const [category, setCategory] = useState("Food");
const [date, setDate] = useState("");
const [description, setDescription] = useState("");

const [editId, setEditId] = useState(null);

const [transactions, setTransactions] =
useState(() => {


  return JSON.parse(
    localStorage.getItem(storageKey)
  ) || [];

});


useEffect(() => {


localStorage.setItem(
  storageKey,
  JSON.stringify(transactions)
);


}, [transactions]);

const totalIncome = 40000;

const totalExpense =
transactions.reduce(
(sum, item) =>
sum + Number(item.amount),
0
);

const savings =
totalIncome - totalExpense;

const categoryTotal = (cat) => {

return transactions

  .filter(
    (item) =>
      item.category === cat
  )

  .reduce(
    (sum, item) =>
      sum + Number(item.amount),
    0
  );


};

const handleSubmit = (e) => {

e.preventDefault();

if (!amount || !date) return;

if (editId) {

  const updatedTransactions =
    transactions.map((item) =>

      item.id === editId

        ? {
            ...item,
            amount,
            category,
            date,
            description,
          }

        : item
    );

  setTransactions(
    updatedTransactions
  );

  setEditId(null);

} else {

  const newExpense = {

    id: Date.now(),

    amount,

    category,

    date,

    description,

  };

  setTransactions([
    ...transactions,
    newExpense,
  ]);
}

setAmount("");
setCategory("Food");
setDate("");
setDescription("");


};

const editTransaction =
(transaction) => {


  setAmount(
    transaction.amount
  );

  setCategory(
    transaction.category
  );

  setDate(
    transaction.date
  );

  setDescription(
    transaction.description
  );

  setEditId(
    transaction.id
  );
};


const deleteTransaction =
(id) => {


  setTransactions(

    transactions.filter(
      (item) =>
        item.id !== id
    )

  );

  if (editId === id) {

    setEditId(null);

  }
};


const handleLogout = () => {

localStorage.removeItem(
  "currentUser"
);

navigate("/Login");


};

return (


<div className="dashboard-container">

  <div className="dashboard-header">

    <div>

      <h1>
        Welcome,
        {" "}
        {currentUser?.name}
        👋
      </h1>

      <p>
        Track your expenses
        smarter
      </p>

    </div>

    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>

  <div className="expense-form">

    <h2>

      {editId
        ? "Edit Expense"
        : "Add Expense"}

    </h2>

    <form
      onSubmit={handleSubmit}
    >

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(
            e.target.value
          )
        }
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      >

        <option>Food</option>
        <option>Shopping</option>
        <option>
          Transportation
        </option>
        <option>Bills</option>
        <option>
          Education
        </option>
        <option>
          Entertainment
        </option>

      </select>

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <button
        type="submit"
      >

        {editId
          ? "Update Expense"
          : "Add Expense"}

      </button>

    </form>

  </div>

  <div className="dashboard-cards">

    <div className="card">

      <h3>
        Total Income
      </h3>

      <p>
        ₹{totalIncome}
      </p>

    </div>

    <div className="card">

      <h3>
        Total Expense
      </h3>

      <p>
        ₹{totalExpense}
      </p>

    </div>

    <div className="card">

      <h3>
        Savings
      </h3>

      <p>
        ₹{savings}
      </p>

    </div>

    <div className="card">

      <h3>
        Transactions
      </h3>

      <p>
        {transactions.length}
      </p>

    </div>

  </div>

  <div className="recent-transactions">

    <h2>
      Recent Transactions
    </h2>

    {transactions.length === 0 ? (

      <p>
        No transactions
        added yet.
      </p>

    ) : (

      transactions.map(
        (item) => (

          <div
            className="transaction"
            key={item.id}
          >

            <div>

              <strong>
                {
                  item.category
                }
              </strong>

              <p>
                {
                  item.description
                }
              </p>

              <small>
                {item.date}
              </small>

            </div>

            <div>
              ₹{item.amount}
            </div>

            <div className="action-buttons">

              <button
                type="button"
                className="edit-btn"
                onClick={() =>
                  editTransaction(
                    item
                  )
                }
              >
                Edit
              </button>

              <button
                type="button"
                className="delete-btn"
                onClick={() =>
                  deleteTransaction(
                    item.id
                  )
                }
              >
                Delete
              </button>

            </div>

          </div>

        )
      )

    )}

  </div>

</div>


);
}

export default Dashboard;
