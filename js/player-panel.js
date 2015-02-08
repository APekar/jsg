function PlayerPanel(opts) {
    var self = {};

    var _panel = $("#player-panel");

    var _hpPanel = _panel.find(".hp-panel");
    var _hp = _hpPanel.find(".hp");

    self.initHandlers = function() {
        $(document).bind('player_hp_change', function(e, hp, maxHp) {
            _hp.css({"width": 100 * hp / maxHp + "%"});
        });
    };

    return self;
}