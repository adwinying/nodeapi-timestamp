const express = require('express')
const path = require('path')

const port = process.env.PORT || 8080
const app = express()

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

app.use(express.static(path.join(__dirname, 'public')))

app.get('/:inputTime', (req, res) => {
	let rawTime = parseInt(req.params.inputTime) * 1000 || req.params.inputTime
	let inputTime = new Date(rawTime)
	let result = {
		unix: null,
		natural: null
	}

	if ( isNaN(inputTime.getTime()) ) {
		res.json(result)
	} else {
		result.unix = inputTime.getTime() / 1000
		result.natural = `${monthNames[inputTime.getMonth()]} ${inputTime.getDate()}, ${inputTime.getFullYear()}`

		res.json(result)
	}
})

app.listen(port)
console.log('Listening on port', port)

module.exports = app
