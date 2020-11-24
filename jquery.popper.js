/* ========================================================================
 * Marcel Barbosa Pinto 
 * https://github.com/mbppower/jquery.popper
 * ========================================================================
 * Popper.js is required: <script src="https://unpkg.com/@popperjs/core@2"></script>
 * ========================================================================
 */

+function ($) {
  'use strict';

  // CLASS DEFINITION
  // =========================
  var PopperToggle = function (el) {
    var _t = this;

    this.popperInstance = null;
    this.button = el.querySelector(".popper-toggle");
    this.tooltip = el.querySelector(".popper-menu");

    this.create = function () {
        _t.destroy();
        _t.popperInstance = Popper.createPopper(_t.button, _t.tooltip, {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 6], //carret
                    },
                },
            ],
        });
    }

    this.destroy = function() {
        if (_t.popperInstance) {
            _t.popperInstance.destroy();
            _t.popperInstance = null;
        }
    }

    this.show = function () {
        if (_t.tooltip.hasAttribute('data-show')) return;

        _t.create();
        _t.tooltip.setAttribute('data-show', '');

        setTimeout(function () { 
            document.body.addEventListener('click', _t.hide);
            _t.tooltip.addEventListener('click', _t.stopClickPropagation);
        }, 100)
    }

    this.hide = function () {
        if (!_t.tooltip.hasAttribute('data-show')) return;

        _t.tooltip.removeAttribute('data-show');
        _t.destroy();

        document.body.removeEventListener('click', _t.hide);
        _t.tooltip.removeEventListener('click', _t.stopClickPropagation);
    }

    this.stopClickPropagation = function(event) {
        event.stopPropagation();
    }

    this.toggle = function () {
        if (_t.tooltip.hasAttribute('data-show')) {
            _t.hide();
        }
        else {
            _t.show();
        }
    }

    this.init = function () {
        _t.button.addEventListener('click', _t.toggle);
    }

    this.init();
}

  // PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.popper')

      if (!data) $this.data('bs.popper', (data = new PopperToggle(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.popper

  $.fn.popper  = Plugin
  $.fn.popper.Constructor = PopperToggle

  // NO CONFLICT
  // ====================

  $.fn.popper.noConflict = function () {
    $.fn.popper = old
    return this
  }

}(jQuery);
