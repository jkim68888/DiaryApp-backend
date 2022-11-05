require("dotenv").config();
var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
var cors = require("cors")
var sequelize = require("./models").sequelize

var router = require("./routes/api")

var app = express()
sequelize.sync()

app.set("view engine", "jade")
app.set("views", path.join(__dirname, "views"))

app.use(
	cors({
		origin: ["http://localhost:4000", "http://192.168.35.167:4000","http://10.4.10.109:4000"],
		preflightContinue: false,
		credentials: true,
	})
)
	
app.use(express.static(path.join(__dirname, "public")))
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/api", router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render("error")
})

module.exports = app
