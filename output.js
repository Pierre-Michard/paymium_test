{
	"users": [
		{ "id": 1, "btc_balance": 1, "eur_balance": 5 },
		{ "id": 2, "btc_balance": 5, "eur_balance": 1 }
	],
	"queued_orders": [
		{ "id": 1, "user_id": 1, "direction": "buy", "btc_amount": 1, "price": 5 },
		{ "id": 2, "user_id": 1, "direction": "sell", "btc_amount": 1, "price": 5 }
	],
	"orders": [
		{ "id": 1, "user_id": 1, "direction": "buy", "btc_amount": 1, "price": 5, "state": "executed" },
		{ "id": 2, "user_id": 1, "direction": "sell", "btc_amount": 1, "price": 5, "state": "executed" }
	]
}
