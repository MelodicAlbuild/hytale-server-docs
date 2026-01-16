---
title: Master Packet List
sidebar_position: 1
---

# Master Packet List

This registry maps every Packet ID to its corresponding documentation page.

### Key

- **C ➝ S:** Client to Server
- **S ➝ C:** Server to Client
- **Bi-Dir:** Bi-Directional (**C ➝ S** OR **S ➝ C**)

## 📦 0–39: Connection & Setup

| ID | Packet | Bound | Link |
| :--- | :--- | :--- | :--- |
| **0** | `Connect` | C ➝ S | [View in Connection](/packets/packet-list/connection#connect-0) |
| **1** | `Disconnect` | S ➝ C | [View in Connection](/packets/packet-list/connection#disconnect-1) |
| **2** | `Ping` | Bi-Dir | [View in Connection](/packets/packet-list/connection#ping-2) |
| **3** | `Pong` | Bi-Dir | [View in Connection](/packets/packet-list/connection#pong-3) |
| **10** | `Status` | S ➝ C | [View in Auth](/packets/packet-list/auth#status-10) |
| **11** | `AuthGrant` | S ➝ C | [View in Auth](/packets/packet-list/auth#authgrant-11) |
| **12** | `AuthToken` | C ➝ S | [View in Auth](/packets/packet-list/auth#authtoken-12) |
| **13** | `ServerAuthToken` | S ➝ C | [View in Auth](/packets/packet-list/auth#serverauthtoken-13) |
| **14** | `ConnectAccept` | S ➝ C | [View in Auth](/packets/packet-list/auth#connectaccept-14) |
| **15** | `PasswordResponse` | C ➝ S | [View in Auth](/packets/packet-list/auth#passwordresponse-15) |
| **16** | `PasswordAccepted` | S ➝ C | [View in Auth](/packets/packet-list/auth#passwordaccepted-16) |
| **17** | `PasswordRejected` | S ➝ C | [View in Auth](/packets/packet-list/auth#passwordrejected-17) |
| **18** | `ClientReferral` | C ➝ S | [View in Auth](/packets/packet-list/auth#clientreferral-18) |
| **20** | `WorldSettings` | S ➝ C | [View in Setup](/packets/packet-list/setup#worldsettings-20) |
| **21** | `WorldLoadProgress` | S ➝ C | [View in Setup](/packets/packet-list/setup#worldloadprogress-21) |
| **22** | `WorldLoadFinished` | S ➝ C | [View in Setup](/packets/packet-list/setup#worldloadfinished-22) |
| **23** | `RequestAssets` | C ➝ S | [View in Setup](/packets/packet-list/setup#requestassets-23) |
| **24** | `AssetInitialize` | S ➝ C | [View in Setup](/packets/packet-list/setup#assetinitialize-24) |
| **25** | `AssetPart` | S ➝ C | [View in Setup](/packets/packet-list/setup#assetpart-25) |
| **26** | `AssetFinalize` | S ➝ C | [View in Setup](/packets/packet-list/setup#assetfinalize-26) |
| **27** | `RemoveAssets` | S ➝ C | [View in Setup](/packets/packet-list/setup#removeassets-27) |
| **28** | `RequestCommonAssetsRebuild` | C ➝ S | [View in Setup](/packets/packet-list/setup#requestcommonassetsrebuild-28) |
| **29** | `SetUpdateRate` | S ➝ C | [View in Setup](/packets/packet-list/setup#setupdaterate-29) |
| **30** | `SetTimeDilation` | S ➝ C | [View in Setup](/packets/packet-list/setup#settimedilation-30) |
| **31** | `UpdateFeatures` | S ➝ C | [View in Setup](/packets/packet-list/setup#updatefeatures-31) |
| **32** | `ViewRadius` | C ➝ S | [View in Setup](/packets/packet-list/setup#viewradius-32) |
| **33** | `PlayerOptions` | C ➝ S | [View in Setup](/packets/packet-list/setup#playeroptions-33) |
| **34** | `ServerTags` | S ➝ C | [View in Setup](/packets/packet-list/setup#servertags-34) |

## 📚 40–99: Registry & Assets

| ID | Packet | Type | Link |
| :--- | :--- | :--- | :--- |
| **40** | `UpdateBlockTypes` | Registry | [View in Assets](/packets/packet-list/assets#updateblocktypes-40) |
| **41** | `UpdateBlockHitboxes` | Physics | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **42** | `UpdateBlockSoundSets` | Audio | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **43** | `UpdateBlockParticleSets` | FX | [View in Assets](/packets/packet-list/assets) |
| **44** | `UpdateBlockSets` | Registry | [View in Assets](/packets/packet-list/assets) |
| **45** | `UpdateBlockGroups` | UI | [View in Assets](/packets/packet-list/assets) |
| **46** | `UpdateBlockBreakingDecals` | FX | [View in Assets](/packets/packet-list/assets) |
| **47** | `UpdateWeathers` | Env | [View in Assets](/packets/packet-list/assets#updateweathers-47) |
| **48** | `UpdateViewBobbing` | Camera | [View in Assets](/packets/packet-list/assets) |
| **49** | `UpdateTrails` | FX | [View in Assets](/packets/packet-list/assets) |
| **50** | `UpdateParticleSystems` | FX | [View in Assets](/packets/packet-list/assets) |
| **51** | `UpdateEntityEffects` | Entity | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **52** | `UpdateParticleSpawners` | FX | [View in Assets](/packets/packet-list/assets) |
| **53** | `UpdateModelvfxs` | FX | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **54** | `UpdateItems` | Registry | [View in Assets](/packets/packet-list/assets#updateitems-54) |
| **55** | `UpdateItemQualities` | Registry | [View in Assets](/packets/packet-list/assets) |
| **56** | `UpdateItemSoundSets` | Audio | [View in Assets](/packets/packet-list/assets) |
| **57** | `UpdateItemReticles` | UI | [View in Assets](/packets/packet-list/assets) |
| **58** | `UpdateItemCategories` | UI | [View in Assets](/packets/packet-list/assets) |
| **59** | `UpdateItemPlayerAnimations` | Anim | [View in Assets](/packets/packet-list/assets) |
| **60** | `UpdateEqualizerEffects` | Audio | [View in Assets](/packets/packet-list/assets) |
| **61** | `UpdateEnvironments` | Env | [View in Assets](/packets/packet-list/assets) |
| **62** | `UpdateAudioCategories` | Audio | [View in Assets](/packets/packet-list/assets) |
| **63** | `UpdateAmbienceFX` | Audio | [View in Assets](/packets/packet-list/assets) |
| **64** | `UpdateReverbEffects` | Audio | [View in Assets](/packets/packet-list/assets) |
| **65** | `UpdateSoundEvents` | Audio | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **66** | `UpdateInteractions` | Logic | [View in Assets](/packets/packet-list/assets) |
| **67** | `UpdateUnarmedInteractions` | Logic | [View in Assets](/packets/packet-list/assets) |
| **68** | `UpdateRootInteractions` | Logic | [View in Assets](/packets/packet-list/assets) |
| **69** | `UpdateRecipes` | Data | [View in Assets](/packets/packet-list/assets#updaterecipes-69) |
| **70** | `UpdateTranslations` | Data | [View in Assets](/packets/packet-list/assets#updatetranslations-70) |
| **71** | `UpdateProjectileConfigs` | Combat | [View in Assets](/packets/packet-list/assets) |
| **72** | `UpdateEntityStatTypes` | Entity | [View in Assets](/packets/packet-list/assets) |
| **73** | `UpdateEntityUIComponents` | UI | [View in Assets](/packets/packet-list/assets) |
| **74** | `UpdateHitboxCollisionConfig` | Physics | [View in Assets](/packets/packet-list/assets) |
| **75** | `UpdateRepulsionConfig` | Physics | [View in Assets](/packets/packet-list/assets) |
| **76** | `UpdateFieldcraftCategories` | UI | [View in Assets](/packets/packet-list/assets) |
| **77** | `UpdateResourceTypes` | Data | [View in Assets](/packets/packet-list/assets) |
| **79** | `UpdateSoundSets` | Audio | [View in Assets](/packets/packet-list/assets) |
| **80** | `UpdateCameraShake` | Camera | [View in Assets](/packets/packet-list/assets) |
| **81** | `UpdateFluidFX` | FX | [View in Assets](/packets/packet-list/assets) |
| **83** | `UpdateFluids` | Registry | [View in Assets](/packets/packet-list/assets#generic-registry-updates) |
| **84** | `UpdateTagPatterns` | Data | [View in Assets](/packets/packet-list/assets#updatetagpatterns-84) |
| **85** | `UpdateObjectiveTask` | Quest | [View in Assets](/packets/packet-list/assets) |

## 🎮 100–159: Gameplay & World

| ID | Packet | Bound | Link |
| :--- | :--- | :--- | :--- |
| **100** | `SetClientId` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#setclientid-100) |
| **101** | `SetMovementStates` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **102** | `UpdateMovementSettings` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **103** | `SetGameMode` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#setgamemode-103) |
| **104** | `JoinWorld` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#joinworld-104) |
| **105** | `ClientReady` | C ➝ S | [View in Gameplay](/packets/packet-list/gameplay#clientready-105) |
| **106** | `ClientTeleport` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#clientteleport-106) |
| **107** | `ClientMovement` | C ➝ S | [View in Gameplay](/packets/packet-list/gameplay#clientmovement-107) |
| **108** | `ClientPlaceBlock` | C ➝ S | [View in Gameplay](/packets/packet-list/gameplay#clientplaceblock-108) |
| **131** | `SetChunk` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#setchunk-131) |
| **132** | `UnloadChunk` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#unloadchunk-132) |
| **133** | `SetChunkHeightmap` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#setchunkheightmap-133) |
| **134** | `SetChunkTintmap` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#setchunktintmap-134) |
| **135** | `SetChunkEnvironments` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#setchunkenvironments-135) |
| **140** | `ServerSetBlock` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#serversetblock-140) |
| **141** | `ServerSetBlocks` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **142** | `UpdateBlockDamage` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **143** | `SpawnParticleSystem` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **144** | `SpawnBlockParticleSystem` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **145** | `ServerSetFluid` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#serversetfluid-145) |
| **146** | `SetFluids` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#setfluids-146) |
| **146** | `UpdateTime` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#updatetime-146) |
| **147** | `UpdateWeather` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#updateweather-147) |
| **148** | `UpdateEnvironmentMusic` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **149** | `UpdateSunSettings` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |
| **150** | `UpdatePostFxSettings` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay) |

## 👾 160–199: Entities & Interactions

| ID | Packet | Bound | Link |
| :--- | :--- | :--- | :--- |
| **161** | `EntityUpdates` | S ➝ C | [View in Entities](/packets/packet-list/entities#entityupdates-161) |
| **162** | `PlayAnimation` | S ➝ C | [View in Entities](/packets/packet-list/entities#playanimation-162) |
| **163** | `ApplyKnockback` | S ➝ C | [View in Entities](/packets/packet-list/entities#applyknockback-163) |
| **164** | `ChangeVelocity` | S ➝ C | [View in Entities](/packets/packet-list/entities#changevelocity-164) |
| **165** | `SpawnModelParticles` | S ➝ C | [View in Entities](/packets/packet-list/entities#spawnmodelparticles-165) |
| **166** | `MountNPC` | S ➝ C | [View in Interactions](/packets/packet-list/interactions#mountnpc-166) |
| **167** | `DismountNPC` | S ➝ C | [View in Interactions](/packets/packet-list/interactions#dismountnpc-167) |
| **170** | `SyncInteractionChains` | S ➝ C | [View in Interactions](/packets/packet-list/interactions#syncinteractionchain-170) |
| **171** | `PlayInteractionFor` | S ➝ C | [View in Interactions](/packets/packet-list/interactions#playinteractionfor-171) |
| **172** | `CancelInteractionChain` | Bi-Dir | [View in Interactions](/packets/packet-list/interactions#cancelinteractionchain-172) |
| **180** | `UpdateSleepState` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#updatesleepstate-180) |
| **181** | `SleepClock` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#sleepclock-181) |
| **182** | `SleepMultiplayer` | S ➝ C | [View in Advanced](/packets/packet-list/world-advanced#sleepmultiplayer-182) |

## 🎒 200–249: Inventory & Interface

| ID | Packet | Bound | Link |
| :--- | :--- | :--- | :--- |
| **200** | `ChatMessage` | Bi-Dir | [View in Inventory](/packets/packet-list/inventory#chatmessage-200) |
| **201** | `Notification` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#notification-201) |
| **202** | `KillFeedMessage` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#killfeedmessage-202) |
| **203** | `WorldSavingStatus` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#worldsavingstatus-203) |
| **204** | `UpdatePortal` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#updateportal-204) |
| **205** | `UpdatePlayerInventory` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#updateplayerinventory-205) |
| **206** | `MoveItemStack` | C ➝ S | [View in Inventory](/packets/packet-list/inventory#moveitemstack-206) |
| **208** | `OpenWindow` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#openwindow-208) |
| **209** | `CloseWindow` | Bi-Dir | [View in Inventory](/packets/packet-list/inventory#closewindow-209) |
| **210** | `UpdateKnownRecipes` | S ➝ C | [View in Inventory](/packets/packet-list/inventory) |
| **211** | `UpdateLanguage` | S ➝ C | [View in Inventory](/packets/packet-list/inventory) |
| **212** | `CraftItemAction` | C ➝ S | [View in Inventory](/packets/packet-list/inventory) |
| **213** | `CraftRecipeAction` | C ➝ S | [View in Inventory](/packets/packet-list/inventory) |
| **220** | `CustomHud` | S ➝ C | [View in Inventory](/packets/packet-list/inventory#customhud-220) |
| **221** | `CustomUICommand` | C ➝ S | [View in Inventory](/packets/packet-list/inventory) |
| **222** | `CustomUIEventBinding` | S ➝ C | [View in Inventory](/packets/packet-list/inventory) |
| **230** | `ShowEventTitle` | S ➝ C | [View in Inventory](/packets/packet-list/inventory) |
| **231** | `HideEventTitle` | S ➝ C | [View in Inventory](/packets/packet-list/inventory) |
| **232** | `DisplayDebug` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#displaydebug-232) |
| **233** | `ClearDebugShapes` | S ➝ C | [View in Gameplay](/packets/packet-list/gameplay#cleardebugshapes-233) |

## 🔑 250+: Advanced Systems

| ID | Packet | System | Link |
| :--- | :--- | :--- | :--- |
| **250** | `RequestServerAccess` | Access | [View in Server Access](/packets/packet-list/server-access#requestserveraccess-250) |
| **251** | `UpdateServerAccess` | Access | [View in Server Access](/packets/packet-list/server-access#updateserveraccess-251) |
| **252** | `SetServerAccess` | Access | [View in Server Access](/packets/packet-list/server-access#setserveraccess-252) |
| **280** | `SetServerCamera` | Camera | [View in Camera](/packets/packet-list/camera#setservercamera-280) |
| **281** | `CameraShakeEffect` | Camera | [View in Camera](/packets/packet-list/camera#camerashakeeffect-281) |
| **282** | `RequestFlyCameraMode` | Camera | [View in Camera](/packets/packet-list/camera#requestflycameramode-282) |
| **283** | `SetFlyCameraMode` | Camera | [View in Camera](/packets/packet-list/camera#setflycameramode-283) |
| **290** | `UpdateWorldMap` | Map | [View in World Map](/packets/packet-list/world-map#updateworldmap-290) |
| **291** | `UpdateWorldMapVisible` | Map | [View in World Map](/packets/packet-list/world-map#updateworldmapvisible-291) |
| **292** | `UpdateWorldMapSettings` | Map | [View in World Map](/packets/packet-list/world-map#updateworldmapsettings-292) |
| **293** | `TeleportToWorldMapMarker` | Map | [View in World Map](/packets/packet-list/world-map#teleporttoworldmapmarker-293) |
| **295** | `ClearWorldMap` | Map | [View in World Map](/packets/packet-list/world-map#clearworldmap-295) |
| **350** | `UpdateMachinimaScene` | Movie | [View in Camera](/packets/packet-list/camera#updatemachinimascene-350) |
| **351** | `RequestMachinimaActorModel` | Movie | [View in Camera](/packets/packet-list/camera#requestmachinimaactormodel-351) |
| **352** | `SetMachinimaActorModel` | Movie | [View in Camera](/packets/packet-list/camera#setmachinimaactormodel-352) |

## 🛠 400+: Builder Tools

All Builder Tool packets (400-499) are detailed in the [Builder Tools Reference](/packets/packet-list/tools).

* `BuilderToolState` (400)
* `BuilderToolSelectionUpdate` (401)
* `BuilderToolPasteClipboard` (406)
* `BuilderToolSetEntityTransform` (415)

## 🎨 500+: Asset Editor

All Asset Editor packets (500+) are detailed in the [Asset Editor Reference](/packets/packet-list/asset-editor).

* `AssetEditorAuthorization` (500)
* `AssetEditorCapabilities` (501)
* `AssetEditorRequestDataset` (502)
* `AssetEditorCreateAsset` (506)
* `AssetEditorUpdateAsset` (508)