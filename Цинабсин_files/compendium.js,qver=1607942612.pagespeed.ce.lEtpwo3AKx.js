window.location.param = function(n) {
	var v = this.search.split(new RegExp('\\b' + n + '='))[1];
	return v !== undefined ? decodeURIComponent(v.split('&')[0]) : '';
};

var dev = location.hostname != 'compendium.com.ua';

jQuery(function() {
	if(navigator.userAgent.match(/MSIE|Trident/gi))
		jQuery('body').addClass('IE');
});

jQuery(function() {
	jQuery('img[data-src]').each(function (i, e) { e = jQuery(e); e.attr('src', e.attr('data-src')); });
});

jQuery(function() {
	var t = jQuery('.tags [data-toggle="collapse"]');
	if(t.length == 1)
		t.click();
});

jQuery(function() {
	setTimeout(function() {
		jQuery('.banner iframe,.banner img[loading="lazy"]').each(function (i, e) {
			i = 'banner' + i;
			e = jQuery(e).parents('div').eq(0);
			e.addClass('collapse show').attr('id', i);
			if(e.css('position') == 'static')
				e.addClass('position-relative');
			jQuery('<a data-toggle="collapse" href="#' + i + '" role="button" aria-expanded="true">&times;</a>').appendTo(e);
		});
	}, 3000);
});

jQuery(function() {
	if(jQuery('#toc-a').length)
		jQuery('.toc .analogs').removeClass("d-none");

	if(jQuery('#toc-d').length)
		jQuery('.toc .diagnoses').removeClass("d-none");

	if(jQuery('#toc-t').length)
		jQuery('.toc .brands').removeClass("d-none");

	if(jQuery("#lst .branch:not(.text-center)").length > 1) {
		jQuery(".header .nav-tabs").removeClass("d-sm-none").find("li:first-child").removeClass("d-none");
		jQuery('[href="#inf"],[href="#map"],[href="#phr"]').addClass("d-none");
		jQuery('[href="#lst"]').click();
	}
});

jQuery(function() {
	jQuery("#search").parents("form").on("submit", function(e) {
		e.preventDefault();
		jQuery("#hints").removeClass('show');
		var term = jQuery("#search").val();
		if(!hints.includes(term)) term = hints[0];
		jQuery.post(
			ajaxurl,
			{
				'action': 'search',
				'lang': getLang(),
				'term': term
			},
			function(response) {
				if(response) {
					dataLayer.push({event: 'SearchDrug', term: term, response: response});
					location.href = response;
				} else {
					jQuery("main").html('<div class="alert alert-danger indent-top">' + msgNotFound + '</div>');
				}
			},
			'text'
		);
	});

	var searchDelay;
	jQuery("#search").keyup(function (event) {
		if(event.target.value.length < 3 ) return;
		if(searchDelay) clearTimeout(searchDelay);
		searchDelay = setTimeout(function () {
			jQuery.post(ajaxurl, {
				action: 'hint',
				lang: getLang(),
				term: event.target.value
			}, function (data) {
// 				console.log(data);
				if(!data.length) return;
				hints = data;
				var list = jQuery("#hints");
				list.html('');
				for(var i = 0; i < data.length; i++) {
					var term = data[i];
					jQuery('<a class="dropdown-item" href="#">' + data[i].replace(new RegExp('(' + event.target.value + ')', 'i'), '<b class="text-primary">$1</b>') + '</a>').click(function (event) {
						event.preventDefault();
						jQuery("#search").val(event.target.textContent);
						jQuery("#search").parents("form").submit();
					}).appendTo(list);
				}
				list.addClass('show');
			}, 'json');
		}, 500);
	});

	jQuery("#search").on("focus", function(e) {
		e = jQuery(e.delegateTarget);
		e.select();
		e = this;
		setTimeout(function() {
			e.setSelectionRange(0, 9999);
		}, 1);
	});
});

