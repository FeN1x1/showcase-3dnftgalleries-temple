import { hud } from "dcl-builder-hud";
import * as utils from "@dcl/ecs-scene-utils";
import { createCoin, counter } from "./coin";
import * as ui from "@dcl/ui-scene-utils";

import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";

import ScriptChest from "../ff9257ec-9d62-404f-97c7-cf19c4035761/src/item";
import ScriptLever from "../649d5d96-18be-4f89-b592-f2dfce64b7fe/src/item";

const coinShape = new GLTFShape("models/coin.glb");

const coinPositions = [
  new Vector3(12, 3, 40.9),
  new Vector3(18, 7, 40.9),
  new Vector3(24, 11, 40.9),
  new Vector3(30, 15, 40.9),
  new Vector3(60, 15, 40.9),
  new Vector3(66, 11, 40.9),
  new Vector3(74, 5.6, 40.9),
  new Vector3(80, 1.6, 40.9),
  new Vector3(45, 13.6, 58),
  new Vector3(45, 9.6, 64),
  new Vector3(45, 5.6, 70),
  new Vector3(45, 1.6, 76),
  new Vector3(45, 13.6, 23),
  new Vector3(45, 9.6, 17),
  new Vector3(45, 5.6, 11),
  new Vector3(45, 1.6, 5),
];

const triggerBoxShape = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
);

for (const coinPosition of coinPositions) {
  createCoin(
    coinShape,
    new Transform({ position: coinPosition }),
    triggerBoxShape
  );
}

const nft = new Entity();
const shapeComponent = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Gold_Carved,
  }
);
nft.addComponent(shapeComponent);
nft.addComponent(
  new Transform({
    position: new Vector3(42, 19.3, 46.95),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(3.4, 3.4, 3.4),
  })
);
nft.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft);
hud.attachToEntity(nft);

const nft2 = new Entity();
const shapeComponent2 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Gold_Carved,
  }
);
nft2.addComponent(shapeComponent2);
nft2.addComponent(
  new Transform({
    position: new Vector3(48, 19.3, 46.95),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(3.4, 3.4, 3.4),
  })
);
nft2.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft2);

const nft3 = new Entity();
const shapeComponent3 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Gold_Carved,
  }
);
nft3.addComponent(shapeComponent3);
nft3.addComponent(
  new Transform({
    position: new Vector3(42, 19.3, 35.1),
    rotation: new Quaternion(0, 180, 0, 1),
    scale: new Vector3(3.4, 3.4, 3.4),
  })
);
nft3.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft3);

const nft4 = new Entity();
const shapeComponent4 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Gold_Carved,
  }
);
nft4.addComponent(shapeComponent4);
nft4.addComponent(
  new Transform({
    position: new Vector3(48, 19.3, 35.1),
    rotation: new Quaternion(0, 180, 0, 1),
    scale: new Vector3(3.4, 3.4, 3.4),
  })
);
nft4.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft4);

const nft5 = new Entity();
const shapeComponent5 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Diamond_Ornament,
  }
);
nft5.addComponent(shapeComponent5);
nft5.addComponent(
  new Transform({
    position: new Vector3(51.65, 19.5, 35.6),
    rotation: new Quaternion(0, 90, 0, -90),
    scale: new Vector3(2.7, 2.7, 2.7),
  })
);
nft5.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft5);

const nft6 = new Entity();
const shapeComponent6 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Diamond_Ornament,
  }
);
nft6.addComponent(shapeComponent6);
nft6.addComponent(
  new Transform({
    position: new Vector3(51.65, 19.5, 46.4),
    rotation: new Quaternion(0, 90, 0, -90),
    scale: new Vector3(2.7, 2.7, 2.7),
  })
);
nft6.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft6);

const nft7 = new Entity();
const shapeComponent7 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Diamond_Ornament,
  }
);
nft7.addComponent(shapeComponent7);
nft7.addComponent(
  new Transform({
    position: new Vector3(38.35, 19.5, 46.4),
    rotation: new Quaternion(0, -90, 0, -90),
    scale: new Vector3(2.7, 2.7, 2.7),
  })
);
nft7.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft7);

