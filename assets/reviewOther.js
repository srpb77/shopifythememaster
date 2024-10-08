// DOCUMENT https:\/\/help.beetheme.co\/collections
(function( $ ) {
   "use strict";

   BEEThemeSP.reviewOther = function () {
      // any code css
      // 1. Areviews - Reviews Importer
      // if ($('.areviews_product_item').length > 0 && typeof show_infiniti_areviews === 'function'){show_infiniti_areviews();}
   };


})( jQuery_BENT );

jQuery_BENT(document).ready(function($) {
   jQuery_BENT('body').on('reloadReview.bee', BEEThemeSP.reviewOther );
});

