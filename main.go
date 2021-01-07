package main

import (
	"fmt"

	"github.com/gen2brain/beeep"
	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
	"github.com/mitchellh/mapstructure"
)

type MyData struct {
    A string
    B float64
    C int64
}

type Robot struct {
	Name string
}

func NewSession() *Robot {
	result := &Robot{
		Name: "Session",
	}
	return result
}

func (t *Robot) EndSession(todo string) string {
	message := "Your " + todo + " session has been ended"
	err := beeep.Notify("Notif", message, "./icon.png")
	if err != nil {
		panic(err)
	}
	return fmt.Sprintf("Your %s session has been ended ", todo)
}

func byPassData(data map[string] interface{}) MyData {
	var result MyData
	fmt.Printf("data: %#v\n", data)

	err := mapstructure.Decode(data, &result)
    if err != nil {
      // Do something with the error
    }
	fmt.Printf("result: %#v\n", result)
	return result
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
	app.Bind(byPassData)
	app.Bind(NewSession())
	app.Run()

}
