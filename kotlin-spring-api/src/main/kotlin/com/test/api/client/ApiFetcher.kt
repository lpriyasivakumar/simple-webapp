package com.test.api.client

import org.springframework.cloud.openfeign.FeignClient
import org.springframework.web.bind.annotation.GetMapping

data class ApiResponse(
  val message: String,
  val status: String
)

@FeignClient(name = "apiFetchClient", url = "https://dog.ceo/api/breeds/image/random")
interface ApiFetchClient {
  @GetMapping("")
  fun getResult(): ApiResponse?
}


