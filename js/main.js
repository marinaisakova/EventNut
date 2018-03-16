$(window).resize(function(){
	eventsHeight();
	initGallery();
	heightPopupSettings();
	initBadge();
});
$(window).load(function(){
	// $('#gag').fadeOut(1000);
})
var heightPopup = 0;
$(document).ready(initPage);
function initPage(){
	initBadge();
	initLogo();
	eventsHeight();
	initDropDowns();
	initTicketsMessage();
	$('a.popup-opener').initPopup();
	initSwatchesTheme();
	initSwatchesTemplate();
	initMainPopups();
	$('.btn-popup').initPopup();
	$('.btn-popup-settings').initPopupSettings();
	initModePreview();
	initTab();
	initGlobalPopup();
	initGallery();
	initSocialLink();
	initThemeSelector();
	initSkipLink();
	initAnimationEl();
	initRegisterForm();
	initSlider();
	initCoverPrint();
	initEditImagePanel();
}

function initEditImagePanel() {
	var panel = "#popup-image-editor";
	$(".btn-popup").click( function (e) {
		if ($(this).attr('data-popup') == "popup-template") {
			$(panel).removeClass(' popup-open');
		}
	});
	$(".btn-close-popup").click( function (e) {
		$(panel).removeClass(' popup-open');
	});
}

function initCoverPrint() {
	$('.badge-cover-holder').each(function(){
		
	})
}
function initSlider() {
	$('.slider-el').each(function(){
		$(this).kendoSlider({
			showButtons: false,
			tickPlacement: "none",
			min: 0,
			max: 50,
			smallStep: 1,
			largeStep: 10
	
		});
	})
}
function initMainPopups() {
	initMainPopup("#popupRegister", "register-popup", "721px", "Sign in", "open");
	initMainPopup("#popupSendTicket", "", "280px", "Send tickets via e-mail", "#sendTicketBtn");
	initMainPopup("#popupAttendeeDetails", "attendee-details-popup", "382px", "Attendee details", "#attendeeDetailsBtn");
	initMainPopup("#popupSMSNotice", "", "280px", "SMS notification on attendee check in", "#smsNoticedBtn");
	initMainPopup("#popupAddVariable", "", "280px", "New variable", "#addVariableBtn");
	initMainPopup("#popupAddRegistrationField", "", "280px", "Add registration field", "#addRegistrationFieldBtn");
	initMainPopup("#popupCustomeAddress", "", "280px", "Add custome address", "#customeAddressBtn");
	//initMainPopup("#popupEditCover", "", "100%", false, "#editCoverBtn");
	initMainPopup("#popupSMSNotice", "280px", "", "SMS notification on attendee check in", "#smsNoticedBtn");
	initMainPopup("#popupAddTicket", "popup-add-ticket", "100%", false, "#addTicketBtn");
	initMainPopup("#popupAddTicketSupport", "add-ticket-support-popup", "500px", "Add tickets", "#addTicketSupportBtn");
}
function initMainPopup($popupID, $popupName, $popupWidth, $popupTitle, $btnName) {
	if (!$($popupID).length)
		return;
	var popup = $($popupID).kendoWindow({ width: $popupWidth, title: $popupTitle, modal: true, visible: false }).data("kendoWindow");
	popup.wrapper.addClass("popup " + $popupName);
	popup.center();
	if ($btnName == "open") popup.open().center();
	else $($btnName).click(function () { popup.open().center(); });
	$(".btn-close-popup").click( function (e) {
		$($popupID).data("kendoWindow").close();
	});
}
function initAnimationEl() {
	$(window).scroll(function() {
		$('.animatedElement').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animate");
			}
		});
	});
}
function initSkipLink() {
	$('.skip-link').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 50
		}, 700);
	});
}
function initRegisterForm() {
	$('#register-switcher').change(function() {
		if($('#register-switcher').is(':checked')){
			$("#register").show();
			$("#signin").hide();
		} else {
			$("#register").hide();
			$("#signin").show();
		}
	}).change();
}
function initThemeSelector() {
	$("input[name='app-skin-toggle']").click(function(){
		if($('input:checked').val() == "skin-light"){
			$('link[href="../Content/css/themes/theme-dark.css"]').attr('href','../Content/css/themes/theme-light.css');
		}
		else {
			$('link[href="../Content/css/themes/theme-light.css"]').attr('href','../Content/css/themes/theme-dark.css');
		}
	});
}
function initLogo() {
	//initSVG("#logo a");
	//initSVG(".logo-checkbox");
}
function initSVG(parentName) {
	$(parentName).load('svg/eventnut-logo.svg',function(response){
		if(response){
			$(this).addClass("svg");
		}
	});
}
function initGallery(c) {
	var ctx = (typeof(c) == 'undefined') ? document : c;
	$('.template-selector', jQuery(ctx)).each(function(i, el){
		var $this = $(this);

		$this.touchSlider({
			holder: 'div.wrapp',
			box: 'div.frame',
			'loader': {
				'static': {'item': '.item'}
			},
			mapper: 'content',
			renderer: /android/i.test(navigator.userAgent.toLowerCase()) ? 'jquery' : ['css', 'jquery'],
			helpers: [
				{
					'control': {
						link: true,
						element: 'div.control'
					}
				},
				'prev-next'
			]
		});
	});
	$('.overview-holder', jQuery(ctx)).each(function(i, el){
		var $this = $(this);

		$this.touchSlider({
			holder: 'div.wrapp',
			box: 'div.frame',
			'loader': {
				'static': {'item': '.item'}
			},
			mapper: 'single',
			renderer: /android/i.test(navigator.userAgent.toLowerCase()) ? 'jquery' : ['css', 'jquery'],
			helpers: [
				{
					'control': {
						link: true,
						element: 'div.control'
					}
				},
				'prev-next'
			]
		});
	});
}

