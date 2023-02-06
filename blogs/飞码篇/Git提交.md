---
title: Git提交
sidebar: auto
date: 2022-08-04
tags:
 - git
 - 笔记
categories:
 -  飞码篇
---

# 第一次需要指定用户名

```
git config --global user.name "name"
git config --global user.email "291XXXXX@qq.com"
```

## 1. git init 初始化文档

## 2. git add . 添加到暂存区

## 3. git commit -m "first commit"  提交并写名字

## 4. git remote add origin https://gitee.com/XXX  地址

## 5. git push -u origin "master"  合并主分支

# 二次提交

## 1. git add .   添加到暂存区

## 2. git commit -m "first commit"   提交并写名字

## 3. git push  提交


## git remote -v  查看当前git 指向哪里



# 其他

## git status 查看暂存区状态

## git log 查看版本日志

## git remote -v 查看本地仓库的远程仓库地址

## git remote remove origin  取消与远程仓库的连接

# Bug

## 在不慎多次提交后出现 (master|[REBASE](https://so.csdn.net/so/search?q=REBASE&spm=1001.2101.3001.7020) 1/2)，

**解决办法：**

回退提交，`git rebase --abort` ，解决