jQuery(function() {
	if(location.param('print')) {
		jQuery('#inf a').attr('target', '_blank');
	} else {
	drugs = location.param('drugs');
	term = jQuery(".composition .btn-danger").length ? location.param('term') : '';
	if(drugs)
		jQuery('aside .banner').detach().insertAfter('#phr');
	var buy = jQuery(".composition [data-drugs]").each(function(i, e) {
		e = jQuery(e);
		var d = e.attr('data-drugs');
		drugs += ',' + d;
	});
	jQuery(".buybtn").on("click", doBuy);
	drugs = drugs.replace(/^,/, '');

	prices = (document.referrer.split("/")[3] == "prices");
	if(drugs.length && !jQuery('main').hasClass('archive')) {
		jQuery.ajax('https://' + (dev ? 'dev-' : '') + 'apic.morion.ua/get-drug-prop', {
			method: 'POST',
// 			data: JSON.stringify(drugs),
			data: '[' + drugs + ']',
			dataType: 'json'
		}).done(function (a) {
// 			console.log(a);
			if( a.length != 0 )
				buy.each(function(i, e) {
					e = jQuery(e);
					var d = e.attr('data-drugs').split(",");
					var btn = e.find("a");
					if(term) {
						if(btn.hasClass('btn-danger'))
							sel_drugs = d.join();
					} else {
						if(d.indexOf(a[0].toString()) != -1)
							btn.removeClass('btn-outline-danger').addClass('btn-danger');
					}
					for(var i = 0; i < d.length; i++)
						if(a.indexOf(parseInt(d[i])) != -1) {
							btn.removeClass("d-none");
							break;
						}
				});
		});
		if(location.param('term') == '')
		{
			jQuery('[href="#phr"],[href="#map"]').one('click', function () {doMap();});
			if(window.innerWidth < 768)
				jQuery('[href="#phr"]').on('click', function () {
					jQuery('html, body').animate({
						scrollTop: 0
					}, 500);
				});
			var e = jQuery('<div id="map" class="tab-pane row" role="tabpanel"></div><div id="phr" class="tab-pane row" role="tabpanel"></div>');
			if(window.innerWidth < 768) {
				e.appendTo('.tab-content');
			} else {
				jQuery('aside .map').after(e);
				setTimeout(function () {
					jQuery('aside [href="#phr"]:not([aria-selected="true"])').click();
				}, 5000);
			}

			if(prices)
				jQuery('[href="#phr"]')[0].click();

			if(jQuery('.header .nav-tabs').css('display') == "none")
				jQuery(document).on('scroll', function() {
					if(jQuery(window).scrollTop() > jQuery('#map').offset().top)
						jQuery('aside .selected-drug').detach().insertAfter('#map');
					else
						jQuery('aside .selected-drug').detach().insertBefore('#map');
				});
		}
	}
	}

	var c = jQuery(".owl-carousel");
	if(c.length)
		c.owlCarousel({
			autoplay:true,
			autoplaySpeed:1000,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			dots:true,
			dotsEach:true,
			loop:true,
			margin:10,
			nav:true,
			navText:['<i class="fa fa-chevron-left"><img src="/wp/wp-content/themes/compendium/img/fa/chevron-left-solid.svg" alt=""></i>', '<i class="fa fa-chevron-right"><img src="/wp/wp-content/themes/compendium/img/fa/chevron-right-solid.svg" alt=""></i>'],
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				1000:{
					items:3,
				}
			}
		});

	jQuery("#box .carousel-inner").on("click", function(e) {
		e = jQuery(e.delegateTarget);
		e.toggleClass("enlarged");
	});

	jQuery(".single #lst .collapse").eq(0).addClass("show");
	jQuery("#typeatc").addClass("show");
	if(jQuery("#typeinf .branch").length < 2)
		jQuery("#typeinf").remove();
	jQuery(".single #lst ul").each(function(i, e) {
		e = jQuery(e);
		e.prev("h2").find("span").html(e.find(".branch:not(.text-center)").length);
	});
	jQuery(".owl-carousel .image").on("click", function(e) {
		e = jQuery(e.delegateTarget).parents(".owl-carousel");
		e.toggleClass("enlarged");
	});

	var a = jQuery(".alphabet");
	if(a.length) {
		var b = a.find(".active");
		if(b.length)
			a.scrollTop(b.offset().top - a.offset().top);
	}

	jQuery('[data-toggle="popover"]').click(function (e) {
		e.preventDefault();
	}).popover();
});

jQuery(function() {
	jQuery('body').on('DOMSubtreeModified', '#qnt', function (e) {
		if(parseInt(jQuery(e.target).text()) > 0)
			jQuery('#crt').removeClass('d-none');
		else
			jQuery('#crt').addClass('d-none');
	});
	n = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')).length : 0;
	jQuery('#qnt').text(n);
});

