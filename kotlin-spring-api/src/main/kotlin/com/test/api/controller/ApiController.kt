package com.test.api.controller

import com.test.api.client.ApiFetchClient
import com.test.api.client.ApiResponse
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class ApiController(private val apiFetchClient: ApiFetchClient) {
    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("")
    fun getResult(): ApiResponse? {
        println("Fetching data...")
        return apiFetchClient.getResult()
    }
}