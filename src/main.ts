import { Boot } from './scenes/Boot';
import { Controls } from './scenes/Controls';
import { Level } from './scenes/Level';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import { Game, Types } from "phaser";


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {

    
    type: Phaser.AUTO,
    width: 2000,
    height: 1250,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: "arcade", 
        arcade: {
            debug: false,
            gravity: {
                y: 300
            }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Controls,
        Level
    ]
};

export default new Game(config);