jQuery(function() {
	var o = jQuery('section[data-type="Інструкція МОЗ: "],section[data-type="Инструкция МЗ: "],section[data-type="Перевод инструкции МОЗ: "]');
	if(o.length)
		o.removeClass('show').html(o.html().replace(/<!--|-->/g,'').replace(/\n\n/g,'</p><p>'));
	if(jQuery('section.collapse').filter('[id!="diags"]').length < 3)
		jQuery('section.collapse').filter('[id!="diags"]').addClass('show');
});

jQuery(function() {
	jQuery(".tree .branch>a").on("click", doTree).each(doExpand);
});

jQuery(function() {
	var p = jQuery('#prices');
	if(p.length)
		p.load(ajaxurl + '?action=prices&id=' + p.attr('data-id') + '&lang=' + p.attr('data-lang'));
});

jQuery(function() {
	var c = jQuery('.analog-content');
	if(c.length) {
		c.addClass('collapse');
		c.eq(Math.floor(Math.random() * c.length)).removeClass('collapse');
	}
});

jQuery(function() {
	jQuery('#dials [data-term]').on('click', function (e) {
		e.preventDefault();
		var id = jQuery(e.currentTarget).attr('data-term');
		jQuery('#dials [data-terms]').addClass('d-none').each(function (i, e) {
			e = jQuery(e);
			if(e.attr('data-terms').split(',').indexOf(id) != -1)
				e.removeClass('d-none');
		});
	});
});

jQuery(function() {
	var e = jQuery('#inns');
	if(e.length && window.innerWidth > 768)
		jQuery('<div class="card mb-3 inns"></div>').append('<div class="card-header"><h2 class="card-title m-0 text-uppercase">' + jQuery('[href="#inns"]').parent().detach().text() + '</h2></div>').append(e.detach().addClass('card-body mh-33').removeClass('collapse')).prependTo('aside .sticky-top');
});

jQuery(function() {
	var e = jQuery('#toc');
	if(e.length && window.innerWidth > 768)
		jQuery('<div class="card mb-3 sticky-top toc"></div>').append('<div class="card-header"><h2 class="card-title m-0 text-uppercase">' + jQuery('[href="#toc"]').parent().detach().text() + '</h2></div>').append(e.detach().addClass('card-body mh-33').removeClass('collapse')).prependTo('aside .sticky-top');
});

jQuery(function() {
	jQuery('body #cart').on('click', function() {
		if(!jQuery('#geoapt-modal-wrapper, .offers-wrapper').hasClass('visible')) {
			jQuery('body').removeClass('modal-hidden');
		} else {
			jQuery('body').addClass('modal-hidden');
		}
	});
});

jQuery(function() {
	if(!getCookie('cookies_approved'))
		jQuery('.cookies.alert.d-none').removeClass('d-none');
});

jQuery(function() {
	jQuery('.moz:not(.loaded)').each(function (i, e) {
		e = jQuery(e);
		e.one('click', function () {
			jQuery.getJSON(location.origin + '/wp-json/wp/v2/moz/' + e.attr('href').replace(/[^\d]+/, '') + '/?_fields=content', function (data) {
				console.log(data);
				jQuery(e.attr('href')).html(data.content.rendered);
			});
		});
	});
});

function clickPrice(e) {
	jQuery('.comp-wgt-drug .text-info b').removeClass('active');
	jQuery('.comp-wgt-drug .text-info.pointer').removeClass('active');
	jQuery(e).addClass('active');
	if (jQuery("#map").attr('style') || !jQuery("#map").children().length) {
		jQuery('a.nav-link[href="#map"]').click();
	}
}

function clickShop(e) {
	jQuery('.comp-wgt-drug .text-info b').removeClass('active');
	jQuery('.comp-wgt-drug .text-info.pointer').removeClass('active');
	jQuery(e).addClass('active');
	if (jQuery("#map").attr('style') || !jQuery("#map").children().length) {
		jQuery('a.nav-link[href="#map"]').click();
	}
}

function doMap(buy) {
	if(typeof Vue == 'undefined') {
		loadScript('/wp/wp-content/themes/compendium/js/map/dist/map.js', function () {
			if(buy)
				jQuery('[href="#phr"]')[window.outerWidth<768 ? 0 : 1].click();
		});
	} else {
		if(buy)
			jQuery('[href="#phr"]')[window.outerWidth<768 ? 0 : 1].click();
	}
}

