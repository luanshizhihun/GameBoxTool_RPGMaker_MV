//=============================================================================
// GTB_titleScene.js
//=============================================================================

/*:
 * @plugindesc 修改封面样式.
 * @author YTB
 *
 * @param Background
 * @desc 背景图名称.
 * @default $dataSystem.title1Name
 *
 * @param Background secont
 * @desc 背景装饰图.
 * @default $dataSystem.title2Name
 *
 * @param Position X
 * @desc 标题框坐标X.
 * @default 0
 *
 * @param Position Y
 * @desc 标题框坐标y.
 * @default 0
 *
 * @help 帮助开发游戏菜单得插件
 */

/*:cn
 * @plugindesc 修改封面样式.
 * @author YTB
 *
 * @param Background
 * @desc 背景图名称.
 * @default 0
 *
 * @help 帮助开发游戏菜单得插件
 */

(function(){

	var parameters = PluginManager.parameters('GBT_titleScene');

    var PositionX = Number(parameters['Position X'] || 0);
    var PositionY = Number(parameters['Position Y'] || 0);

	var mGBT_titleCommand_updatePlacement = Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        mGBT_titleCommand_updatePlacement.call(this);
        // this.x += offsetX;
        // this.y += offsetY;
        this.x = PositionY;
        this.y = PositionY;
    };
})();

(function(){
    var parameters = PluginManager.parameters('GBT_titleScene');

    var backgroundImg = parameters['Background'] || $dataSystem.title1Name;
    var backgroundImg2 = parameters['Background secont'] || $dataSystem.title2Name;

    var mGBT_titleScene_createBackground = Scene_Title.prototype.createBackground;
    Scene_Title.prototype.createBackground = function() {
        mGBT_titleScene_createBackground.call(this);
        this._backSprite1 = new Sprite(ImageManager.loadTitle1(backgroundImg));
        this._backSprite2 = new Sprite(ImageManager.loadTitle2(backgroundImg2));
        this.addChild(this._backSprite1);
        this.addChild(this._backSprite2);
    };
})();