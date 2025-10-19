   package main

    import (
    	"log"
		"io"
    	"net/http"
		"net/url"
    )

	const apiUrl = "https://dog.ceo/api/breeds/image/random"

    func main() {
    	http.HandleFunc("/", requestHandler) // Handle all routes with requestHandler
		log.Println("Starting server on :8080")
    	log.Fatal(http.ListenAndServe(":8080", nil))
    }
	func requestHandler(w http.ResponseWriter, r *http.Request) {
		// Set CORS header to allow requests from localhost:3000
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		// Parse the API URL
		parsedUrl, err := url.Parse(apiUrl)
		if err != nil {
			http.Error(w, "Failed to parse URL", http.StatusInternalServerError)
			return
		}
		// Make the GET request to the external API
		resp, err := http.Get(parsedUrl.String())
		if err != nil {
			http.Error(w, "Failed to fetch data from API", http.StatusInternalServerError)
			return
		}
		// Ensure the response body is closed after reading
		defer resp.Body.Close()
		// Set the content type and write the response body to the client
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(resp.StatusCode)
		_, err = io.Copy(w, resp.Body)
		if err != nil {
			http.Error(w, "Failed to read response body", http.StatusInternalServerError)
			return
		}
		// Successfully fetched and returned the dog image
	}