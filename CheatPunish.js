ll.registerPlugin("CheatPunish", "example cheat punish for LLAC",
    { "major": 1, "minor": 0, "revision": 0 }, {});
const LLACRegisterPunishAction = ll.import("LLAC", "registerPunishAction")
const LLACDisableBuiltinPunish = ll.import("LLAC", "disableBuiltinPunish")


Function.prototype.getName = function () {
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
}

class LLAC {
    constructor() { }

    static registerPunishAction(func, PluginName) {
        ll.export(func, PluginName, func.getName())
        return LLACRegisterPunishAction(PluginName, func.getName())
    }

    static disableBuiltinPunish() {
        LLACDisableBuiltinPunish()
    }
}

var PunishLevelName = {
    0: "Warn",
    1: "Kick",
    2: "Ban"
}

var PunishReasonName = {
    0: "InvalidEnchant",
    1: "InvalidNbtItem",
    2: "IllegalAccess",
    3: "IllegalItemStack",
    4: "AutoClick",
    5: "InventoryMove",
    6: "InvalidName",
    7: "XpOrb"
}

const CheatCountKick = 4
const CheatCountBan = 8

function ExamplePunish(PunishLevel, PunishReason, Player, CheatCount) {
    var punishLevelStr = PunishLevelName[PunishLevel]
    var punishReasonStr = PunishReasonName[PunishReason]

    logger.info(`Punish: Level:${punishLevelStr} Reason:${punishReasonStr} PlayerName:${Player.realName} CheatCount:${CheatCount}`)
    if (CheatCount > CheatCountBan || PunishLevel == 2/*PunishLevel::Ban*/) {
        logger.info(`[Ban] Player \"${Player.realName}\" has been Banned for cheating, reason:${punishReasonStr}`)
        mc.runcmdEx(`ban ${Player.realName}`)
        return true
    }

    if (CheatCount > CheatCountKick || PunishLevel == 1/*PunishLevel::Kick*/) {
        logger.info(`[Ban] Player \"${Player.realName}\" has been Kicked for cheating, reason:${punishReasonStr}`)
        var kickMessage = `[AntiCheat] You have been kicked for ${punishReasonStr}`
        Player.kick(kickMessage);
    }

    return true
}

mc.listen("onServerStarted", () => {
    //disable built punish utils to prevent muti punish
    LLAC.disableBuiltinPunish()
    logger.info("RegisterPunish: ", LLAC.registerPunishAction(ExamplePunish, "CheatPunish"))
})