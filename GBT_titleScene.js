(function(){

	var parameters = PluginManager.parameters('GBT_titleScene');

	var background = Number(parameters['Background'] || 0);

	var mGBT_titleScene_updatePlacement = Window_TitleCommand.prototype.updatePlacement;
    Window_TitleCommand.prototype.updatePlacement = function() {
        mGBT_titleScene_updatePlacement.call(this);
        // this.x += offsetX;
        // this.y += offsetY;
        this.x = 100;
        this.y = 100;
        this.setBackgroundType(background);
    };
})();