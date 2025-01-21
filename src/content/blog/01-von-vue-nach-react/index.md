---
title: "Von Vue.js zu ReactJS (V2R) – Einführung"
summary: "Ich nutze Vue.js seit der 0.8.X und so sehr ich Vue auch liebe, und sich in der Hinsicht viel getan hat, ist die Auswahl gerade in puncto UI-Komponenten begrenzt. In meinem neuen Projekt möchte ich gerne die Möglichkeiten nutzen, die uns shadcn/ui eröffnet."
date: "Jan 20 2025"
draft: false
tags:
- Vue.js
- Pinia
- Shadn/ui
- ReactJS
---

## Vue aufgeben wegen des Designs &mdash; echt jetzt?

Ja, und das mag besonders schräg klingen, weil ich die Syntax sehr mag, die Composition API brilliert, die Vue-Templates und die
Separation of Concerns mMn ideal sind. [Pinia-Stores](https://pinia.vuejs.org) und [VueUse](https://vueuse.org) sind ein Träumchen 

Sicher, wenn es um [shadcn/ui](https://ui.shadcn.com) geht, gibt den [Vue.js-Port](https://www.shadcn-vue.com). Aber die Zukunft
scheint ungewiss, weil die Entwickler offensichtlich künftig nicht mehr auf ihren Port von [Radix](https://www.radix-ui.com)
setzen, sondern auf [Reka](https://reka-ui.com/). Das muss nicht schlecht sein, doch trotzdem steht zu befürchten, dass es auch Auswirkungen auf den
Vue-Port in Sachen Feature-Parität zu shadn/ui haben wird.

Aber viel entscheidender ist, das [Eco-System](https://github.com/birobirobiro/awesome-shadcn-ui), die vielen Erweiterungen und Komponenten von unabhängigen Entwicklern, auf unbestimmte
Zeit fehlen werden.

Schauen wir nur allein auf diese drei Projekte:

- https://originui.com/
- https://21st.dev/
- https://www.kibo-ui.com/

## Du bist doch oberflächlich &mdash; oder?

Ich mag Oberflächen, die durch Minimalismus sexy sind. Aber allein deshalb wage ich keine Äffaire mit Facebooks ReactJS:

In puncto Jobsuche haben ReactJS-Entwickler die Nase nun mal vorn; egal, ob sie als Freelancer oder Angestellte auf der Suche sind.

Und letztlich möchte ich mein neues Projekt ohne Altlasten beginnen. Ich könnte aus einer Vielzahl von Komponenten und Composable wählen, die ich über
die Jahre entwickelt habe und mir auf den ersten Blick zeitsparen.  Aber da vieles noch aus den Zeiten der Options API stammte, kein Typescript kennt, ist der Neubeginn mit einen sauberen Vue-Projekt ncht viel weniger aufwendig.

## Noch ein Spoiler

In den ersten Stunden und Tagen mit ReactJS habe ich mich gefragt, ob ReactJS mir jemals – jedenfalls nüchtern - Spaß machen kann. Und nach einigen
Wochen kann ich ohne rot zu werden, sagen: Ja.


## Ist das die Geschichte?

Nein, das ist nur mein Hintergrund, mein Grund zu ReactJS zu wechseln. Im Blog werde ich einige Themen besprechen, die für einen
Vue.js.Entwickler, der frisch in seiner ReactJS-App ankommt, vielleicht ein wenig hilfreich sind und im besten Fall, lange Recherchen verzichtbar
machen.

[V2R Teil 1– Lifecycle Hooks, Computed Properties und Watcher](/blog/02-von-vue-nach-react-teil-1)