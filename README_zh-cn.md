# LLAntiCheat-release
## Description

[English](README.md) | 简体中文  
LiteLoaderBDS的免费反作弊插件  
由社区驱动，并处于持续更新中  
不会加入已有开源解决方案的功能，除非集成会带来更好的体验  
如果需要防Toolbox进服请安装[AntiToolbox](https://github.com/ShrBox/AntiToolbox)  
由于Toolbox修改版泛滥，该方案拦截率较低，技术上没有可能解决

## 功能

- 反矿物透视
- 高性能矿物混淆
- 反刷经验球与经验
- 修复漏斗刷物品BUG
- ~~防止非法修改命令方块(矿车)和结构方块~~（Mojang已修复）
- 防杀戮光环（生成假人以进行检测有点小问题，默认禁用）
- 防非法附魔
- 防非法give（LL内置）
- 防调试包修改数据
- 修复推箱子崩服
- ~~修复切石机修改物品~~（Mojang已修复）
- ~~添加铁砧花费校验（反假经验）~~（Mojang已修复）
- 防虚假名字
- ~~修复荆棘复制物品和崩服bug~~（BDS已修复）
- 修复熔炉刷物
- 修复漏斗矿车刷物
- 新熔炉刷经验
- 防连点器
- 防飞行/传送（BDS内置）
- 防止范围破坏（BDS内置）

## 安装

### 通过Lip安装 (beta)

请确保你已经安装了Lip，请参考：<https://github.com/LiteLDev/Lip>.

运行下列命令安装最新版本：

```shell
lip install github.com/Tooth-Hub/LLAntiCheat
```

运行类似下列命令安装特定版本：

```shell
lip install github.com/Tooth-Hub/LLAntiCheat@1.3.0
```

### 手动安装

[下载](https://github.com/LiteLDev/LLAntiCheat-release/releases)

## 附加

> 请不要将本插件加入整合包并发布，本插件拒绝整合，更不要将LLAC反馈群放到整合包介绍帖子里，谢谢  
> 未经授权严禁转载

遇到问题，请优先查看配置文件，所有功能配置文件均可开关（部分对正常游戏无影响的除外）  
为了确保效果，请保证LL2.0内置的反刷物功能正常开启  
如有需要可以配合[LLEssentials](https://github.com/LiteLDev/LLEssentials)隐藏种子  
LLAC会将`server.properties`中的`correct-player-movement`和`server-authoritative-block-breaking`自动改为`true`  
但你需要保证`server-authoritative-movement`的类型为`server-auth`或者`server-auth-with-rewind`

**为保护私有软件，防止抄袭，本插件使用了其他技术保护我们发行的二进制文件，如遇杀毒软件误报，请加入（静态扫描）白名单，为保证您的安全建议不要关闭杀毒软件或禁用防火墙**

## 反馈/功能建议

WangYneos@outlook.com

## 反馈群

LLAC专用反馈QQ群: 931871701  
LL的QQ群/TG频道/discord服务器

## LiteLoader 反作弊配置文件解释

版本: 1.5.2  

```jsonc
{
    //反矿物透视
    //Anti x-ray
    "AntiXray": {
        //开关
        //Switch
        "AntiXrayObfs": true,
        //强制透明的方块(ID)
        //Force transparent blocks(ID)
        "ForceTransparentBlocks": []
    },
    "BuiltinPunish": {
        //作弊次数到达CheatCountBan执行的命令
        //Command executed when the number of cheats reaches CheatCountBan
        "BanCommand": "ban {player}",
        "CheatCountBan": 8,
        "CheatCountKick": 4,
        "CrashAsKick": false,
        "KickMessage": "[AntiCheat] You have been kicked for {reason}"
    },
    //附魔相关内容
    //Enchant related information
    "Enchant": {
        //最大等级，超过该等级的附魔将被清除
        //Max Level for Enchantments, Enchantments that exceed this level will be removed
        "MaxLevel": 5
    },
    //原版漏洞相关修复
    //Fixes for bugs that existed in the original BDS
    "FixOriginalBugSwitch": {
        //箱子崩服
        //Fix Illegal Chest that cause Server Crash
        "ChestCrash": true,
        //修复活塞推箱子复制物品
        //Fix CopyItem Bug when the Container is pushed by the piston
        "HopperReplicate": true,
        //修复异常堆叠
        //fix illegal itemStack Stacking which may be used for Copy Items
        "IllegalStack": true
    },
    //杀戮光环
    "KillAura": {
        //攻击间隔时间(毫秒)
        //Attack interval time(ms)
        "AttackIntervalMs": 75,
        //忽略的实体
        //Actors ininored
        "CPSIgnoreActors": [
            "minecraft:boat",
            "minecraft:minecart"
        ],
        //是否检查KillAura
        "CheckKillAura": true,
        //开启假人检测
        //Enable fake player for detection
        "EnableFakePlayer": false,
        //假人移动角度
        //Fake player's move angle
        "FakePlayerMoveAngle": 18,
        //假人的名称
        //Fake player's name
        "FakePlayerName": "LLAC",
        //假人移动次数
        //Fake player's move count
        "FakePlayerUpdateCount": 60,
        //假人移动间隔时间
        //Fake player's move interval
        "FakePlayerUpdateInterval": 2,
        //每秒杀死的实体数，超过此数量会判定玩家作弊
        //The number of entities killed in seconds, more than this number will determine the player cheating
        "KillPerTenSecond": 8
    },
    //功能开关
    "Switch": {
        //  是否检测刷经验行为
        //  Whether to detect illegal Experience or Level Request
        "AntiXpHack": true,
        //  反矿透
        //  Prevent Player from Using Xray Mods to find Ores
        "AntiXray": true,
        // 是否检测玩家破坏方块
        // Whether to detect player's breaking behavior
        "BreakingDetection": true,
        //  检查附魔
        //  Check Item's Enchantment
        "CheckEnchant": true,
        //  禁用命令方块矿车
        //  Disable Minecart with CommandBlock
        "DisableCommandBlockMinecart": true,
        //  禁用NPC
        //  Disable NPC
        "DisableNPC": true,
        //  阻止非法昵称
        //  Prevent invalid name
        "InvalidName": true,
        // 是否检测玩家移动
        // Whether to detect player movement
        "MovementDetection": true,
        //  阻止玩家在服务器中更换皮肤，用于阻止Horion的Crash功能
        //  Prevent player change skin in the server, for prevent horion's crash function
        "PreventChangeSkin": true,
        //  阻止在睡觉时丢出物品
        //  Prevent player drop item while sleeping
        "PreventSleepDrop": true
    }
}
```