function initModePreview() {
	$("#btn-preview").click(function() {
		$('.event-creator').addClass(' mode-preview');
	});
	$("#btn-edit").click(function() {
		$('.event-creator').removeClass(' mode-preview');
	});
}
$.fn.removeClassRegex = function(regex) {
	return $(this).removeClass(function(index, classes) {
		return classes.split(/\s+/).filter(function(c) {
			return regex.test(c);
		}).join(' ');
	});
};
function initSwatchesTemplate() {
	var items = $('.templates li');
	$('.templates li').each(function(){
		$(this).click(function() {
			items.each(function() {
				$(this).removeClass('active');
			})
			$('body').removeClassRegex(/^template-/);
			$('body').addClass('template-' + $(this).attr('class'));
			$(this).addClass('active');
			
			return false;
		});
	});
}
function initSwatchesTheme() {
	var items = $('.themes li');
	$('.themes li').each(function(){
		$(this).click(function() {
			items.each(function() {
				$(this).removeClass('active');
			})
			$('body').removeClassRegex(/^theme-/);
			$('body').addClass('theme-' + $(this).attr('class').slice(6, $(this).attr('class').length));
			$(this).addClass('active');
			
			return false;
		});
	});
}
function initDropDowns() {
	$(".select-box select").kendoComboBox();
}
function eventsHeight() {
	initEqHeight('.event-list', '.event-title');
}
function initEqHeight(_parentBox, _boxEqHeight) {
	$(_parentBox).each(function(){
		initRowHeight($(this).find(_boxEqHeight));
	});
}
function initRowHeight(box) {
	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
	$(box).each(function(){
		$el = $(this);
		$el.height('auto');
		topPostion = $el.offset().top;
		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv< rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest< $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv< rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}
function initTicketsMessage() {
	var classDelete = 'ticket-delete';
	var classVisibility = 'ticket-hidden';
	$("#open-tickets").click(function() {
		//$('.event-editor').addClass('tickets-extended');
	});
	$('.ticket-item').each(function(){
		$(this).find('.ico-delete').each(function() {
			$(this).click(function() {
				$(this).parents('.ticket-item').addClass(classDelete);
				return false;
			});
		})
		$(this).find('.ico-visibility').each(function() {
			$(this).click(function() {
				if ($(this).parents('.ticket-item').hasClass(classVisibility)) {
					$(this).parents('.ticket-item').removeClass(classVisibility);
				}
				else $(this).parents('.ticket-item').addClass(classVisibility);
				return false;
			});
		})
		$(this).find('.undo-delete').each(function() {
			$(this).click(function() {
				$(this).parents('.ticket-item').removeClass(classDelete);
				return false;
			});
		})
	});
}
function initSocialLink() {
	$('.social-links').find('.btn-close').each(function() {
		$(this).click(function() {
			id = $(this).attr('data-popup');
			$('#' + id).prop( "checked", false );
		});
	})
}
function heightPopupSettings() {
	$('div.popup-settings-holder').each(function(){
		if ($(this).css( "position" ) == "fixed") {
			$(this).find($(".popup-settings-inner")).eq(0).css("height", $(window).height()-40);
		} else {
			$(this).find($(".popup-settings-inner")).eq(0).css("height", heightPopup);
		}
	});
}
(function($) {
	$.fn.reverse = [].reverse;
	
	$.fn.initPopupSettings = function(options){
		$('div.popup-settings-holder').each(function(){
			heightPopup = $(this).height();
		});
		this.each(function() {
			var id = '';
			$(this).click(function() {
				id = $(this).attr('data-popup');
				if ($('#' + id).css( "position" ) == "fixed") {$('#' + id).find($(".popup-settings-inner")).eq(0).css("height", $(window).height()-40);}
				$('#' + id).addClass('popup-open');
				return false;
			});
			$('.btn-close').click(function () {
				$('#' + id).removeClass('popup-open');
				return false;
			});
		});
		return this;
	};
})(jQuery);
(function($) {
	
	$.fn.reverse = [].reverse;
	$.fn.initPopup = function(options){
		this.each(function() {
			$(this).click(function() {
				var id = $(this).attr('data-popup');
				
				if ($('#' + id).is('.popup-open')) {
					$('#' + id).removeClass(' popup-open');
					if ($(this).parent().prop("tagName") == "LI") $(this).parent().removeClass(' active');
				}
				else {
					$('#' + id).addClass(' popup-open');
					if ($(this).parent().prop("tagName") == "LI") $(this).parent().addClass(' active');
				}
				return false;
			});
			
		});
		return this;
	};
})(jQuery);
function initBadge() {
	$("#fittext1").fitText(1, { minFontSize: '10px', maxFontSize: '54px' });
	
}
function initTab() {
	$('div.tabs-holder').each(function(){
		$(this).mtTabs({
			item: '> dl.tabs-nav label.tab-link'
		});
	});
}
(function($) {

	$.fn.mtTabs = function(options){

		var options = $.extend({
			item: 'label',
			activeTabClass: 'active',
			onStart: null,
			onChange: null
		}, options);

		var $this = $(this);
		this.each(function() {
			var $this = $(this);
			var items = $(options.item, $this);
			if (!items.length) return;
			
			items.bind('click', function () {
				showTab($(this));
				return false;
			});
			if ($.isFunction(options.onStart)) options.onStart();

			$(this).find('.tab-link').each(function() {
				if($(this).prevAll('input').attr("checked")) $(this).click();
			})
			function showTab(link) {
				var tab = "#tab-" + link.attr('for');
				items.each(function() {
					if (link.attr('for') == $(this).attr('for')) {
						$(this).prevAll('input').prop( "checked", true );
					} 
					$("#tab-" + $(this).attr('for')).hide();
				});
				jQuery(tab).show();
				if ($.isFunction(options.onChange)) options.onChange(tab);
			}
		});
		return this;
	}
})(jQuery);
function _get_viewport() {
	return [
		$(window).height(),
		$(document).scrollTop()
	];
}

function _center() {
	var view = _get_viewport();
	$('div.popup').stop().animate({
		'top' : parseInt(Math.max(view[1], view[1] + ((view[0] - $('div.popup').height()) * 0.5)))
	}, 50);
}

function initGlobalPopup() {
	var classOpenPopup = "popup-open";
	$('a[data-popup]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('data-popup');
		var maskHeight = $(document).height();
		$('.fader').css({'height':maskHeight});
		$('.fader').show();
		if( screen.width <= 760 ) { 
			$('.popup').css({
				'top': $(document).scrollTop() + 50
			});
		} else _center();
		$('#' + id).show();
		$('body').addClass(classOpenPopup);
	});
	$('.popup-close').click(function (e) {
		e.preventDefault();
		$('.fader').hide();
		$('.popup').hide();
		$('body').removeClass(classOpenPopup);
	});
	$('.fader').click(function () {
		$(this).hide();
		$('.popup').hide();
		$('body').removeClass(classOpenPopup);
	});
}

function positionPopup(){
	if($('.popup').height() < $(window).height()){
		$('.popup').css({
			'marginTop': (($(window).height())-($('.popup').height()))/2,
			'top': 0
		});
	}
	else{
		$('.popup').css({
			'marginTop': 0,
			'top': 0
		});
	}
}

(function( $ ){
	$.fn.fitText = function( kompressor, options ) {

	// Setup options
	var compressor = kompressor || 1,
		settings = $.extend({
			'minFontSize' : Number.NEGATIVE_INFINITY,
			'maxFontSize' : Number.POSITIVE_INFINITY
		}, options);

	return this.each(function(){

	// Store the object
	var $this = $(this);

	// Resizer() resizes items based on the object width divided by the compressor * 10
	var resizer = function () {
		$this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
		$this.parent().css({'height':$this.width()*.75+'px'});
	};

	// Call once to set.
	resizer();

	});

};

})( jQuery );