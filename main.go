package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("./updated"))
	http.Handle("/", fs)

	PORT := os.Getenv("PORT")
	log.Printf("Listening on :%s...\n", PORT)
	err := http.ListenAndServe(":"+PORT, nil)
	if err != nil {
		log.Fatal(err)
	}
}
