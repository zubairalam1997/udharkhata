import React, { useState } from 'react'


export default function AddEntry({ onAdd }) {
const [name, setName] = useState('')
const [amount, setAmount] = useState('')


const submit = () => {
if (!name || !amount) return alert('Missing fields')


onAdd({
id: Date.now(),
name,
amount,
status: 'Pending',
date: new Date().toLocaleDateString(),
})


setName('')
setAmount('')
}


return (
<div className="bg-white p-4 rounded-xl shadow mb-4">
<h3 className="font-medium mb-2">Add Credit</h3>
<input
className="w-full border rounded p-2 mb-2"
placeholder="Customer Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
className="w-full border rounded p-2 mb-2"
placeholder="Amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}
/>
<button
className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
onClick={submit}
>
Add Credit
</button>
</div>
)
}