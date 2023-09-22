namespace SpriteKind {
    export const laserParticle = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const Friend = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        sprites.changeDataNumberBy(sprite, "level", -1)
        hurtEnemy(sprite)
    }
})
function generateLaser (dirX: number, dirY: number, col: number, row: number) {
    for (let index = 0; index <= Math.max(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows), tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns)); index++) {
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(col + (index * dirX + dirX), row + (index * dirY + dirY))))) {
            if (dirX == 0) {
                laser = sprites.create(img`
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    . . 2 2 2 2 . . 
                    `, SpriteKind.laserParticle)
            } else {
                laser = sprites.create(img`
                    . . . . . . . . 
                    . . . . . . . . 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    . . . . . . . . 
                    . . . . . . . . 
                    `, SpriteKind.laserParticle)
            }
            laser.setPosition(col * 8 + 4 + (index + 1) * (dirX * 8), row * 8 + 4 + (index + 1) * (dirY * 8))
        } else {
            break;
        }
    }
}
function setMap (level: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.laserParticle)
    currentLevel = level
    tiles.setCurrentTilemap(tileUtil.cloneMap(levels[level]))
    moves = movesForLevel[level]
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 4 4 4 4 . . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . . 4 4 4 4 . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        sprites.setDataNumber(enemy1, "level", 0)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 4 4 2 2 . . 
            . 4 4 4 2 2 2 . 
            . 4 4 4 2 2 2 . 
            . 2 2 2 4 4 4 . 
            . 2 2 2 4 4 4 . 
            . . 2 2 4 4 . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        sprites.setDataNumber(enemy1, "level", 1)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 . 
            . . 2 2 2 2 . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        sprites.setDataNumber(enemy1, "level", 2)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 1 1 1 1 . . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . . 1 1 1 1 . . 
            . . . . . . . . 
            `, SpriteKind.Friend)
        sprites.setDataNumber(enemy1, "level", 0)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 1 1 9 9 . . 
            . 1 1 1 9 9 9 . 
            . 1 1 1 9 9 9 . 
            . 9 9 9 1 1 1 . 
            . 9 9 9 1 1 1 . 
            . . 9 9 1 1 . . 
            . . . . . . . . 
            `, SpriteKind.Friend)
        sprites.setDataNumber(enemy1, "level", 1)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        enemy1 = sprites.create(img`
            . . . . . . . . 
            . . 9 9 9 9 . . 
            . 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 . 
            . 9 9 9 9 9 9 . 
            . . 9 9 9 9 . . 
            . . . . . . . . 
            `, SpriteKind.Friend)
        sprites.setDataNumber(enemy1, "level", 2)
        tiles.placeOnTile(enemy1, value)
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    if (moves > 0) {
        menuContents = [miniMenu.createMenuItem("C:\\>_")]
    } else {
        menuContents = [miniMenu.createMenuItem("")]
    }
    loadTilemap()
}
function noFriendInSquare (x: number, y: number) {
    for (let value of sprites.allOfKind(SpriteKind.Friend)) {
        if (value.tilemapLocation().column == mySprite.tilemapLocation().column + x && value.tilemapLocation().row == mySprite.tilemapLocation().row + y) {
            return false
        }
    }
    return true
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    timer.background(function () {
        timer.throttle("move", 0, function () {
            isOverlapping = false
            for (let value of sprites.allOfKind(SpriteKind.laserParticle)) {
                if (sprite.overlapsWith(value)) {
                    isOverlapping = true
                }
            }
            if (spriteutils.speed(mySprite) == 0 && !(isOverlapping) && mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
                tileUtil.unloadTilemap()
                sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
                sprites.destroyAllSpritesOfKind(SpriteKind.Friend)
                sprites.destroyAllSpritesOfKind(SpriteKind.laserParticle)
                mySprite.setPosition(-16, -16)
                list = blockSettings.readNumberArray("completedLevels")
                if (list.indexOf(currentLevel) == -1) {
                    list.push(currentLevel)
                }
                blockSettings.writeNumberArray("completedLevels", list)
                currentLevel = 0
                inMenu = -2
                introMenu.close()
                levelSelectMenuContents = []
                for (let index = 0; index <= levels.length - 1; index++) {
                    if (blockSettings.readNumberArray("completedLevels").indexOf(index) == -1) {
                        levelSelectMenuContents.push(miniMenu.createMenuItem("" + (index + 1)))
                    } else {
                        levelSelectMenuContents.push(miniMenu.createMenuItem("" + (index + 1) + " (Done)"))
                    }
                }
                introMenu = miniMenu.createMenuFromArray(levelSelectMenuContents)
                introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
                introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
                introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 7)
                introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
                introMenu.setDimensions(160, 120)
                introMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                introMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
                introMenu.setPosition(0, 0)
            }
        })
    })
})
function moveCharacters () {
    if (inMenu == 0) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            scene.followPath(value, scene.aStar(value.tilemapLocation(), mySprite.tilemapLocation()), 160)
            pause(70)
            tiles.placeOnTile(value, value.tilemapLocation())
            findOverlapEnemy(value)
            scene.followPath(value, scene.aStar(value.tilemapLocation(), value.tilemapLocation()), 0)
        }
        for (let value of sprites.allOfKind(SpriteKind.Friend)) {
            closestDis = -1
            for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
                if (closestDis == -1 || closestDis > spriteutils.distanceBetween(value, value2)) {
                    closestDis = spriteutils.distanceBetween(value, value2)
                    closestSprite = value2
                }
            }
            scene.followPath(value, scene.aStar(value.tilemapLocation(), closestSprite.tilemapLocation()), 140)
            pause(65)
            tiles.placeOnTile(value, value.tilemapLocation())
            findOverlapFriend(value)
            scene.followPath(value, scene.aStar(value.tilemapLocation(), closestSprite.tilemapLocation()), 0)
        }
    }
}
function initiateLevels () {
    movesForLevel = [
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    3,
    4,
    1,
    4,
    4
    ]
    levels = [
    tileUtil.createSmallMap(tilemap`level2`),
    tileUtil.createSmallMap(tilemap`level13`),
    tileUtil.createSmallMap(tilemap`level11`),
    tileUtil.createSmallMap(tilemap`level12`),
    tileUtil.createSmallMap(tilemap`level8`),
    tileUtil.createSmallMap(tilemap`level14`),
    tileUtil.createSmallMap(tilemap`level15`),
    tileUtil.createSmallMap(tilemap`level16`),
    tileUtil.createSmallMap(tilemap`level17`),
    tileUtil.createSmallMap(tilemap`level18`),
    tileUtil.createSmallMap(tilemap`level19`),
    tileUtil.createSmallMap(tilemap`level20`)
    ]
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        if (inMenu == 0) {
            openPgrmScreen()
        } else if (inMenu == 2 && !(tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile20`) || tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile19`) || (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile18`) || (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile17`) || tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile0`))) || tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile5`) || (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile2`) || tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile1`)))) {
            tileSelector.image.replace(2, 7)
            selectedBlock = tiles.tileImageAtLocation(tileSelector.tilemapLocation())
            tiles.setTileAt(tileSelector.tilemapLocation(), assets.tile`myTile0`)
            currentCMD = "" + currentCMD + tileSelector.tilemapLocation().column + ", " + tileSelector.tilemapLocation().row + ", "
            loadTilemap()
            inMenu = 3
        } else if (inMenu == 3 && tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile0`)) {
            tiles.setTileAt(tileSelector.tilemapLocation(), selectedBlock)
            currentCMD = "" + currentCMD + tileSelector.tilemapLocation().column + ", " + tileSelector.tilemapLocation().row + ")"
            menuContents.insertAt(menuContents.length - 1, miniMenu.createMenuItem(currentCMD))
            if (menuContents.length > moves) {
                menuContents[menuContents.length - 1] = miniMenu.createMenuItem("")
            }
            loadTilemap()
            sprites.destroy(tileSelector)
            inMenu = 0
        } else if (inMenu == 4) {
            isOverlapping = false
            tileSelector.setImage(img`
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 
                `)
            tileSelector.setFlag(SpriteFlag.Ghost, false)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                if (sprites.readDataNumber(value, "level") < 2 && tileSelector.overlapsWith(value)) {
                    overlapping = value
                    isOverlapping = true
                    break;
                }
            }
            for (let value of sprites.allOfKind(SpriteKind.Friend)) {
                if (sprites.readDataNumber(value, "level") < 2 && tileSelector.overlapsWith(value)) {
                    overlapping = value
                    isOverlapping = true
                    break;
                }
            }
            tileSelector.setImage(img`
                1 1 . 1 1 . 1 1 
                1 . . . . . . 1 
                . . . . . . . . 
                1 . . . . . . 1 
                1 . . . . . . 1 
                . . . . . . . . 
                1 . . . . . . 1 
                1 1 . 1 1 . 1 1 
                `)
            tileSelector.setFlag(SpriteFlag.Ghost, true)
            if (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile3`) || tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile10`) || isOverlapping) {
                if (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile3`)) {
                    tiles.setTileAt(tileSelector.tilemapLocation(), assets.tile`myTile10`)
                } else if (tiles.tileAtLocationEquals(tileSelector.tilemapLocation(), assets.tile`myTile10`)) {
                    tiles.setTileAt(tileSelector.tilemapLocation(), assets.tile`myTile11`)
                } else if (sprites.readDataNumber(overlapping, "level") == 0) {
                    sprites.setDataNumber(overlapping, "level", 1)
                    if (overlapping.kind() == SpriteKind.Enemy) {
                        overlapping.setImage(img`
                            . . . . . . . . 
                            . . 4 4 2 2 . . 
                            . 4 4 4 2 2 2 . 
                            . 4 4 4 2 2 2 . 
                            . 2 2 2 4 4 4 . 
                            . 2 2 2 4 4 4 . 
                            . . 2 2 4 4 . . 
                            . . . . . . . . 
                            `)
                    } else {
                        overlapping.setImage(img`
                            . . . . . . . . 
                            . . 1 1 9 9 . . 
                            . 1 1 1 9 9 9 . 
                            . 1 1 1 9 9 9 . 
                            . 9 9 9 1 1 1 . 
                            . 9 9 9 1 1 1 . 
                            . . 9 9 1 1 . . 
                            . . . . . . . . 
                            `)
                    }
                } else {
                    sprites.setDataNumber(overlapping, "level", 2)
                    if (overlapping.kind() == SpriteKind.Enemy) {
                        overlapping.setImage(img`
                            . . . . . . . . 
                            . . 2 2 2 2 . . 
                            . 2 2 2 2 2 2 . 
                            . 2 2 2 2 2 2 . 
                            . 2 2 2 2 2 2 . 
                            . 2 2 2 2 2 2 . 
                            . . 2 2 2 2 . . 
                            . . . . . . . . 
                            `)
                    } else {
                        overlapping.setImage(img`
                            . . . . . . . . 
                            . . 9 9 9 9 . . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . . 9 9 9 9 . . 
                            . . . . . . . . 
                            `)
                    }
                }
                currentCMD = "" + currentCMD + tileSelector.tilemapLocation().column + ", " + tileSelector.tilemapLocation().row + ")"
                menuContents.insertAt(menuContents.length - 1, miniMenu.createMenuItem(currentCMD))
                if (menuContents.length > moves) {
                    menuContents[menuContents.length - 1] = miniMenu.createMenuItem("")
                }
                sprites.destroy(tileSelector)
                inMenu = 0
            }
        } else if (inMenu == 5) {
            isOverlapping = false
            tileSelector.setImage(img`
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                a a a a a a a a 
                `)
            tileSelector.setFlag(SpriteFlag.Ghost, false)
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                if (tileSelector.overlapsWith(value)) {
                    value.setKind(SpriteKind.Friend)
                    if (sprites.readDataNumber(value, "level") == 0) {
                        value.setImage(img`
                            . . . . . . . . 
                            . . 1 1 1 1 . . 
                            . 1 1 1 1 1 1 . 
                            . 1 1 1 1 1 1 . 
                            . 1 1 1 1 1 1 . 
                            . 1 1 1 1 1 1 . 
                            . . 1 1 1 1 . . 
                            . . . . . . . . 
                            `)
                    } else if (sprites.readDataNumber(value, "level") == 1) {
                        value.setImage(img`
                            . . . . . . . . 
                            . . 1 1 9 9 . . 
                            . 1 1 1 9 9 9 . 
                            . 1 1 1 9 9 9 . 
                            . 9 9 9 1 1 1 . 
                            . 9 9 9 1 1 1 . 
                            . . 9 9 1 1 . . 
                            . . . . . . . . 
                            `)
                    } else {
                        value.setImage(img`
                            . . . . . . . . 
                            . . 9 9 9 9 . . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . 9 9 9 9 9 9 . 
                            . . 9 9 9 9 . . 
                            . . . . . . . . 
                            `)
                    }
                    isOverlapping = true
                    break;
                }
            }
            tileSelector.setImage(img`
                9 9 . 9 9 . 9 9 
                9 . . . . . . 9 
                . . . . . . . . 
                9 . . . . . . 9 
                9 . . . . . . 9 
                . . . . . . . . 
                9 . . . . . . 9 
                9 9 . 9 9 . 9 9 
                `)
            tileSelector.setFlag(SpriteFlag.Ghost, true)
            if (isOverlapping) {
                currentCMD = "" + currentCMD + tileSelector.tilemapLocation().column + ", " + tileSelector.tilemapLocation().row + ")"
                menuContents.insertAt(menuContents.length - 1, miniMenu.createMenuItem(currentCMD))
                if (menuContents.length > moves) {
                    menuContents[menuContents.length - 1] = miniMenu.createMenuItem("")
                }
                inMenu = 0
                sprites.destroy(tileSelector)
            }
        } else {
        	
        }
    })
})
function loadTilemap () {
    sprites.destroyAllSpritesOfKind(SpriteKind.laserParticle)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        tiles.setWallAt(value, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        generateLaser(0, 1, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        generateLaser(-1, 0, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        generateLaser(0, -1, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        generateLaser(1, 0, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        generateLaser(0, 1, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        generateLaser(-1, 0, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        generateLaser(0, -1, value.column, value.row)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        generateLaser(1, 0, value.column, value.row)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    timer.throttle("triggerReset", 67, function () {
        timer.after(100, function () {
            makeParticles()
            pause(0)
            setMap(currentLevel)
        })
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inMenu == 0) {
        timer.throttle("triggerReset", 100, function () {
            timer.after(70, function () {
                makeParticles()
                pause(0)
                setMap(currentLevel)
            })
        })
    } else if (inMenu > 0) {
        inMenu = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
        if (programScreen) {
            programScreen.close()
        }
        if (prgmSelector) {
            prgmSelector.close()
        }
        if (numberOfLinesSprite) {
            numberOfLinesSprite.close()
        }
    } else if (inMenu == -2) {
        introMenu.close()
        introMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Start"),
        miniMenu.createMenuItem("How to Play"),
        miniMenu.createMenuItem("Credits")
        )
        introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
        introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
        introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
        introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 7)
        introMenu.setPosition(80 - introMenu.width / 2, 80)
        inMenu = -1
    } else {
    	
    }
})
function hurtFriend (sprite: Sprite) {
    if (sprites.readDataNumber(sprite, "level") < 0) {
        sprites.destroy(sprite)
    } else if (sprites.readDataNumber(sprite, "level") == 0) {
        sprite.setImage(img`
            . . . . . . . . 
            . . 1 1 1 1 . . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 . 
            . . 1 1 1 1 . . 
            . . . . . . . . 
            `)
    } else {
        sprite.setImage(img`
            . . . . . . . . 
            . . 1 1 9 9 . . 
            . 1 1 1 9 9 9 . 
            . 1 1 1 9 9 9 . 
            . 9 9 9 1 1 1 . 
            . 9 9 9 1 1 1 . 
            . . 9 9 1 1 . . 
            . . . . . . . . 
            `)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("move", 34, function () {
        if (inMenu == 0 && !(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) && noFriendInSquare(-1, 0)) {
            for (let index = 0; index < 8; index++) {
                mySprite.x += -1
                pause(5)
            }
            tiles.placeOnTile(mySprite, mySprite.tilemapLocation())
            moveCharacters()
        }
        if (inMenu >= 2) {
            for (let index = 0; index < 8; index++) {
                tileSelector.x += -1
                pause(1)
            }
            tiles.placeOnTile(tileSelector, tileSelector.tilemapLocation())
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    timer.throttle("triggerReset", 100, function () {
        timer.after(100, function () {
            makeParticles()
            pause(0)
            setMap(currentLevel)
        })
    })
})
sprites.onOverlap(SpriteKind.Friend, SpriteKind.Enemy, function (sprite, otherSprite) {
    damageAmount = -1 - Math.min(sprites.readDataNumber(sprite, "level"), sprites.readDataNumber(otherSprite, "level"))
    sprites.changeDataNumberBy(sprite, "level", damageAmount)
    sprites.changeDataNumberBy(otherSprite, "level", damageAmount)
    hurtEnemy(otherSprite)
    hurtFriend(sprite)
})
function makeParticles () {
    timer.background(function () {
        for (let index = 0; index < 50; index++) {
            ghostParticle = sprites.create(img`
                1 
                `, SpriteKind.Particle)
            ghostParticle.setFlag(SpriteFlag.AutoDestroy, true)
            ghostParticle.setFlag(SpriteFlag.Ghost, true)
            ghostParticle.lifespan = 500
            ghostParticle.setPosition(mySprite.x, mySprite.y)
            ghostParticle.setVelocity(randint(-50, 50), randint(-50, 50))
        }
    })
}
function hurtEnemy (sprite: Sprite) {
    if (sprites.readDataNumber(sprite, "level") < 0) {
        sprites.destroy(sprite)
    } else if (sprites.readDataNumber(sprite, "level") == 0) {
        sprite.setImage(img`
            . . . . . . . . 
            . . 4 4 4 4 . . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 . 
            . . 4 4 4 4 . . 
            . . . . . . . . 
            `)
    } else {
        sprite.setImage(img`
            . . . . . . . . 
            . . 4 4 2 2 . . 
            . 4 4 4 2 2 2 . 
            . 4 4 4 2 2 2 . 
            . 2 2 2 4 4 4 . 
            . 2 2 2 4 4 4 . 
            . . 2 2 4 4 . . 
            . . . . . . . . 
            `)
    }
}
function flash () {
    timer.background(function () {
        if (menuContents.length <= moves) {
            pause(500)
            menuContents[menuContents.length - 1] = miniMenu.createMenuItem("C:\\>")
            if (inMenu != 1) {
                menuContents[menuContents.length - 1] = miniMenu.createMenuItem("C:\\>_")
                return
            }
            programScreen.close()
            initiateMenu()
            pause(500)
            menuContents[menuContents.length - 1] = miniMenu.createMenuItem("C:\\>_")
            if (inMenu != 1) {
                return
            }
            programScreen.close()
            initiateMenu()
            flash()
        }
    })
}
scene.onOverlapTile(SpriteKind.Friend, assets.tile`myTile3`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        tiles.setTileAt(location, assets.tile`myTile0`)
        sprites.changeDataNumberBy(sprite, "level", -1)
        hurtFriend(sprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    timer.throttle("triggerReset", 100, function () {
        timer.after(100, function () {
            makeParticles()
            pause(0)
            setMap(currentLevel)
        })
    })
})
sprites.onOverlap(SpriteKind.laserParticle, SpriteKind.Player, function (sprite, otherSprite) {
    timer.throttle("triggerReset", 100, function () {
        timer.after(100, function () {
            makeParticles()
            pause(0)
            setMap(currentLevel)
        })
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("move", 34, function () {
        if (inMenu == 0 && !(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))) && noFriendInSquare(0, 1)) {
            for (let index = 0; index < 8; index++) {
                mySprite.y += 1
                pause(5)
            }
            tiles.placeOnTile(mySprite, mySprite.tilemapLocation())
            moveCharacters()
        }
        if (inMenu >= 2) {
            for (let index = 0; index < 8; index++) {
                tileSelector.y += 1
                pause(1)
            }
            tiles.placeOnTile(tileSelector, tileSelector.tilemapLocation())
        }
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("move", 34, function () {
        if (inMenu == 0 && !(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))) && noFriendInSquare(0, -1)) {
            for (let index = 0; index < 8; index++) {
                mySprite.y += -1
                pause(5)
            }
            tiles.placeOnTile(mySprite, mySprite.tilemapLocation())
            moveCharacters()
        }
        if (inMenu >= 2) {
            for (let index = 0; index < 8; index++) {
                tileSelector.y += -1
                pause(1)
            }
            tiles.placeOnTile(tileSelector, tileSelector.tilemapLocation())
        }
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("move", 34, function () {
        if (inMenu == 0 && !(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) && noFriendInSquare(1, 0)) {
            for (let index = 0; index < 8; index++) {
                mySprite.x += 1
                pause(5)
            }
            tiles.placeOnTile(mySprite, mySprite.tilemapLocation())
            moveCharacters()
        }
        if (inMenu >= 2) {
            for (let index = 0; index < 8; index++) {
                tileSelector.x += 1
                pause(1)
            }
            tiles.placeOnTile(tileSelector, tileSelector.tilemapLocation())
        }
    })
})
scene.onOverlapTile(SpriteKind.Friend, assets.tile`myTile11`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        sprites.changeDataNumberBy(sprite, "level", -3)
        hurtFriend(sprite)
        if (sprites.readDataNumber(sprite, "level") == -1) {
            tiles.setTileAt(location, assets.tile`myTile0`)
        } else if (sprites.readDataNumber(sprite, "level") == -2) {
            tiles.setTileAt(location, assets.tile`myTile3`)
        } else {
            tiles.setTileAt(location, assets.tile`myTile10`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile11`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        sprites.changeDataNumberBy(sprite, "level", -3)
        hurtEnemy(sprite)
        if (sprites.readDataNumber(sprite, "level") == -1) {
            tiles.setTileAt(location, assets.tile`myTile0`)
        } else if (sprites.readDataNumber(sprite, "level") == -2) {
            tiles.setTileAt(location, assets.tile`myTile3`)
        } else {
            tiles.setTileAt(location, assets.tile`myTile10`)
        }
    }
})
function openPgrmScreen () {
    inMenu = 1
    prgmSelector = miniMenu.createMenuFromArray([
    miniMenu.createMenuItem("move"),
    miniMenu.createMenuItem("upgrade"),
    miniMenu.createMenuItem("control"),
    miniMenu.createMenuItem("close")
    ])
    prgmSelector.setTitle("Action")
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Padding, 0)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 12)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 7)
    prgmSelector.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 46)
    prgmSelector.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    prgmSelector.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 7)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
    prgmSelector.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
    prgmSelector.setPosition(105, 11)
    prgmSelector.z = 1000
    numberOfLines = []
    for (let index = 0; index <= moves - 1; index++) {
        numberOfLines.push(miniMenu.createMenuItem(""))
    }
    numberOfLinesSprite = miniMenu.createMenuFromArray(numberOfLines)
    numberOfLinesSprite.setTitle("")
    numberOfLinesSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Padding, 0)
    numberOfLinesSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 15)
    numberOfLinesSprite.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Foreground, 7)
    numberOfLinesSprite.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    numberOfLinesSprite.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
    numberOfLinesSprite.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 7)
    numberOfLinesSprite.setButtonEventsEnabled(false)
    numberOfLinesSprite.setPosition(101, 11)
    numberOfLinesSprite.z = 1001
    initiateMenu()
    flash()
}
function findOverlapEnemy (currentSprite: Sprite) {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (currentSprite.overlapsWith(value) || tiles.tileAtLocationIsWall(currentSprite.tilemapLocation())) {
            currentSprite.x += 0 - Math.constrain(currentSprite.vx * 128, -8, 8)
        }
        if (currentSprite.overlapsWith(value) || tiles.tileAtLocationIsWall(currentSprite.tilemapLocation())) {
            currentSprite.y += 0 - Math.constrain(currentSprite.vy * 128, -8, 8)
        }
    }
}
scene.onOverlapTile(SpriteKind.Friend, assets.tile`myTile10`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        sprites.changeDataNumberBy(sprite, "level", -2)
        hurtFriend(sprite)
        if (sprites.readDataNumber(sprite, "level") == -1) {
            tiles.setTileAt(location, assets.tile`myTile0`)
        } else {
            tiles.setTileAt(location, assets.tile`myTile3`)
        }
    }
})
function findOverlapFriend (currentSprite: Sprite) {
    for (let value of sprites.allOfKind(SpriteKind.Friend)) {
        if (currentSprite.overlapsWith(value) || tiles.tileAtLocationIsWall(currentSprite.tilemapLocation()) || mySprite.overlapsWith(value)) {
            currentSprite.x += 0 - Math.constrain(currentSprite.vx * 128, -8, 8)
        }
        if (currentSprite.overlapsWith(value) || tiles.tileAtLocationIsWall(currentSprite.tilemapLocation()) || mySprite.overlapsWith(value)) {
            currentSprite.y += 0 - Math.constrain(currentSprite.vy * 128, -8, 8)
        }
    }
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile10`, function (sprite, location) {
    if (spriteutils.speed(sprite) == 0) {
        sprites.changeDataNumberBy(sprite, "level", -2)
        hurtEnemy(sprite)
        if (sprites.readDataNumber(sprite, "level") == -1) {
            tiles.setTileAt(location, assets.tile`myTile0`)
        } else {
            tiles.setTileAt(location, assets.tile`myTile3`)
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (spriteutils.speed(sprite) == 0) {
        timer.throttle("triggerReset", 100, function () {
            timer.after(100, function () {
                makeParticles()
                pause(0)
                setMap(currentLevel)
            })
        })
    }
})
function initiateMenu () {
    programScreen = miniMenu.createMenuFromArray(menuContents)
    programScreen.setTitle("ROM_Patcher.exe")
    programScreen.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Background, 12)
    programScreen.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Padding, 0)
    programScreen.setButtonEventsEnabled(false)
    programScreen.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollSpeed, 0)
    programScreen.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 94)
    programScreen.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
    programScreen.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    programScreen.setStyleProperty(miniMenu.StyleKind.All, miniMenu.StyleProperty.Foreground, 7)
    programScreen.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 15)
    programScreen.setPosition(11, 11)
    programScreen.z = 1000
}
let numberOfLines: miniMenu.MenuItem[] = []
let ghostParticle: Sprite = null
let damageAmount = 0
let numberOfLinesSprite: miniMenu.MenuSprite = null
let prgmSelector: miniMenu.MenuSprite = null
let programScreen: miniMenu.MenuSprite = null
let overlapping: Sprite = null
let selectedBlock: Image = null
let tileSelector: Sprite = null
let closestSprite: Sprite = null
let closestDis = 0
let levelSelectMenuContents: miniMenu.MenuItem[] = []
let list: number[] = []
let isOverlapping = false
let enemy1: Sprite = null
let movesForLevel: number[] = []
let moves = 0
let levels: tiles.TileMapData[] = []
let currentLevel = 0
let laser: Sprite = null
let inMenu = 0
let introMenu: miniMenu.MenuSprite = null
let menuContents: miniMenu.MenuItem[] = []
let currentCMD = ""
let mySprite: Sprite = null
if (!(blockSettings.exists("completedLevels"))) {
    blockSettings.writeNumberArray("completedLevels", [])
}
mySprite = sprites.create(img`
    . . 9 9 9 9 . . 
    . 9 6 6 6 6 9 . 
    9 6 6 6 6 6 6 9 
    9 6 6 6 6 6 6 9 
    9 6 6 6 6 6 6 9 
    9 6 6 6 6 6 6 9 
    . 9 6 6 6 6 9 . 
    . . 9 9 9 9 . . 
    `, SpriteKind.Player)
mySprite.setPosition(-16, -16)
currentCMD = ""
initiateLevels()
menuContents = [miniMenu.createMenuItem("C:\\>_")]
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............77..77..777777..777777..77..77..777777..777777..777777..........777777..777777..777777..77..77..777777..777777..777777..7777....777777.............
    .............77..77..777777..777777..77..77..777777..777777..777777..........777777..777777..777777..77..77..777777..777777..777777..7777....777777.............
    .............77..77..77..77..77......7777......77....77..77..77..............77..77..77......77..77..77..77....77....77..77..77......77..77......77.............
    .............77..77..77..77..77......7777......77....77..77..77..............77..77..77......77..77..77..77....77....77..77..77......77..77......77.............
    .............777777..777777..77......7777......77....77..77..77..77..........7777....777777..77..77..77..77....77....7777....777777..77..77....77...............
    .............777777..777777..77......7777......77....77..77..77..77..........7777....777777..77..77..77..77....77....7777....777777..77..77....77...............
    .............77..77..77..77..77......77..77....77....77..77..77..77..........77..77..77......7777....77..77....77....77..77..77......77..77.....................
    .............77..77..77..77..77......77..77....77....77..77..77..77..........77..77..77......7777....77..77....77....77..77..77......77..77.....................
    .............77..77..77..77..777777..77..77..777777..77..77..777777..........77..77..777777......77..777777..777777..77..77..777777..7777......77...............
    .............77..77..77..77..777777..77..77..777777..77..77..777777..........77..77..777777......77..777777..777777..77..77..777777..7777......77...............
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
introMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Start"),
miniMenu.createMenuItem("How to Play"),
miniMenu.createMenuItem("Credits")
)
introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 7)
introMenu.setPosition(80 - introMenu.width / 2, 80)
inMenu = -1
game.onUpdate(function () {
    introMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (inMenu == -1) {
            if (selection == "Start") {
                inMenu = -2
                introMenu.close()
                levelSelectMenuContents = []
                for (let index = 0; index <= levels.length - 1; index++) {
                    if (blockSettings.readNumberArray("completedLevels").indexOf(index) == -1) {
                        levelSelectMenuContents.push(miniMenu.createMenuItem("" + (index + 1)))
                    } else {
                        levelSelectMenuContents.push(miniMenu.createMenuItem("" + (index + 1) + " (Done)"))
                    }
                }
                introMenu = miniMenu.createMenuFromArray(levelSelectMenuContents)
                introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 7)
                introMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Foreground, 15)
                introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 7)
                introMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 15)
                introMenu.setDimensions(160, 120)
                introMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 6)
                introMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
                introMenu.setPosition(0, 0)
            } else if (selection == "How to Play") {
                game.setDialogTextColor(7)
                game.setDialogFrame(img`
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    `)
                game.showLongText("In this game, your goal is to get to the green tile in each level. But to complete the levels, you have to hack the game. Press A to open the menu, then navigate to and press a desired function on the right.", DialogLayout.Full)
                game.showLongText("After selecting a function, a cursor will appear so you can easily select affected tiles/blocks. Move lets you move certain tiles, like (some) lasers and mines. Upgrade lets you upgrade a mine, enemy, or friend. Control changes an enemy to a friend.", DialogLayout.Full)
            } else if (selection == "Credits") {
                game.setDialogTextColor(7)
                game.setDialogFrame(img`
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    f f f f f f f f f f f f f f f 
                    `)
                game.showLongText("Credits -                                    Main Game Developer:              Kiwiphoenix364                         Microsoft MakeCode Arcade Engine and Extensions:                            Microsoft MakeCode Team", DialogLayout.Full)
            } else {
            	
            }
        } else {
            introMenu.close()
            setMap(selectedIndex)
            pause(0)
            inMenu = 0
        }
    })
})
game.onUpdate(function () {
    if (inMenu == 1) {
        prgmSelector.onButtonPressed(controller.A, function (selection, selectedIndex) {
            pause(0)
            if (menuContents.length <= moves) {
                if (selection == "move") {
                    currentCMD = "C:\\>move("
                    inMenu = 2
                    programScreen.close()
                    prgmSelector.close()
                    numberOfLinesSprite.close()
                    tileSelector = sprites.create(img`
                        2 2 . 2 2 . 2 2 
                        2 . . . . . . 2 
                        . . . . . . . . 
                        2 . . . . . . 2 
                        2 . . . . . . 2 
                        . . . . . . . . 
                        2 . . . . . . 2 
                        2 2 . 2 2 . 2 2 
                        `, SpriteKind.Cursor)
                    tileSelector.setFlag(SpriteFlag.Ghost, true)
                    tileSelector.setPosition(4, 4)
                } else if (selection == "upgrade") {
                    currentCMD = "C:\\>upgrade("
                    inMenu = 4
                    programScreen.close()
                    prgmSelector.close()
                    numberOfLinesSprite.close()
                    tileSelector = sprites.create(img`
                        1 1 . 1 1 . 1 1 
                        1 . . . . . . 1 
                        . . . . . . . . 
                        1 . . . . . . 1 
                        1 . . . . . . 1 
                        . . . . . . . . 
                        1 . . . . . . 1 
                        1 1 . 1 1 . 1 1 
                        `, SpriteKind.Cursor)
                    tileSelector.setFlag(SpriteFlag.Ghost, true)
                    tileSelector.setPosition(4, 4)
                } else if (selection == "control") {
                    currentCMD = "C:\\>control("
                    inMenu = 5
                    programScreen.close()
                    prgmSelector.close()
                    numberOfLinesSprite.close()
                    tileSelector = sprites.create(img`
                        9 9 . 9 9 . 9 9 
                        9 . . . . . . 9 
                        . . . . . . . . 
                        9 . . . . . . 9 
                        9 . . . . . . 9 
                        . . . . . . . . 
                        9 . . . . . . 9 
                        9 9 . 9 9 . 9 9 
                        `, SpriteKind.Cursor)
                    tileSelector.setFlag(SpriteFlag.Ghost, true)
                    tileSelector.setPosition(4, 4)
                } else if (selection == "close") {
                    inMenu = 0
                    programScreen.close()
                    prgmSelector.close()
                    numberOfLinesSprite.close()
                } else {
                	
                }
            }
        })
    }
})
