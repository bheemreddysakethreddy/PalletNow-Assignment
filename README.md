#  PalletNow DataGrid

A React + MUI DataGrid app for listing products with search, filter, sorting, and pagination.

---

## Features

*  Search (debounced)
*  Category filter
*  Price sorting
*  Pagination
*  API integration
*  Fallback to local data on API failure

---

##  API

* Endpoint: `/cms/products`
* Header: `{ "x-internal-call": "true" }`

 **Note:** API has CORS issues so i used **dummy data fallback** for visual representation

---

##  Flow

```text
User Input → Debounce → API Call
            ↓ (if error)
        Local Data
            ↓
   Filter + Sort + Pagination
```

---

##  Tech Stack

* React
* MUI DataGrid
* JavaScript
* Tailwind CSS

---

##  Run

```
npm install
npm run dev
```

---