const nft8 = new Entity();
const shapeComponent8 = new NFTShape(
  "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536",
  {
    color: Color3.White(),
    style: PictureFrameStyle.Diamond_Ornament,
  }
);
nft8.addComponent(shapeComponent8);
nft8.addComponent(
  new Transform({
    position: new Vector3(38.35, 19.5, 35.6),
    rotation: new Quaternion(0, -90, 0, -90),
    scale: new Vector3(2.7, 2.7, 2.7),
  })
);
nft8.addComponent(
  new OnPointerDown((e) => {
    openNFTDialog(
      "ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/558536"
    );
  })
);
engine.addEntity(nft8);

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const fantasyChest = new Entity("fantasyChest");
engine.addEntity(fantasyChest);
fantasyChest.setParent(_scene);
const transformChest = new Transform({
  position: new Vector3(45.35, 19.17, 41),
  rotation: new Quaternion(0, 90, 0, 90),
  scale: new Vector3(1, 1, 1),
});
fantasyChest.addComponentOrReplace(transformChest);

const fantasyLever = new Entity("fantasyLever");
engine.addEntity(fantasyLever);
fantasyLever.setParent(_scene);
const transformLever = new Transform({
  position: new Vector3(50.55, 18.17, 46),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
fantasyLever.addComponentOrReplace(transformLever);

const obj = new Entity("obj");
engine.addEntity(obj);
obj.setParent(_scene);
const transform2 = new Transform({
  position: new Vector3(50.5, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(
    -0.009949998930096626,
    -0.009949998930096626,
    -0.009949998930096626
  ),
});
obj.addComponentOrReplace(transform2);
const gltfShape = new GLTFShape("25d8ec36-6fbf-40d2-ac3c-dd8f3c26aff2/obj.glb");
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
obj.addComponentOrReplace(transform2);

obj.addComponentOrReplace(gltfShape);

const obj2 = new Entity("obj2");
engine.addEntity(obj2);
obj2.setParent(_scene);
const transform3 = new Transform({
  position: new Vector3(45, 0, 41),
  // position: new Vector3(45, -18, 41),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.75, 0.75, 0.75),
});
obj2.addComponentOrReplace(transform3);
obj2.addComponentOrReplace(gltfShape);

const clusteredBlueAcaciaTree = new Entity("clusteredBlueAcaciaTree");
engine.addEntity(clusteredBlueAcaciaTree);
clusteredBlueAcaciaTree.setParent(_scene);
const transform4 = new Transform({
  position: new Vector3(83, 0, 74.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredBlueAcaciaTree.addComponentOrReplace(transform4);
const gltfShape2 = new GLTFShape(
  "e2afd394-e1ec-4a5f-8435-e821deb638c8/Tree_Forest_Blue_03/Tree_Forest_Blue_03.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
clusteredBlueAcaciaTree.addComponentOrReplace(gltfShape2);

const blueAcaciaTree = new Entity("blueAcaciaTree");
engine.addEntity(blueAcaciaTree);
blueAcaciaTree.setParent(_scene);
const transform5 = new Transform({
  position: new Vector3(78, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blueAcaciaTree.addComponentOrReplace(transform5);
const gltfShape3 = new GLTFShape(
  "26343874-a629-49cc-bacd-6a040ad7427d/Tree_Forest_Blue_01/Tree_Forest_Blue_01.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
blueAcaciaTree.addComponentOrReplace(gltfShape3);

const bloomingTurquoiseAcaciaTree = new Entity("bloomingTurquoiseAcaciaTree");
engine.addEntity(bloomingTurquoiseAcaciaTree);
bloomingTurquoiseAcaciaTree.setParent(_scene);
const transform6 = new Transform({
  position: new Vector3(27.5, 0, 76),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree.addComponentOrReplace(transform6);
const gltfShape4 = new GLTFShape(
  "af393f91-905e-4d1c-9c26-e11a5d84e4c9/Tree_Forest_Turquoise_02/Tree_Forest_Turquoise_02.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
bloomingTurquoiseAcaciaTree.addComponentOrReplace(gltfShape4);

const clusteredTurquoiseAcaciaTree = new Entity("clusteredTurquoiseAcaciaTree");
engine.addEntity(clusteredTurquoiseAcaciaTree);
clusteredTurquoiseAcaciaTree.setParent(_scene);
const transform7 = new Transform({
  position: new Vector3(82.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredTurquoiseAcaciaTree.addComponentOrReplace(transform7);
const gltfShape5 = new GLTFShape(
  "e0320530-0990-4941-996b-7ca039c7db3d/Tree_Forest_Turquoise_03/Tree_Forest_Turquoise_03.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
clusteredTurquoiseAcaciaTree.addComponentOrReplace(gltfShape5);

const magicGemstoneTorch = new Entity("magicGemstoneTorch");
engine.addEntity(magicGemstoneTorch);
magicGemstoneTorch.setParent(_scene);
const transform8 = new Transform({
  position: new Vector3(37, 18, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5),
});
magicGemstoneTorch.addComponentOrReplace(transform8);
const gltfShape6 = new GLTFShape(
  "e53ae6eb-9c7e-447d-a7fe-a95329a05233/Torch_01/Torch_01.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
magicGemstoneTorch.addComponentOrReplace(gltfShape6);

// const magicGemstoneTorch2 = new Entity("magicGemstoneTorch2");
// engine.addEntity(magicGemstoneTorch2);
// magicGemstoneTorch2.setParent(_scene);
// const transform9 = new Transform({
//   position: new Vector3(37, 18, 32.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(2.5, 2.5, 2.5),
// });
// hud.attachToEntity(magicGemstoneTorch2);
// magicGemstoneTorch2.addComponentOrReplace(transform9);
// magicGemstoneTorch2.addComponentOrReplace(gltfShape6);

// const treasureChest = new Entity("treasureChest");
// engine.addEntity(treasureChest);
// treasureChest.setParent(_scene);
// const transform10 = new Transform({
//   position: new Vector3(45.5, 19.5, 41.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1),
// });
// treasureChest.addComponentOrReplace(transform10);

const ambientSound = new Entity("ambientSound");
engine.addEntity(ambientSound);
ambientSound.setParent(_scene);
const transform11 = new Transform({
  position: new Vector3(88, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
ambientSound.addComponentOrReplace(transform11);

// const ironFenceDoor = new Entity("ironFenceDoor");
// engine.addEntity(ironFenceDoor);
// ironFenceDoor.setParent(_scene);
// const transform12 = new Transform({
//   position: new Vector3(52.5, 18, 42.5),
//   rotation: new Quaternion(
//     -1.5394153601527394e-15,
//     -0.7071068286895752,
//     8.429369557916289e-8,
//     0.7071068286895752
//   ),
//   scale: new Vector3(1.5000048875808716, 1.5, 0.7500024437904358),
// });
// ironFenceDoor.addComponentOrReplace(transform12);

const pinkButton = new Entity("pinkButton");
engine.addEntity(pinkButton);
pinkButton.setParent(_scene);
const transform13 = new Transform({
  position: new Vector3(51.5, 19.5, 46.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071067690849304),
  scale: new Vector3(3.5000014305114746, 3.5000014305114746, 3.5),
});
pinkButton.addComponentOrReplace(transform13);

const bloomingBlueAcaciaTree = new Entity("bloomingBlueAcaciaTree");
engine.addEntity(bloomingBlueAcaciaTree);
bloomingBlueAcaciaTree.setParent(_scene);
const transform14 = new Transform({
  position: new Vector3(86, 0, 62.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingBlueAcaciaTree.addComponentOrReplace(transform14);
const gltfShape7 = new GLTFShape(
  "3f001c84-b186-499d-bcaf-490629e85d99/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
bloomingBlueAcaciaTree.addComponentOrReplace(gltfShape7);

const blueAcaciaTree2 = new Entity("blueAcaciaTree2");
engine.addEntity(blueAcaciaTree2);
blueAcaciaTree2.setParent(_scene);
const transform15 = new Transform({
  position: new Vector3(89, 0, 70),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blueAcaciaTree2.addComponentOrReplace(transform15);
blueAcaciaTree2.addComponentOrReplace(gltfShape3);

const clusteredBlueAcaciaTree2 = new Entity("clusteredBlueAcaciaTree2");
engine.addEntity(clusteredBlueAcaciaTree2);
clusteredBlueAcaciaTree2.setParent(_scene);
const transform16 = new Transform({
  position: new Vector3(87.5, 0, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredBlueAcaciaTree2.addComponentOrReplace(transform16);
clusteredBlueAcaciaTree2.addComponentOrReplace(gltfShape2);

const blueAcaciaTree4 = new Entity("blueAcaciaTree4");
engine.addEntity(blueAcaciaTree4);
blueAcaciaTree4.setParent(_scene);
const transform17 = new Transform({
  position: new Vector3(66.5, 0, 76),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blueAcaciaTree4.addComponentOrReplace(transform17);
blueAcaciaTree4.addComponentOrReplace(gltfShape3);

const bloomingTurquoiseAcaciaTree3 = new Entity("bloomingTurquoiseAcaciaTree3");
engine.addEntity(bloomingTurquoiseAcaciaTree3);
bloomingTurquoiseAcaciaTree3.setParent(_scene);
const transform18 = new Transform({
  position: new Vector3(9.5, 0, 74),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree3.addComponentOrReplace(transform18);
bloomingTurquoiseAcaciaTree3.addComponentOrReplace(gltfShape4);

const bloomingTurquoiseAcaciaTree4 = new Entity("bloomingTurquoiseAcaciaTree4");
engine.addEntity(bloomingTurquoiseAcaciaTree4);
bloomingTurquoiseAcaciaTree4.setParent(_scene);
const transform19 = new Transform({
  position: new Vector3(5, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree4.addComponentOrReplace(transform19);
bloomingTurquoiseAcaciaTree4.addComponentOrReplace(gltfShape4);

const clusteredTurquoiseAcaciaTree2 = new Entity(
  "clusteredTurquoiseAcaciaTree2"
);
engine.addEntity(clusteredTurquoiseAcaciaTree2);
clusteredTurquoiseAcaciaTree2.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(6, 0, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredTurquoiseAcaciaTree2.addComponentOrReplace(transform20);
clusteredTurquoiseAcaciaTree2.addComponentOrReplace(gltfShape5);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape8 = new GLTFShape(
  "a8fe46c8-8e62-4acb-9660-fd2db7596e37/FloorFantasyRocks_04/FloorFantasyRocks_04.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
entity.addComponentOrReplace(gltfShape8);
const transform21 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform21);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape8);
const transform22 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity2.addComponentOrReplace(transform22);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape8);
const transform23 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity3.addComponentOrReplace(transform23);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape8);
const transform24 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity4.addComponentOrReplace(transform24);

const entity5 = new Entity("entity5");
engine.addEntity(entity5);
entity5.setParent(_scene);
entity5.addComponentOrReplace(gltfShape8);
const transform25 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity5.addComponentOrReplace(transform25);

const entity6 = new Entity("entity6");
engine.addEntity(entity6);
entity6.setParent(_scene);
entity6.addComponentOrReplace(gltfShape8);
const transform26 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity6.addComponentOrReplace(transform26);

const entity7 = new Entity("entity7");
engine.addEntity(entity7);
entity7.setParent(_scene);
entity7.addComponentOrReplace(gltfShape8);
const transform27 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity7.addComponentOrReplace(transform27);

const entity8 = new Entity("entity8");
engine.addEntity(entity8);
entity8.setParent(_scene);
entity8.addComponentOrReplace(gltfShape8);
const transform28 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity8.addComponentOrReplace(transform28);

const entity9 = new Entity("entity9");
engine.addEntity(entity9);
entity9.setParent(_scene);
entity9.addComponentOrReplace(gltfShape8);
const transform29 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity9.addComponentOrReplace(transform29);

const entity10 = new Entity("entity10");
engine.addEntity(entity10);
entity10.setParent(_scene);
entity10.addComponentOrReplace(gltfShape8);
const transform30 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity10.addComponentOrReplace(transform30);

const entity11 = new Entity("entity11");
engine.addEntity(entity11);
entity11.setParent(_scene);
entity11.addComponentOrReplace(gltfShape8);
const transform31 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity11.addComponentOrReplace(transform31);

const entity12 = new Entity("entity12");
engine.addEntity(entity12);
entity12.setParent(_scene);
entity12.addComponentOrReplace(gltfShape8);
const transform32 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity12.addComponentOrReplace(transform32);

const entity13 = new Entity("entity13");
engine.addEntity(entity13);
entity13.setParent(_scene);
entity13.addComponentOrReplace(gltfShape8);
const transform33 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity13.addComponentOrReplace(transform33);

const entity14 = new Entity("entity14");
engine.addEntity(entity14);
entity14.setParent(_scene);
entity14.addComponentOrReplace(gltfShape8);
const transform34 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity14.addComponentOrReplace(transform34);

const entity15 = new Entity("entity15");
engine.addEntity(entity15);
entity15.setParent(_scene);
entity15.addComponentOrReplace(gltfShape8);
const transform35 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity15.addComponentOrReplace(transform35);

const entity16 = new Entity("entity16");
engine.addEntity(entity16);
entity16.setParent(_scene);
entity16.addComponentOrReplace(gltfShape8);
const transform36 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity16.addComponentOrReplace(transform36);

const entity17 = new Entity("entity17");
engine.addEntity(entity17);
entity17.setParent(_scene);
entity17.addComponentOrReplace(gltfShape8);
const transform37 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity17.addComponentOrReplace(transform37);

const entity18 = new Entity("entity18");
engine.addEntity(entity18);
entity18.setParent(_scene);
entity18.addComponentOrReplace(gltfShape8);
const transform38 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity18.addComponentOrReplace(transform38);

const entity19 = new Entity("entity19");
engine.addEntity(entity19);
entity19.setParent(_scene);
entity19.addComponentOrReplace(gltfShape8);
const transform39 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity19.addComponentOrReplace(transform39);

const entity20 = new Entity("entity20");
engine.addEntity(entity20);
entity20.setParent(_scene);
entity20.addComponentOrReplace(gltfShape8);
const transform40 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity20.addComponentOrReplace(transform40);

const entity21 = new Entity("entity21");
engine.addEntity(entity21);
entity21.setParent(_scene);
entity21.addComponentOrReplace(gltfShape8);
const transform41 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity21.addComponentOrReplace(transform41);

const entity22 = new Entity("entity22");
engine.addEntity(entity22);
entity22.setParent(_scene);
entity22.addComponentOrReplace(gltfShape8);
const transform42 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity22.addComponentOrReplace(transform42);

const entity23 = new Entity("entity23");
engine.addEntity(entity23);
entity23.setParent(_scene);
entity23.addComponentOrReplace(gltfShape8);
const transform43 = new Transform({
  position: new Vector3(72, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity23.addComponentOrReplace(transform43);

const entity24 = new Entity("entity24");
engine.addEntity(entity24);
entity24.setParent(_scene);
entity24.addComponentOrReplace(gltfShape8);
const transform44 = new Transform({
  position: new Vector3(88, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity24.addComponentOrReplace(transform44);

const entity25 = new Entity("entity25");
engine.addEntity(entity25);
entity25.setParent(_scene);
entity25.addComponentOrReplace(gltfShape8);
const transform45 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity25.addComponentOrReplace(transform45);

const entity26 = new Entity("entity26");
engine.addEntity(entity26);
entity26.setParent(_scene);
entity26.addComponentOrReplace(gltfShape8);
const transform46 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity26.addComponentOrReplace(transform46);

const entity27 = new Entity("entity27");
engine.addEntity(entity27);
entity27.setParent(_scene);
entity27.addComponentOrReplace(gltfShape8);
const transform47 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity27.addComponentOrReplace(transform47);

const entity28 = new Entity("entity28");
engine.addEntity(entity28);
entity28.setParent(_scene);
entity28.addComponentOrReplace(gltfShape8);
const transform48 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity28.addComponentOrReplace(transform48);

const entity29 = new Entity("entity29");
engine.addEntity(entity29);
entity29.setParent(_scene);
entity29.addComponentOrReplace(gltfShape8);
const transform49 = new Transform({
  position: new Vector3(72, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity29.addComponentOrReplace(transform49);

const entity30 = new Entity("entity30");
engine.addEntity(entity30);
entity30.setParent(_scene);
entity30.addComponentOrReplace(gltfShape8);
const transform50 = new Transform({
  position: new Vector3(88, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity30.addComponentOrReplace(transform50);

const bloomingTurquoiseAcaciaTree5 = new Entity("bloomingTurquoiseAcaciaTree5");
engine.addEntity(bloomingTurquoiseAcaciaTree5);
bloomingTurquoiseAcaciaTree5.setParent(_scene);
const transform51 = new Transform({
  position: new Vector3(17.5, 0, 76),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree5.addComponentOrReplace(transform51);
bloomingTurquoiseAcaciaTree5.addComponentOrReplace(gltfShape4);

const blueAcaciaTree5 = new Entity("blueAcaciaTree5");
engine.addEntity(blueAcaciaTree5);
blueAcaciaTree5.setParent(_scene);
const transform52 = new Transform({
  position: new Vector3(10, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blueAcaciaTree5.addComponentOrReplace(transform52);
blueAcaciaTree5.addComponentOrReplace(gltfShape3);

const clusteredBlueAcaciaTree4 = new Entity("clusteredBlueAcaciaTree4");
engine.addEntity(clusteredBlueAcaciaTree4);
clusteredBlueAcaciaTree4.setParent(_scene);
const transform53 = new Transform({
  position: new Vector3(6, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredBlueAcaciaTree4.addComponentOrReplace(transform53);
clusteredBlueAcaciaTree4.addComponentOrReplace(gltfShape2);

const clusteredBlueAcaciaTree5 = new Entity("clusteredBlueAcaciaTree5");
engine.addEntity(clusteredBlueAcaciaTree5);
clusteredBlueAcaciaTree5.setParent(_scene);
const transform54 = new Transform({
  position: new Vector3(23, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredBlueAcaciaTree5.addComponentOrReplace(transform54);
clusteredBlueAcaciaTree5.addComponentOrReplace(gltfShape2);

const blueAcaciaTree3 = new Entity("blueAcaciaTree3");
engine.addEntity(blueAcaciaTree3);
blueAcaciaTree3.setParent(_scene);
const transform55 = new Transform({
  position: new Vector3(10, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
blueAcaciaTree3.addComponentOrReplace(transform55);
blueAcaciaTree3.addComponentOrReplace(gltfShape3);

const bloomingBlueAcaciaTree2 = new Entity("bloomingBlueAcaciaTree2");
engine.addEntity(bloomingBlueAcaciaTree2);
bloomingBlueAcaciaTree2.setParent(_scene);
const transform56 = new Transform({
  position: new Vector3(33.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingBlueAcaciaTree2.addComponentOrReplace(transform56);
bloomingBlueAcaciaTree2.addComponentOrReplace(gltfShape7);

const bloomingBlueAcaciaTree3 = new Entity("bloomingBlueAcaciaTree3");
engine.addEntity(bloomingBlueAcaciaTree3);
bloomingBlueAcaciaTree3.setParent(_scene);
const transform57 = new Transform({
  position: new Vector3(5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingBlueAcaciaTree3.addComponentOrReplace(transform57);
bloomingBlueAcaciaTree3.addComponentOrReplace(gltfShape7);

const bloomingTurquoiseAcaciaTree2 = new Entity("bloomingTurquoiseAcaciaTree2");
engine.addEntity(bloomingTurquoiseAcaciaTree2);
bloomingTurquoiseAcaciaTree2.setParent(_scene);
const transform58 = new Transform({
  position: new Vector3(87, 0, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree2.addComponentOrReplace(transform58);
bloomingTurquoiseAcaciaTree2.addComponentOrReplace(gltfShape4);

const clusteredTurquoiseAcaciaTree3 = new Entity(
  "clusteredTurquoiseAcaciaTree3"
);
engine.addEntity(clusteredTurquoiseAcaciaTree3);
clusteredTurquoiseAcaciaTree3.setParent(_scene);
const transform59 = new Transform({
  position: new Vector3(76, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
clusteredTurquoiseAcaciaTree3.addComponentOrReplace(transform59);
clusteredTurquoiseAcaciaTree3.addComponentOrReplace(gltfShape5);

const bloomingTurquoiseAcaciaTree6 = new Entity("bloomingTurquoiseAcaciaTree6");
engine.addEntity(bloomingTurquoiseAcaciaTree6);
bloomingTurquoiseAcaciaTree6.setParent(_scene);
const transform60 = new Transform({
  position: new Vector3(91.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
bloomingTurquoiseAcaciaTree6.addComponentOrReplace(transform60);
bloomingTurquoiseAcaciaTree6.addComponentOrReplace(gltfShape4);

const tallTurquoiseAcaciaTree = new Entity("tallTurquoiseAcaciaTree");
engine.addEntity(tallTurquoiseAcaciaTree);
tallTurquoiseAcaciaTree.setParent(_scene);
const transform61 = new Transform({
  position: new Vector3(90, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
tallTurquoiseAcaciaTree.addComponentOrReplace(transform61);
const gltfShape9 = new GLTFShape(
  "b0787719-7d9a-47f0-951f-23963a8fd274/Tree_Forest_Turquoise_04/Tree_Forest_Turquoise_04.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
tallTurquoiseAcaciaTree.addComponentOrReplace(gltfShape9);

const turquoiseAcaciaTree = new Entity("turquoiseAcaciaTree");
engine.addEntity(turquoiseAcaciaTree);
turquoiseAcaciaTree.setParent(_scene);
const transform62 = new Transform({
  position: new Vector3(91, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
turquoiseAcaciaTree.addComponentOrReplace(transform62);
const gltfShape10 = new GLTFShape(
  "f8608443-f44d-4505-957c-3d1bfddb6a5a/Tree_Forest_Turquoise_01/Tree_Forest_Turquoise_01.glb"
);
gltfShape10.withCollisions = true;
gltfShape10.isPointerBlocker = true;
gltfShape10.visible = true;
turquoiseAcaciaTree.addComponentOrReplace(gltfShape10);

const magicGemstoneTorch3 = new Entity("magicGemstoneTorch3");
engine.addEntity(magicGemstoneTorch3);
magicGemstoneTorch3.setParent(_scene);
const transform63 = new Transform({
  position: new Vector3(53.5, 18, 49.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5),
});
magicGemstoneTorch3.addComponentOrReplace(transform63);
magicGemstoneTorch3.addComponentOrReplace(gltfShape6);

const magicGemstoneTorch4 = new Entity("magicGemstoneTorch4");
engine.addEntity(magicGemstoneTorch4);
magicGemstoneTorch4.setParent(_scene);
const transform64 = new Transform({
  position: new Vector3(54, 18.0, 32.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 2.5, 2.5),
});
magicGemstoneTorch4.addComponentOrReplace(transform64);
magicGemstoneTorch4.addComponentOrReplace(gltfShape6);

log(counter)

let testObject = counter === 0 ? {
  onClick: [
    { entityName: "fantasyChest", actionId: "toggle", values: {} },
  ],
  onClickText: "Open"
} : {}


const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const scriptChest = new ScriptChest();
const scriptLever = new ScriptLever();
scriptChest.init();
scriptLever.init();
scriptChest.spawn(
  fantasyChest,
  testObject,
  createChannel(channelId, fantasyChest, channelBus)
);
scriptLever.spawn(
  fantasyLever,
  {
    onActivate: [
      { entityName: "fantasyChest", actionId: "toggle", values: {} },
    ],
  },
  createChannel(channelId, fantasyLever, channelBus)
);