function doTree(e) {
	e.preventDefault();
	e = jQuery(e.delegateTarget);
	if(e.attr("data-loaded") == "true")
		e.parent().find("ul").toggleClass("d-none");
	else {
		jQuery.get("?id=" + e.attr("data-id"), function(d) {
			d = jQuery(d);
			d.find(".branch>a").on("click", doTree).each(doExpand);
			d.appendTo(e.attr("data-loaded", true).parent());
		});
	}
}

function doExpand(i, e) {
	e = jQuery(e);
	if(e.attr("data-loaded") != "true" && location.hash.search(e.attr("href").replace(/\*/g, "")) == 0) {
		location.href = location.hash;
		e.click();
	}
}

function doBuy(e) {
	e.preventDefault();
	jQuery("[data-drugs] .btn-danger").removeClass('btn-danger').addClass('btn-outline-danger');
	sel_drugs = jQuery(e.target).removeClass('btn-outline-danger').addClass('btn-danger').parents('[data-drugs]').attr('data-drugs');
	doMap(true);
}

function getLang() {
	return jQuery('span.lang').hasClass('ua') ? 'ua' : 'ru';
}

function chLang(lang) {
	if(lang == 'ua')
		href = location.href.replace('.ua/', '.ua/uk/');
	else
		href = location.href.replace('.ua/uk/', '.ua/');
	if(location.href != href)
		location.href = href;
	else
		location.reload();
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + location.host;
}

