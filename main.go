package main

import (
	"github.com/gen2brain/beeep"
	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
)

func basic(title string, message string) {
	err := beeep.Notify(title, message, "./icon.png")
	if err != nil {
		panic(err)
	}
}

func main() {

	js := mewn.String("./frontend/build/static/js/main.js")
	css := mewn.String("./frontend/build/static/css/main.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  320,
		Height: 580,
		Title:  "crud",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Run()
}
