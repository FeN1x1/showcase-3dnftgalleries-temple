// import * as utils from '@dcl/ecs-scene-utils'
// import * as ui from '@dcl/ui-scene-utils'

// let coinCount = new ui.UICounter(0, 0, 425, Color4.Yellow(), 30, true)

// const coinPickupSound = new Entity()
// coinPickupSound.addComponent(new Transform())
// engine.addEntity(coinPickupSound)
// coinPickupSound.setParent(Attachable.AVATAR)
// coinPickupSound.addComponent(
//   new AudioSource(new AudioClip('sounds/coinPickup.mp3'))
// )
// engine.addEntity(coinPickupSound)

// export let counter = 0

// export function createCoin(
//   model: GLTFShape,
//   transform: Transform,
//   triggerShape: utils.TriggerBoxShape
// ): Entity {
//   const entity = new Entity()
//   engine.addEntity(entity)
//   entity.addComponent(model)
//   entity.addComponent(transform)

//   entity.addComponent(
//     new utils.TriggerComponent(triggerShape, {
//       onCameraEnter: () => {
//         entity.getComponent(Transform).scale.setAll(0)
//         coinPickupSound.getComponent(AudioSource).playOnce()
//       },
//       onCameraExit: () => {
//         engine.removeEntity(entity)
//         coinpickup()
      
//       },
//     })
//   )
//   return entity
// }

// const coinpickup = () => {
//   coinCount.increase() 
//   counter++
//   if(counter === 16) {
//     let prompt = new ui.OkPrompt(
//       "You've collected all 16 coins! Chest was unlocked.",
//       () => {},
//       'Close',
//       false
//     )
//   }
// }