---
title: common.scss
date: 2022-08-04
tags:
 - common.scss
 - SCSS
categories:
 -  飞码篇
---


# 这个是果锅自己总结的一套 `Uniapp` 版本的 `CSS` 库，希望可以给予大家一些启发

```css
/* 默认视图  div模块 */
view {
    position: relative;
    /* 将外边距和内边距都计算到整个的盒子中 */
    box-sizing: border-box;
}
.clickbg12312312:active{
		background-color: rgba($color: #000000, $alpha: .1);
		}
.button123123:active{
		background-color: rgba($color: #fc851a, $alpha: .8);
}


@mixin textEllipsis($lineNum) {
  @if $lineNum == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lineNum; //需要显示的行数
    overflow: hidden;
    text-overflow: ellipsis;
  }
}


 .borderbottom{
	 border-bottom: 1px solid #EEEEEE!important;
 }
	
/* flex 布局模块 */
.flex {
    display: flex !important;
}
.transition{
	transition: all 1s;
}
.align-end{
	align-items: flex-end;
}
.colormt{
	color: #ff9137!important;
}
.flex1 {
    flex: 1;
}
.flexcolumn{
	flex-direction: column!important;
}

/*  flex布局的元素内部上下左右居中 */
.center {
    align-items: center;
    justify-content: center;
}
.color333{
	color: #333!important;
}
.align-start {
    align-items: flex-start!important;
}
.align-center {
    align-items: center;
}

.just-center {
    justify-content: center;
}

.wrap {
    flex-wrap: wrap;
}

// 靠两边对齐
.space-between {
    justify-content: space-between;
}
.space-around {
    justify-content: space-around;
}


// flex竖向布局
.column {
    flex-direction: column;
}

// 在flex布局的父元素中默认填满空白
.flex1 {
    flex: 1;
}

/* 左右居中 */
.marginauto {
    margin: 0 auto;
}

/* 超出显示点点点 */
.nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.height100upx{
	height: 100upx;
}
.height50upx{
	height: 50upx;
}
/* 宽度100% */
.width100 {
    width: 100%;
}

// 高度100%
.height100 {
    height: 100%;
}

// 图片大小填满父元素
.img100 {
    width: 100%;
    height: 100%;
}

// 图片填满父元素并且不重复
.img-style {
    width: 100% !important;
    height: 100% !important;
    background-repeat: no-repeat !important;
}

// 字体加粗
.fontweigth {
    font-weight: bold;
}

// 文字居中对齐
.text-center {
    text-align: center;
}
.bgcRgba08{
	background: rgba($color: #000000, $alpha: 0.8)!important;
}


// 遮罩层
.mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    background: rgba($color: #000000, $alpha: 0.6);
    transition: all 0.3s;
    animation: showmask 0.3s;
}

.transition {
    transition: all 0.3s;
}

// 隐藏遮罩层动画
.mask-hide {
    background: rgba($color: #000000, $alpha: 0.0);
}

// 页面默认铺满屏幕
.app-box {
    flex-direction: column;
    min-height: 100vh;
}

.border0 {
    border: none !important;
}



// 遮罩层显示动画
@keyframes showmask {
    from {
        background: rgba($color: #000000, $alpha: 0.0)
    }

    to {
        background: rgba($color: #000000, $alpha: 0.6);
    }
}

// 遮罩层显示动画兼容写法
@-webkit-keyframes showmask {
    from {
        background: rgba($color: #000000, $alpha: 0.0)
    }

    to {
        background: rgba($color: #000000, $alpha: 0.6);
    }
}


/* 清空默认样式 */
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
}

body {
    background: #fff;
}
.transitionAll{
	transition: all 1s;
}
.flex-start{
	align-items: flex-start;
}

// 查看更多和收起的时候可以用到的样式
.heightHidden {
    height: 360upx !important;
    overflow: hidden;
}
.color999{
	color: #999!important;
}
.color666{
	color: #666!important;
}
.colorRed{
	color: red!important;
}
.bgcfff{
	background-color: #FFFFFF!important;
}
.bgceee{
	background-color: #EEEEEE!important;
}
.bgcRed{
	background-color: #ff0000!important;
}
.bgc999{
	background-color: #999!important;
}
.bgc666{
	background-color: #666!important;
}
.bgc333{
	background-color: #333!important;
}
.bgcf8{
	background-color: #f8f8f8!important;
}
.pdl-28{
	padding-left: 28upx;
}
.pdt-10{
	padding-top: 10upx;
}
.pdl-20{
	padding-left: 20upx;
}
.pd0-20{
	padding:  0 20upx;
}
.color8080{
	color: #808080;
}
.mb0{
	margin-bottom: 0!important;
}
.lineHeight1{
	line-height: 1;
}
.lineHeight15{
	line-height: 1.5;
}
.lineHeight2{
	line-height: 2;
}
// uniapp 字体
.fsize24 {
    font-size: 24upx;
}
.fsize28{
	font-size: 28upx;
}
.textRight{
	text-align: right;
}

.mgt-50{
	margin-top: 50upx;
}
/* 内外边距模块 */
.mgl-2 {
    margin-left: 4upx;
}
.mgl-4 {
    margin-left: 8upx;
}
.mgt-10{
	margin-top: 10upx;
}
.mgt0{
	margin-top: 0;
}
.mgr-2 {
    margin-right: 4upx;
}
.mgr-6{
	margin-right: 12upx;
}
.mgl-20{
	margin-left: 20upx;
}

.mgr-20 {
    margin-right: 20rpx;
}
.mgt-2{
	margin-top: 4upx;
}
.mgt-4{
	margin-top: 8upx;
}

.mgt-20 {
    margin-top: 20rpx!important;
}
.pdl-2{
	padding-left: 4upx;
}
/* 顺时针旋转90° */
.rotate90{
	transform: rotate(45deg)!important;
}
.block{
	display: block;
}

```