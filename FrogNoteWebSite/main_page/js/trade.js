// JavaScript Document
/*
'use strict'
var mediaQuery = window.matchMedia('(min-width: 1000px)');
function onSizeChanged(mediaQuery){
	if (mediaQuery.matches){
		var imageTextBlocks = document.getElementsByClassName('image_textblock');
		for(const imageTextBlock in imageTextBlocks){
			var images = imageTextBlock.getElementsByTagName('img');
			var textBlocks = imageTextBlock.getElementsByTagName('div');
			
			var div;
			var image = images[0];
			var textBlock = textBlocks[0];
			imageTextBlock.appendChild(textBlock);
			imageTextBlock.appendChild(image);
		}
	}
}

// イベントリスナーを登録
mediaQuery.addListener(onSizeChanged);
onSizeChanged(mediaQuery);*/