function getCookie(cname) {
	var name = cname + "=";
	var cookies = decodeURIComponent(document.cookie);
	var cookies = cookies.split(';');
	for(var i = 0; i < cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function approveCookies() {
	setCookie('cookies_approved', 1, 365);
	jQuery('.cookies.alert').addClass('d-none');
}
/**
 * https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
 */
function toClipboard(d) {
	var e = document.createElement('textarea');
	e.value = d;
	e.setAttribute('readonly', '');
	e.style.position = 'absolute';
	e.style.left = '-9999px';
	document.body.appendChild(e);
	var s = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
	e.select();
	document.execCommand('copy');
	document.body.removeChild(e);
	if(s) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(s);
	}
}

function loadScript(url, func, type, noModule) {
	var s = document.createElement('script');
	s.src = url;
	if (type) {
		s.type = type;
	}
	if (noModule) {
		s.noModule = true;
	}
	if(func)
		s.onload = func;
	document.body.appendChild(s);
}

function loadCSS(url) {
	var l = document.createElement('link');
	l.href = url;
	l.type = 'text/css';
	l.rel = 'stylesheet';
	l.media = 'screen,print';
	document.getElementsByTagName('head')[0].appendChild(l);
}

function collapseToggle(elem) {
	var data = document.querySelector(elem.getAttribute('data-modal'));
	if(data) {
		data.classList.toggle('show');
	}
}

//anokhina
if(location.param('frame') == '1') {
	document.getElementsByClassName('header')[0].style.display='none';
	document.getElementsByClassName('footer')[0].style.display='none';
}

jQuery(function() {
	jQuery('#promo').parents('form').submit(function (e) {
		e.preventDefault();
		getSession(jQuery('#promo').val(), 'servier');
	});
	var p = jQuery('[href="#promo"]');
	p.click(function (e) {
		e.preventDefault();
		p.toggleClass('text-white').toggleClass('text-danger');
		jQuery('#search,#promo').parents('form').toggleClass('d-none');
	});
	jQuery('#askPromo').submit(function (e) {
		e.preventDefault();
		askPromo();
	});
	jQuery('[data-target="#askPromo"]').one('click', getSpecs);
	if(location.param('promo')) {
		p.click();
	}
});

jQuery(function() {
	var home_url = ajaxurl.replace(/(\.ua)\/.+$/, '$1');
	if(location.origin == home_url) return;
	var promo = location.param('promo');
	if(promo) {
		promo = JSON.stringify({app:location.host.replace(/\..+$/, ''),code:promo});
// 		setCookie('promo', promo, 365);
// 		location.href = location.origin;
	} else {
		promo = getCookie('promo');
	}
	if(promo) {
		promo = JSON.parse(promo);
		getSession(promo.code, promo.app);
	} else {
		location.href = home_url + '?promo=1';
	}
});

function crm(method, data) {
	return jQuery.post('https://suitecrm.morion.ua/service/v4_1/rest.php', {
		"method": method,
		"input_type": "JSON",
		"response_type": "JSON",
		"rest_data": JSON.stringify(data)
	}, 'json');
}

function askPromo() {
	crm("request_promo", {
		"app_id": "compendium",
		"phone": jQuery('#phone').val(),
		"email": jQuery('#email').val(),
		"specialization": jQuery('#spec').val()
	}).done(function(d) {
		console.log(d);
		if(d.success) {
			jQuery('#promo').val('Запрос отправлен');
			jQuery('#askPromo').modal('hide');
			jQuery('[data-target="#askPromo"]').parents('.input-group-prepend').remove();
		}
	}).fail(function() {
	}).always(function() {
	});
}

function getSpecs() {
	crm("get_spec", {
		"app_id": "servier"
	}).done(function(d) {
		console.log(d);
		if(d.length) {
			var spec = jQuery('#spec');
			for(var i = 0; i < d.length; i++) {
				jQuery('<option>' + d[i] + '</option>').appendTo(spec);
			}
		}
	}).fail(function() {
	}).always(function() {
	});
}

function checkPromo(promo, app) {
	crm("check_promo", {
		"promocode": promo,
		"app_id": app,
		"device_id": navigator.appName,
// 		"device_id": navigator.userAgent,
// 		"device_id": navigator.appName,
		"device_os": navigator.platform,
		"device_model": navigator.appVersion
	}).done(function(d) {
		console.log(d);
		if(d.success) {
			getAlertsCnt(d.token);
		} else {
			setCookie('promo', promo, 0);
			location.href = ajaxurl.replace(/(\.ua)\/.+$/, '$1');
		}
	}).fail(function() {
		setCookie('promo', promo, 0);
		location.href = ajaxurl.replace(/(\.ua)\/.+$/, '$1');
	}).always(function() {
	});
}

function getSession(promo, app) {
	crm("get_session", {
		"promocode": promo,
		"app_id": app,
		"device_id": navigator.appName
	}).done(function(d) {
		console.log(d);
		if(d.success) {
			if(!getCookie('promo')) {
				setCookie('promo', JSON.stringify({app:app,code:promo}), 365);
// 				location.reload();
				location.href = ajaxurl.replace(/(\.ua)\/.+$/, '$1').replace('//', '//' + app + '.');
			} else {
				getAlertsCnt(d.token);
			}
		} else if(d.error == '121') {
			checkPromo(promo, app);
		} else {
			setCookie('promo', promo, 0);
			location.href = ajaxurl.replace(/(\.ua)\/.+$/, '$1');
		}
	}).fail(function() {
		setCookie('promo', promo, 0);
		location.href = ajaxurl.replace(/(\.ua)\/.+$/, '$1');
	}).always(function() {
	});
}

function getAlertsCnt(token) {
	crm("get_alerts_cnt", {
		"token": token,
	}).done(function(d) {
		console.log(d);
		if(d.success && d.alerts_cnt) {
			jQuery('#push').removeClass('d-none').one('click', function (e) {
				e.preventDefault();
				jQuery('#push').addClass('d-none');
				getAlerts(token);
			});
		}
	}).fail(function() {
	}).always(function() {
	});
}

function getAlerts(token) {
	crm("get_alerts", {
		"token": token,
		"offset": 0,
		"max_results": 10,
		"only_new": 1
	}).done(function(d) {
		console.log(d);
		if(d.success) {
			if(d.alerts.length) {
				var a = jQuery('#toasts');
				for(var i = 0; i < d.alerts.length; i++) {
					jQuery(`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
	<div class="toast-header"><strong class="mr-auto pr-3">` + (getLang() == 'ua' ? 'Повідомлення' : 'Сообщение') + `</strong>
		<small class="text-muted">` + (new Date(d.alerts[i].datetime)).toLocaleString() + `</small>
		<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	</div>
	<div class="toast-body">` + d.alerts[i].text + '<a class="d-block" href="' + d.alerts[i].url + '" target="_blank">Перейти</a></div></div>').toast('show').appendTo(a);
				}
			}
		} else {
			setCookie('promo', '', 0);
		}
	}).fail(function() {
	}).always(function() {
	});
}
