package main

import (
	"github.com/gen2brain/beeep"
	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
)

func basic() string {
	err := beeep.Notify("Title", "Message body", "./icon.png")
	if err != nil {
		panic(err)
	}

	return "World!"
}

func main() {

	js := mewn.String("./frontend/build/static/js/main.js")
	css := mewn.String("./frontend/build/static/css/main.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "crud",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Run()
}
