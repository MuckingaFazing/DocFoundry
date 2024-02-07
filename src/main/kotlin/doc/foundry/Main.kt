package doc.foundry


import com.example.plugins.configureSecurity
import doc.foundry.plugins.configureHTTP
import doc.foundry.rest.routing
import doc.foundry.routes.MyRouteBuilder
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.apache.camel.main.Main


fun main() {

    val main = Main()
    main.configure().addRoutesBuilder(MyRouteBuilder())
    main.run()
    println("Camel Started")
    embeddedServer(Netty, port = 8080, host = "127.0.0.1", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    configureHTTP()
    configureSecurity()
    routing()
}

