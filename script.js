// JavaScript Document

window.onload = function() {
	
	"use strict";
	
	// Banner auto type
	
	var bannerHeader = document.querySelector("#banner-header").textContent.split('');
	var bannerSubheader = document.querySelector("#banner-subheader");
	var bannerBtn = document.querySelector("#banner-btn");
	
	document.querySelector("#banner-header").innerHTML = "";
	
	setTimeout(function(){
		
		autoType();
	
		setTimeout(function(){
			
			fadeElem(bannerSubheader);
			
			setTimeout(function() {
				
				fadeElem(bannerBtn);
				
			}, 500);
			
		}, 2800);
	
	}, 300);
	
	
	function fadeElem(elem) {
		
		elem.style.opacity = 1;
		
	}
	
	function autoType() {
		
		var counter = -1;
		
		setInterval(function(){	
			
			if (counter < bannerHeader.length - 1) {
				counter++;
				document.querySelector("#banner-header").innerHTML += bannerHeader[counter];
			} else {
				clearInterval();
			}
	
		}, 100);
		
	}
	
	// Stats counters functions
		
	window.onscroll = function() {
		
		// var docHeight = document.body.scrollHeight;
		var elem = document.querySelector("#stats-wrapper");
		var num1 = document.querySelector("#num1");
		var num2 = document.querySelector("#num2");
		var num3 = document.querySelector("#num3");
		
		// var i = 0;
		
		if(window.scrollY >= elem.offsetTop - elem.offsetTop / 2 - 250) {
			
			if( elem.className !== "counted" ) {	
				
				elem.className += "counted";
				count(num1);
				count(num2);
				count(num3);
			
			}
			
		}
		
		
		var elem2 = document.querySelector("#slides");
		var slideImage = document.querySelector(".slide-in-img");
		var position = document.querySelector(".slide-in-img").offsetLeft;
				
		if(window.scrollY >= elem2.offsetTop / 2 + 300) {
			
			setInterval(function() {
			
			if(position < 0) {
			
				position += 5;			
				slideImage.style.position = "relative";
				slideImage.style.left = position + "px";
			
			}
			
		}, 10);
			
		}
		
	};
	
	function count(number) {
		
		var i = 0;
		var time = 50;
				
		setInterval(function(){
				
			if( i < parseFloat(number.getAttribute("data-num")) ) {			
				i++;
				number.innerHTML = i;		
			} else {		
				clearInterval();		
			}
	
		}, time);
		
	}

};