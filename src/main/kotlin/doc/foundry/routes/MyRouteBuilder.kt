package doc.foundry.routes

import org.apache.camel.builder.endpoint.EndpointRouteBuilder

class MyRouteBuilder : EndpointRouteBuilder() {
    override fun configure() {
        from("timer://stupidTimerToKeepAppAlive?fixedRate=true&period=300000")
            .log("timer!!!")
            /*.log("    on the topic ${headers[kafka.TOPIC]}")
            .log("    on the partition ${headers[kafka.PARTITION]}")
            .log("    with the offset ${headers[kafka.OFFSET]}")
            .log("    with the key ${headers[kafka.KEY]}")*/
    }


}