package doc.foundry

import org.aeonbits.owner.Config

@Config.Sources("classpath:ServerConfig.properties")
interface ServerConfig : Config {

    @Config.DefaultValue("/opt/doc/")
    fun staticRootFolder(): String

    //==========================================JWT========================================
    @Config.DefaultValue("AccessToDF")
    fun realm(): String

    @Config.DefaultValue("https://df.online")
    fun issuer(): String

    @Config.DefaultValue("false")
    fun useJWTSecurity(): Boolean

    @Config.DefaultValue("VeC93deLs0nf")
    fun jwtSecret(): String

}
