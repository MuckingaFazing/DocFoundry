package doc.foundry


import doc.foundry.routes.MyRouteBuilder
import org.apache.camel.main.Main


//lateinit var camelContext: CamelContext

fun main(args: Array<String>) {
    val main = Main()
    main.configure().addRoutesBuilder(MyRouteBuilder())
    main.run()
    println("Camel Started")

}

