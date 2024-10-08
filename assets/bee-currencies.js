
(function( $ ) {
   "use strict";


    var $body       = $('body'),
    remove_currency = false,
    round_cur_shop  = false,
    round_currency  = BEEconfigs.round_currency,
    hover_currency  = BEEconfigs.hover_currency,
    cartCurrency    = BEEconfigs.cartCurrency,
    t_moneyFormat   = BEEconfigs.moneyFormat,
    dt_cur_shop     = 'data-currencybee-'+cartCurrency,
    dt_base         = 'data-basecubee',
    $overlay        = $('.bee-close-overlay'),
    // strVisible      = 'is--visible',
    classes         = {
      selected: 'is--selected',
      enabled: 'is--enabled'
    },
    CurrencyConfigs = {
      currentCurrency : BEEThemeSP.storageCurrency(),
      format          : BEEconfigs.currencyCodeEnabled ? 'money_with_currency_format' : 'money_format',
      cartCurrency    : BEEconfigs.cartCurrency,
      locationBee     : null
    },
    moneyFormats    = {
          "USD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} USD"
          },
          "EUR": {
            "money_format": "&euro;{{amount}}",
            "money_with_currency_format": "&euro;{{amount}} EUR"
          },
          "GBP": {
            "money_format": "&pound;{{amount}}",
            "money_with_currency_format": "&pound;{{amount}} GBP"
          },
          "CAD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} CAD"
          },
          "ALL": {
            "money_format": "Lek {{amount}}",
            "money_with_currency_format": "Lek {{amount}} ALL"
          },
          "DZD": {
            "money_format": "DA {{amount}}",
            "money_with_currency_format": "DA {{amount}} DZD"
          },
          "AOA": {
            "money_format": "Kz{{amount}}",
            "money_with_currency_format": "Kz{{amount}} AOA"
          },
          "ARS": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} ARS"
          },
          "AMD": {
            "money_format": "{{amount}} AMD",
            "money_with_currency_format": "{{amount}} AMD"
          },
          "AWG": {
            "money_format": "Afl{{amount}}",
            "money_with_currency_format": "Afl{{amount}} AWG"
          },
          "AUD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} AUD"
          },
          "BBD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} Bds"
          },
          "AZN": {
            "money_format": "m.{{amount}}",
            "money_with_currency_format": "m.{{amount}} AZN"
          },
          "BDT": {
            "money_format": "Tk {{amount}}",
            "money_with_currency_format": "Tk {{amount}} BDT"
          },
          "BSD": {
            "money_format": "BS${{amount}}",
            "money_with_currency_format": "BS${{amount}} BSD"
          },
          "BHD": {
            "money_format": "{{amount}} BD",
            "money_with_currency_format": "{{amount}} BHD"
          },
          "BYR": {
            "money_format": "Br {{amount}}",
            "money_with_currency_format": "Br {{amount}} BYR"
          },
          "BZD": {
            "money_format": "BZ${{amount}}",
            "money_with_currency_format": "BZ${{amount}} BZD"
          },
          "BTN": {
            "money_format": "Nu {{amount}}",
            "money_with_currency_format": "Nu {{amount}} BTN"
          },
          "BAM": {
            "money_format": "KM {{amount_with_comma_separator}}",
            "money_with_currency_format": "KM {{amount_with_comma_separator}} BAM"
          },
          "BRL": {
            "money_format": "R$ {{amount_with_comma_separator}}",
            "money_with_currency_format": "R$ {{amount_with_comma_separator}} BRL"
          },
          "BOB": {
            "money_format": "Bs{{amount_with_comma_separator}}",
            "money_with_currency_format": "Bs{{amount_with_comma_separator}} BOB"
          },
          "BWP": {
            "money_format": "P{{amount}}",
            "money_with_currency_format": "P{{amount}} BWP"
          },
          "BND": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} BND"
          },
          "BGN": {
            "money_format": "{{amount}} Ð»Ð²",
            "money_with_currency_format": "{{amount}} Ð»Ð² BGN"
          },
          "MMK": {
            "money_format": "K{{amount}}",
            "money_with_currency_format": "K{{amount}} MMK"
          },
          "KHR": {
            "money_format": "KHR{{amount}}",
            "money_with_currency_format": "KHR{{amount}}"
          },
          "KYD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} KYD"
          },
          "XAF": {
            "money_format": "FCFA{{amount}}",
            "money_with_currency_format": "FCFA{{amount}} XAF"
          },
          "CLP": {
            "money_format": "${{amount_no_decimals}}",
            "money_with_currency_format": "${{amount_no_decimals}} CLP"
          },
          "CNY": {
            "money_format": "&#165;{{amount}}",
            "money_with_currency_format": "&#165;{{amount}} CNY"
          },
          "COP": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} COP"
          },
          "CRC": {
            "money_format": "&#8353; {{amount_with_comma_separator}}",
            "money_with_currency_format": "&#8353; {{amount_with_comma_separator}} CRC"
          },
          "HRK": {
            "money_format": "{{amount_with_comma_separator}} kn",
            "money_with_currency_format": "{{amount_with_comma_separator}} kn HRK"
          },
          "CZK": {
            "money_format": "{{amount_with_comma_separator}} K&#269;",
            "money_with_currency_format": "{{amount_with_comma_separator}} K&#269;"
          },
          "DKK": {
            "money_format": "{{amount_with_comma_separator}}",
            "money_with_currency_format": "kr.{{amount_with_comma_separator}}"
          },
          "DOP": {
            "money_format": "RD$ {{amount}}",
            "money_with_currency_format": "RD$ {{amount}}"
          },
          "XCD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "EC${{amount}}"
          },
          "EGP": {
            "money_format": "LE {{amount}}",
            "money_with_currency_format": "LE {{amount}} EGP"
          },
          "ETB": {
            "money_format": "Br{{amount}}",
            "money_with_currency_format": "Br{{amount}} ETB"
          },
          "XPF": {
            "money_format": "{{amount_no_decimals_with_comma_separator}} XPF",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} XPF"
          },
          "FJD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "FJ${{amount}}"
          },
          "GMD": {
            "money_format": "D {{amount}}",
            "money_with_currency_format": "D {{amount}} GMD"
          },
          "GHS": {
            "money_format": "GH&#8373;{{amount}}",
            "money_with_currency_format": "GH&#8373;{{amount}}"
          },
          "GTQ": {
            "money_format": "Q{{amount}}",
            "money_with_currency_format": "{{amount}} GTQ"
          },
          "GYD": {
            "money_format": "G${{amount}}",
            "money_with_currency_format": "${{amount}} GYD"
          },
          "GEL": {
            "money_format": "{{amount}} GEL",
            "money_with_currency_format": "{{amount}} GEL"
          },
          "HNL": {
            "money_format": "L {{amount}}",
            "money_with_currency_format": "L {{amount}} HNL"
          },
          "HKD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "HK${{amount}}"
          },
          "HUF": {
            "money_format": "{{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} Ft"
          },
          "ISK": {
            "money_format": "{{amount_no_decimals}} kr",
            "money_with_currency_format": "{{amount_no_decimals}} kr ISK"
          },
          "INR": {
            "money_format": "Rs. {{amount}}",
            "money_with_currency_format": "Rs. {{amount}}"
          },
          "IDR": {
            "money_format": "{{amount_with_comma_separator}}",
            "money_with_currency_format": "Rp {{amount_with_comma_separator}}"
          },
          "ILS": {
            "money_format": "{{amount}} NIS",
            "money_with_currency_format": "{{amount}} NIS"
          },
          "JMD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} JMD"
          },
          "JPY": {
            "money_format": "&#165;{{amount_no_decimals}}",
            "money_with_currency_format": "&#165;{{amount_no_decimals}} JPY"
          },
          "JEP": {
            "money_format": "&pound;{{amount}}",
            "money_with_currency_format": "&pound;{{amount}} JEP"
          },
          "JOD": {
            "money_format": "{{amount}} JD",
            "money_with_currency_format": "{{amount}} JOD"
          },
          "KZT": {
            "money_format": "{{amount}} KZT",
            "money_with_currency_format": "{{amount}} KZT"
          },
          "KES": {
            "money_format": "KSh{{amount}}",
            "money_with_currency_format": "KSh{{amount}}"
          },
          "KWD": {
            "money_format": "{{amount}} KD",
            "money_with_currency_format": "{{amount}} KWD"
          },
          "KGS": {
            "money_format": "Ð»Ð²{{amount}}",
            "money_with_currency_format": "Ð»Ð²{{amount}}"
          },
          "LVL": {
            "money_format": "Ls {{amount}}",
            "money_with_currency_format": "Ls {{amount}} LVL"
          },
          "LBP": {
            "money_format": "L&pound;{{amount}}",
            "money_with_currency_format": "L&pound;{{amount}} LBP"
          },
          "LTL": {
            "money_format": "{{amount}} Lt",
            "money_with_currency_format": "{{amount}} Lt"
          },
          "MGA": {
            "money_format": "Ar {{amount}}",
            "money_with_currency_format": "Ar {{amount}} MGA"
          },
          "MKD": {
            "money_format": "ден {{amount}}",
            "money_with_currency_format": "ден {{amount}} MKD"
          },
          "MOP": {
            "money_format": "MOP${{amount}}",
            "money_with_currency_format": "MOP${{amount}}"
          },
          "MVR": {
            "money_format": "Rf{{amount}}",
            "money_with_currency_format": "Rf{{amount}} MRf"
          },
          "MXN": {
            "money_format": "$ {{amount}}",
            "money_with_currency_format": "$ {{amount}} MXN"
          },
          "MYR": {
            "money_format": "RM{{amount}} MYR",
            "money_with_currency_format": "RM{{amount}} MYR"
          },
          "MUR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} MUR"
          },
          "MDL": {
            "money_format": "{{amount}} MDL",
            "money_with_currency_format": "{{amount}} MDL"
          },
          "MAD": {
            "money_format": "{{amount}} dh",
            "money_with_currency_format": "Dh {{amount}} MAD"
          },
          "MNT": {
            "money_format": "{{amount_no_decimals}} &#8366",
            "money_with_currency_format": "{{amount_no_decimals}} MNT"
          },
          "MZN": {
            "money_format": "{{amount}} Mt",
            "money_with_currency_format": "Mt {{amount}} MZN"
          },
          "NAD": {
            "money_format": "N${{amount}}",
            "money_with_currency_format": "N${{amount}} NAD"
          },
          "NPR": {
            "money_format": "Rs{{amount}}",
            "money_with_currency_format": "Rs{{amount}} NPR"
          },
          "ANG": {
            "money_format": "&fnof;{{amount}}",
            "money_with_currency_format": "{{amount}} NA&fnof;"
          },
          "NZD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} NZD"
          },
          "NIO": {
            "money_format": "C${{amount}}",
            "money_with_currency_format": "C${{amount}} NIO"
          },
          "NGN": {
            "money_format": "&#8358;{{amount}}",
            "money_with_currency_format": "&#8358;{{amount}} NGN"
          },
          "NOK": {
            "money_format": "kr {{amount_with_comma_separator}}",
            "money_with_currency_format": "kr {{amount_with_comma_separator}} NOK"
          },
          "OMR": {
            "money_format": "{{amount_with_comma_separator}} OMR",
            "money_with_currency_format": "{{amount_with_comma_separator}} OMR"
          },
          "PKR": {
            "money_format": "Rs.{{amount}}",
            "money_with_currency_format": "Rs.{{amount}} PKR"
          },
          "PGK": {
            "money_format": "K {{amount}}",
            "money_with_currency_format": "K {{amount}} PGK"
          },
          "PYG": {
            "money_format": "Gs. {{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
          },
          "PEN": {
            "money_format": "S/. {{amount}}",
            "money_with_currency_format": "S/. {{amount}} PEN"
          },
          "PHP": {
            "money_format": "&#8369;{{amount}}",
            "money_with_currency_format": "&#8369;{{amount}} PHP"
          },
          "PLN": {
            "money_format": "{{amount_with_comma_separator}} zl",
            "money_with_currency_format": "{{amount_with_comma_separator}} zl PLN"
          },
          "QAR": {
            "money_format": "QAR {{amount_with_comma_separator}}",
            "money_with_currency_format": "QAR {{amount_with_comma_separator}}"
          },
          "RON": {
            "money_format": "{{amount_with_comma_separator}} lei",
            "money_with_currency_format": "{{amount_with_comma_separator}} lei RON"
          },
          "RUB": {
            "money_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
            "money_with_currency_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
          },
          "RWF": {
            "money_format": "{{amount_no_decimals}} RF",
            "money_with_currency_format": "{{amount_no_decimals}} RWF"
          },
          "WST": {
            "money_format": "WS$ {{amount}}",
            "money_with_currency_format": "WS$ {{amount}} WST"
          },
          "SAR": {
            "money_format": "{{amount}} SR",
            "money_with_currency_format": "{{amount}} SAR"
          },
          "STD": {
            "money_format": "Db {{amount}}",
            "money_with_currency_format": "Db {{amount}} STD"
          },
          "RSD": {
            "money_format": "{{amount}} RSD",
            "money_with_currency_format": "{{amount}} RSD"
          },
          "SCR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} SCR"
          },
          "SGD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} SGD"
          },
          "SYP": {
            "money_format": "S&pound;{{amount}}",
            "money_with_currency_format": "S&pound;{{amount}} SYP"
          },
          "ZAR": {
            "money_format": "R {{amount}}",
            "money_with_currency_format": "R {{amount}} ZAR"
          },
          "KRW": {
            "money_format": "&#8361;{{amount_no_decimals}}",
            "money_with_currency_format": "&#8361;{{amount_no_decimals}} KRW"
          },
          "LKR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} LKR"
          },
          "SEK": {
            "money_format": "{{amount_no_decimals}} kr",
            "money_with_currency_format": "{{amount_no_decimals}} kr SEK"
          },
          "CHF": {
            "money_format": "{{amount}} CHF",
            "money_with_currency_format": "{{amount}} CHF"
          },
          "TWD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} TWD"
          },
          "THB": {
            "money_format": "{{amount}} &#xe3f;",
            "money_with_currency_format": "{{amount}} &#xe3f; THB"
          },
          "TZS": {
            "money_format": "{{amount}} TZS",
            "money_with_currency_format": "{{amount}} TZS"
          },
          "TTD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} TTD"
          },
          "TND": {
            "money_format": "{{amount}}",
            "money_with_currency_format": "{{amount}} DT"
          },
          "TRY": {
            "money_format": "{{amount}}TL",
            "money_with_currency_format": "{{amount}}TL"
          },
          "UGX": {
            "money_format": "Ush {{amount_no_decimals}}",
            "money_with_currency_format": "Ush {{amount_no_decimals}} UGX"
          },
          "UAH": {
            "money_format": "₴{{amount}}",
            "money_with_currency_format": "{{amount}} UAH"
          },
          "AED": {
            "money_format": "Dhs. {{amount}}",
            "money_with_currency_format": "Dhs. {{amount}} AED"
          },
          "UYU": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} UYU"
          },
          "VUV": {
            "money_format": "{{amount}} VT",
            "money_with_currency_format": "{{amount}} VT"
          },
          "VEF": {
            "money_format": "Bs. {{amount_with_comma_separator}}",
            "money_with_currency_format": "Bs. {{amount_with_comma_separator}} VEF"
          },
          "VND": {
            "money_format": "{{amount_no_decimals_with_comma_separator}}&#8363;",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} VND"
          },
          "XBT": {
            "money_format": "{{amount_no_decimals}} BTC",
            "money_with_currency_format": "{{amount_no_decimals}} BTC"
          },
          "XOF": {
            "money_format": "CFA{{amount}}",
            "money_with_currency_format": "CFA{{amount}} XOF"
          },
          "ZMW": {
            "money_format": "K{{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "ZMW{{amount_no_decimals_with_comma_separator}}"
          }
        };

    /**
     * Format money values based on your shop currency settings
     *
     * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
     * @param  {String} format - shop money_format setting
     * @return {String} value - formatted value
     */
  function formatMoney(cents, format) {
    
        if (typeof cents === 'string') {
          cents = cents.replace('.', '');
        }

        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || '${{amount}}';

        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultTo(precision, 2);
          thousands = defaultTo(thousands, ',');
          decimal = defaultTo(decimal, '.');

          if (isNaN(number) || number == null) {
            return 0;
          }

          number = (number / 100.0).toFixed(precision);

          var parts = number.split('.'),
              dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              centsAmount = parts[1] ? decimal + parts[1] : '';

          return dollarsAmount + centsAmount;
        }

        var value = '';

        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;
          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;
          case 'amount_with_space_separator':
            value = formatWithDelimiters(cents, 2, ' ', '.');
            break;
          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, ',', '.');
            break;
          case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;
          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        }
        if (remove_currency) {
          // remove '00'
          if (formatString.indexOf('with_comma_separator') !== -1) {
            return formatString.replace(placeholderRegex, value).replace(',00', '');
          } else {
            return formatString.replace(placeholderRegex, value).replace('.00', '');
          }
        } else {
          return formatString.replace(placeholderRegex, value);
        }
    
  };
  //var baseFormat = moneyFormats[cartCurrency][CurrencyConfigs.format] || '{{amount}}';
  function CurrencyConvertAll(oldCurrency, newCurrency, selector, format) {
      
      // console.log( $(`span.money:not([data-currency="${newCurrency}"])`) );
      
      // $( selector || 'span.money' ).each(function() {
      $( selector || `span.money:not([data-currencybee="${newCurrency}"])` ).each(function() {
        var $this = $(this);
        //console.log($this);
        
        // save shop curency 
        if (!$this.attr(dt_cur_shop)) {
            var getHtmlPrice = $this.html();
            $this.attr(dt_cur_shop, getHtmlPrice);
            $this.attr(dt_base, getHtmlPrice);
            // if (round_cur_shop) {
            //   var cents_base = Currency.convert(parseFloat(getHtmlPrice.replace(/^[^0-9]+|[^0-9.]/g, '', ''), 10) * 100, cartCurrency, cartCurrency);
            //   //console.log(cents_base);
            //   if (round_currency ) {
            //   cents_base = Math.round(cents_base / 100) * 100;
            //   //console.log('cents_base round:'+cents_base);
            //   }
            //   var newFormattedAmountBase = formatMoney(cents_base, baseFormat);
            //   $this.html(newFormattedAmountBase);
            //   $this.attr(dt_cur_shop, newFormattedAmountBase);
            //   getHtmlPrice = newFormattedAmountBase;
            // }
            if (hover_currency){ 
              $this.attr('title',getHtmlPrice);
            }
        }
        
          var baseAmount = $this.attr(dt_base);

          if (!baseAmount) return;

          // If we are converting to a currency that we have saved, we will use the saved amount.
          if ($this.attr('data-currencybee-'+newCurrency)) {
            $this.html($this.attr('data-currencybee-'+newCurrency));
          } else {
             var newFormat = moneyFormats[newCurrency][format || CurrencyConfigs.format] || '{{amount}}';

            // We have to normalize by replacing dot by comma and comma by dot
            if (t_moneyFormat.indexOf('with_comma_separator') !== -1) {
              baseAmount = baseAmount.replace(/[,.]/g, function (match) {
                // If `,` is matched return `.`, if `.` matched return `,`
                return match === ',' ? '.' : ',';
              });
            }

            // Converting to Y for the first time? Let's get to it!
            var cents = Currency.convert(parseFloat(baseAmount.replace(/^[^0-9]+|[^0-9.]/g, '', ''), 10) * 100, cartCurrency, newCurrency);
            //console.log(cents);
            if (round_currency) {
              cents = Math.round(cents / 100) * 100;
              //console.log('cents round:'+cents);
            }
            
            var newFormattedAmount = formatMoney(cents, newFormat);

            $this.html(newFormattedAmount);
            $this.attr('data-currencybee-'+newCurrency, newFormattedAmount);
          }

          // END JS

        // We record the new currency locally.
        $this.attr('data-currencybee', newCurrency);
        if (hover_currency && newCurrency !== cartCurrency){
           $this.attr('data-tooltip','top')
        } else { 
           $this.removeAttr('data-tooltip')
        }
      });

      
      $('.selected-currency').text(newCurrency);
      // update Checkout Currency Notification
      if (newCurrency == cartCurrency) {
        $('[data-currency-jsnotify]').hide();
      } else {
        $('[data-currency-jsnotify]').show();
      }

      // Cache newCurrency
      CurrencyConfigs.currentCurrency = newCurrency;
      if (isStorageSpdLocal) {localStorage.setItem('BECurrency', newCurrency)}
      
      if (hover_currency) { BEEThemeSP.Tooltip(); }
  };
  
  BEEThemeSP.CurrencyBee = (function() {
    // console.log('Currency',CurrencyConfigs)
    var oldCurrency,
        newCurrency,
        $currencyWrap,
        arrayCurrency ={AF:"AFN",AX:"EUR",AL:"ALL",DZ:"DZD",AS:"USD",AD:"EUR",AO:"AOA",AI:"XCD",AQ:"",AG:"XCD",AR:"ARS",AM:"AMD",AW:"AWG",AU:"AUD",AT:"EUR",AZ:"AZN",BS:"BSD",BH:"BHD",BD:"BDT",BB:"BBD",BY:"BYN",BE:"EUR",BZ:"BZD",BJ:"XOF",BM:"BMD",BT:"BTN",BO:"BOB",BA:"BAM",BW:"BWP",BV:"NOK",BR:"BRL",IO:"USD",BN:"BND",BG:"BGN",BF:"XOF",BI:"BIF",KH:"KHR",CM:"XAF",CA:"CAD",CV:"CVE",KY:"KYD",CF:"XAF",TD:"XAF",CL:"CLP",CN:"CNY",CX:"AUD",CC:"AUD",CO:"COP",KM:"KMF",CG:"XAF",CD:"CDF",CK:"NZD",CR:"CRC",CI:"XOF",HR:"HRK",CU:"CUP",CY:"EUR",CZ:"CZK",DK:"DKK",DJ:"DJF",DM:"XCD",DO:"DOP",EC:"USD",EG:"EGP",SV:"USD",GQ:"XAF",ER:"ERN",EE:"EUR",ET:"ETB",FK:"FKP",FO:"DKK",FJ:"FJD",FI:"EUR",FR:"EUR",GF:"EUR",PF:"XPF",TF:"EUR",GA:"XAF",GM:"GMD",GE:"GEL",DE:"EUR",GH:"GHS",GI:"GIP",GR:"EUR",GL:"DKK",GD:"XCD",GP:"EUR",GU:"USD",GT:"GTQ",GG:"GBP",GN:"GNF",GW:"XOF",GY:"GYD",HT:"HTG",HM:"AUD",VA:"EUR",HN:"HNL",HK:"HKD",HU:"HUF",IS:"ISK",IN:"INR",ID:"IDR",IR:"IRR",IQ:"IQD",IE:"EUR",IM:"GBP",IL:"ILS",IT:"EUR",JM:"JMD",JP:"JPY",JE:"GBP",JO:"JOD",KZ:"KZT",KE:"KES",KI:"AUD",KR:"KRW",KW:"KWD",KG:"KGS",LA:"LAK",LV:"EUR",LB:"LBP",LS:"LSL",LR:"LRD",LY:"LYD",LI:"CHF",LT:"EUR",LU:"EUR",MO:"MOP",MK:"MKD",MG:"MGA",MW:"MWK",MY:"MYR",MV:"MVR",ML:"XOF",MT:"EUR",MH:"USD",MQ:"EUR",MR:"MRU",MU:"MUR",YT:"EUR",MX:"MXN",FM:"USD",MD:"MDL",MC:"EUR",MN:"MNT",ME:"EUR",MS:"XCD",MA:"MAD",MZ:"MZN",MM:"MMK",NA:"NAD",NR:"AUD",NP:"NPR",NL:"EUR",AN:"",NC:"XPF",NZ:"NZD",NI:"NIO",NE:"XOF",NG:"NGN",NU:"NZD",NF:"AUD",MP:"USD",NO:"NOK",OM:"OMR",PK:"PKR",PW:"USD",PS:"ILS",PA:"PAB",PG:"PGK",PY:"PYG",PE:"PEN",PH:"PHP",PN:"NZD",PL:"PLN",PT:"EUR",PR:"USD",QA:"QAR",RE:"EUR",RO:"RON",RU:"RUB",RW:"RWF",BL:"EUR",SH:"SHP",KN:"XCD",LC:"XCD",MF:"EUR",PM:"EUR",VC:"XCD",WS:"WST",SM:"EUR",ST:"STN",SA:"SAR",SN:"XOF",RS:"RSD",SC:"SCR",SL:"SLL",SG:"SGD",SK:"EUR",SI:"EUR",SB:"SBD",SO:"SOS",ZA:"ZAR",GS:"GBP",ES:"EUR",LK:"LKR",SD:"SDG",SR:"SRD",SJ:"NOK",SZ:"SZL",SE:"SEK",CH:"CHF",SY:"SYP",TW:"TWD",TJ:"TJS",TZ:"TZS",TH:"THB",TL:"USD",TG:"XOF",TK:"NZD",TO:"TOP",TT:"TTD",TN:"TND",TR:"TRY",TM:"TMT",TC:"USD",TV:"AUD",UG:"UGX",UA:"UAH",AE:"AED",GB:"GBP",US:"USD",UM:"USD",UY:"UYU",UZ:"UZS",VU:"VUV",VE:"VEF",VN:"VND",VG:"USD",VI:"USD",WF:"XPF",EH:"MAD",YE:"YER",ZM:"ZMW",ZW:"ZWD"};;
    
    function initClickEvent() {
        $(`[data-currency-wrap]:not(.${classes.enabled})`).on("click","[data-currency-item]",function(e) {

          e.preventDefault();
          e.stopPropagation();

          // if ( $overlay.hasClass(strVisible) ) $overlay.addClass(strVisible);

          var $this = $(this);
          if ($this.hasClass(classes.selected)) return;
          
          newCurrency   = $this.attr('data-currency');
          $currencyWrap = $this.closest('[data-currency-wrap]');
          $currencyWrap.addClass(classes.enabled);
          oldCurrency   = $currencyWrap.find('.'+classes.selected).attr('data-currency') || cartCurrency;
          //console.log(oldCurrency, $this.closest('[data-currency-wrap]'))

          // $('[data-currency-wrap] [data-current]').text($this.text()).removeClass (function (index, className) {
          //   // var classFlag = className.match (/(^|\s)flagsbee-\S+/g) || [];
          //   // return (classFlag[1] || classFlag[0]);
          //   // console.log(classFlag[1] || classFlag[0])
          //   return (className.match (/(^|\s)flagsbee-\S+/g) || []).join(' ');
          // }).addClass('flagsbee-'+newCurrency);
          // console.log(oldCurrency)
          $('[data-currency-wrap] [data-current]').text( $this.text() ).removeClass('flagsbee-'+oldCurrency).addClass('flagsbee-'+newCurrency);
          
          $(`[data-currency-wrap] .${classes.selected}`).removeClass(classes.selected);
          $('[data-currency-wrap] [data-currency=' + newCurrency + ']').addClass(classes.selected);
          CurrencyConvertAll(cartCurrency, newCurrency);

          // $('[data-currency-wrap].mfp-content .close_pp').trigger('click');
          // https://stackoverflow.com/questions/6692031/check-if-event-is-triggered-by-a-human
          /// console.log(e,e.originalEvent ,e.originalEvent === undefined)

          if ($this.is('[data-drawer-close]')) $overlay.trigger('click');

          if (e.originalEvent === undefined || $this.closest('#shopify-section-mb_nav').length > 0 ) return;
          
          $body.trigger('dropdown:bee:close');

          // $('#ld_cl_bar').trigger( "ld_bar_star" );
          // setTimeout(function(){ $('#ld_cl_bar').trigger( "ld_bar_end" ) }, 250);

        });
    }

    function initTriggerEvent() {
         $body.on('currency:update', function () {

            // clearTimeout(CurrencyConfigs.myTimeout);
            // CurrencyConfigs.myTimeout = setTimeout(function() {
               // console.log( CurrencyConfigs.currentCurrency, CurrencyConfigs.currentCurrency == 'undefined');
               if ( CurrencyConfigs.currentCurrency == 'undefined' || CurrencyConfigs.currentCurrency == null || CurrencyConfigs.currentCurrency == 'null') return;
               CurrencyConvertAll(cartCurrency,CurrencyConfigs.currentCurrency);
            //}, 8);
            
         });
    }
    
   function initAddCurrencyNonExist() {
    // check if not exist data-currency added currency
    if (!CurrencyConfigs.locationBee) return;

    $('[data-currency-wrap]').each(function() {
      if ( $(this).find('[data-currency-item].flagsbee-'+CurrencyConfigs.locationBee).length <= 0 ) {
        $(this).find('[data-currency-item][data-currency-temp]').text(CurrencyConfigs.locationBee)
        .addClass('flagsbee-'+CurrencyConfigs.locationBee)
        .attr("data-currency", CurrencyConfigs.locationBee)
        .removeClass('bee-d-none');
      }
    });
      // console.log(CurrencyConfigs.currentCurrency || CurrencyConfigs.locationBee || cartCurrency)
      $(`[data-currency-wrap] [data-currency="${ CurrencyConfigs.currentCurrency || CurrencyConfigs.locationBee || cartCurrency }"]`).first().trigger('click'); 
   }

    function initActiveCurrencyCustomerPick() {
       if (CurrencyConfigs.currentCurrency && CurrencyConfigs.currentCurrency != cartCurrency ) {
        $(`[data-currency-wrap] [data-currency="${CurrencyConfigs.currentCurrency}"]`).first().trigger('click'); 
       }
    }

    function dataCurrencyUpdate(data) {

        var currencyCode = arrayCurrency[data.countryCode] || arrayCurrency[data.country] || data.currency || cartCurrency,
        currencyCode2    = currencyCode.handle || currencyCode;

        if (!CurrencyConfigs.locationBee) CurrencyConfigs.locationBee = currencyCode2;
        // check currency shopify support
        if ( moneyFormats[currencyCode] ) {
           // console.log(currencyCode)
           // if currency not exist then add curency
           initAddCurrencyNonExist();

        } 
        // else { 
        //    var c = CurrencyConfigs.currentCurrency || cartCurrency; 
        //    $('[data-currency-wrap] [data-currency="'+c+'"]').first().trigger('click'); 
        // }
    }

    function initActiveCurrencyLocation() {

      if( !BEEconfigs.auto_currency || navigator.userAgent.match(/bot|spider/i) ) {
        initActiveCurrencyCustomerPick();
        return;
      }

      var nt_currency = (isStorageSpdLocal) ? localStorage.getItem('nt_currency') : null;
      if (nt_currency) {
        dataCurrencyUpdate(JSON.parse(nt_currency));
      } else {
        // https://ipinfo.io/developers/full-country-names
        // https://ipinfo.io/developers/filtering-bot-traffic  
        // https://d1hcrjcdtouu7e.cloudfront.net/users/countryDetection 
        var params = {
           type: 'get',
           url: 'https://ipinfo.io/json',
           dataType: "json",
           success: function (data) {
              dataCurrencyUpdate(data);
              if (isStorageSpdLocal) { localStorage.setItem('nt_currency', JSON.stringify(data)) }
           }
        };            
        $.ajax({
           type: 'get',
           url: 'https://extreme-ip-lookup.com/json/?key=demo2',
           dataType: "json",
           success: function (data) {
              if (data.status == "success") {
                dataCurrencyUpdate(data);
                if (isStorageSpdLocal) { localStorage.setItem('nt_currency', JSON.stringify(data)) }
              } else {
                $.ajax(params)
              }
           },
           error: function (XMLHttpRequest, textStatus) {
              $.ajax(params)
           }
        });
      }

    }

    function initCurrencyFirstTime() {
        // $("[data-currency-wrap] [data-currency-item]").each(function (index) { 
        //   var $this = $(this),
        //       data_c = $this.attr('data-currency');
        //       if ( moneyFormats[data_c] == undefined && data_c != 'BED' ) {
        //         // $this.closest('li').remove();
        //         $this.closest('li').hide();
        //       }
        // });

        // if ($('[data-currency-wrap] [data-currency-item].flagsbee-'+cartCurrency).length <= 0 ) {
        //    $('[data-currency-wrap] [data-currency-item].flagsbee-BEV').text(cartCurrency).addClass('flagsbee-'+cartCurrency).attr("data-currency", cartCurrency).removeClass('flagsbee-BEV bee-dn');
        // }
    }

    function initCurrencyLazy() {
      initClickEvent();
      $(`#bee-menu-drawer [data-currency-wrap] [data-currency="${CurrencyConfigs.currentCurrency}"]`).first().trigger('click');
      $('#bee-menu-drawer').one('lazyincluded', function(e) {
        //console.log($('#nt_menu_canvas .currencies'));
        initAddCurrencyNonExist();
        // console.log(CurrencyConfigs.currentCurrency);
        initClickEvent();
        $(`#bee-menu-drawer [data-currency-wrap] [data-currency="${CurrencyConfigs.currentCurrency}"]`).first().trigger('click');
       });
    }

    function init() {

        initCurrencyFirstTime();
        initCurrencyLazy();
        initClickEvent();
        initTriggerEvent();

        initActiveCurrencyLocation();
    }

    return init;

  })();

})( jQuery_BENT );

jQuery_BENT(document).ready(function($) {

  $script('https://cdn.shopify.com/s/javascripts/currencies.js', function() {
    BEEThemeSP.CurrencyBee();
  });
});