# jquery.popper
Popperjs based tooltip


    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <link rel="stylesheet" type="text/css" href="/js/jquery.popper.css" />
    <script src="/js/jquery.popper.js"></script>
    
    <script>
        function initPopper() {
            $('.popper').popper();
        }
        $(document).ready(function () {
            initPopper();
            $(document.body).bind("DOMSubtreeModified", initPopper);
        });
    </script>
    
    
    <fieldset class="popper form-group"><legend>Toggle Info</legend>
        <button id="btnToggleInfo" class="btn btn-primary popper-toggle" type="button" aria-haspopup="true" aria-expanded="false">Toggle</span</button>
        <div class="popper-menu" aria-labelledby="btnToggleInfo">
            <!-- contents -->
        </div>
    </fieldset>
    
    
> https://popper.js.org/
