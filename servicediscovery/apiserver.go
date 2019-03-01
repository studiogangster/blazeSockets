package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"blazesockets/servicediscovery/request"
	)


func main() {
	r := gin.Default()


	r.POST("/createRoom", func(c *gin.Context) {

		var json request.Room
		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

		}else {
			c.JSON(http.StatusOK, json)
		}


	})

	r.Run() // listen and serve on 0.0.0.0:8080
}