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
    
> https://popper.js.org/
