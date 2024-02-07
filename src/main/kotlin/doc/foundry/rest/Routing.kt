package doc.foundry.rest


import com.google.gson.Gson
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import mu.KotlinLogging

fun Application.routing() {
    val log = KotlinLogging.logger {}


    val gson = Gson()


    routing {
        get("/test") {
            call.respondText("Hello World!")
        }
    }
}
