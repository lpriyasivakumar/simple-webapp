package com.test

import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    install(CORS) {
        allowHost("localhost:3000")
    }
    install(ContentNegotiation) {
        json(Json { 
            prettyPrint = true
            isLenient = true
        })
    }
    configureRouting()
}
