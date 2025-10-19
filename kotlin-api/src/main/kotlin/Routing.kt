package com.test

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*


val client = HttpClient(CIO)

fun Application.configureRouting() {
    routing {
        route("/") {
            handle {
                val targetUrl = "https://dog.ceo/api/breeds/image/random"
                val outgoingResponse = client.get(targetUrl).bodyAsText()
                call.respond(outgoingResponse)
            }
        }
    }
}