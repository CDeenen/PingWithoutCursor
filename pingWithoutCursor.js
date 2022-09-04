Canvas.prototype._onLongPress = _onLongPress_override;

function _onLongPress_override(event, origin) {
   const isCtrl = game.keyboard.isModifierActive(KeyboardManager.MODIFIER_KEYS.CONTROL);
   const isTokenLayer = canvas.activeLayer instanceof TokenLayer;
   if ( isCtrl || !isTokenLayer ) return;
   return canvas.ping(origin);
}