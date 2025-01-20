---
title: "Von Vue.js zu ReactJS – Teil 1 (useEffect)"
summary: "Aller Anfang kann beschwerlich sein; so auch der Umstieg von Vue.js auf ReactJS."
date: "Mar 17 2024"
draft: false
tags:
- Tutorial
- Vue.js
- ReactJS
---

## Vue

In unserem Beispiel möchten wir unsere Organisationen über den Pinia-Store abrufen. Der erste Abruf [^1] erfolgt über onMounted;
ändern sich der Query-Part unserer Route, rufen wir weitere oder gefilterte Daten über unserer Watcher ab.

Damit wir auch einen Case für computed und onUnmounted haben, holen wir uns die Zahl der Organisationen über numberOfOrgs ab und schließen
die Abfrage im Pinia-Store.



```tsx

    import { computed, onMounted, onUnmounted, watch  } from 'vue'
    import { useRoute } from 'vue-router'
    import { useOrgStore } from '@/stores/contactsStore'
    import { storeToRefs } from 'pinia'


    const orgStore = useOrgStore()
    const { orgs } = storeToRefs(orgStore)

    const route = useRoute()
    
    const query = computed(() => route.query)

    const numberOfOrgs = computed(() => orgs.value).length || 0)
    
    watch(query, async () => {
        await contactStore.getAll(query)
    }, { immediate: false })        
    
    onMounted(async () => {
        await contactStore.getAll() 
    })

    onUnmounted(() => contactStore.close())
```

## React Functional Components

Für jemanden aus der Vue-Welt wird erst einmal überraschend sein, dass wir für alle Aufgaben (computed, onMounted, onUnmounted, watch) in React bei useEffect() landen werden.

### Unser Pseudo-Store für die weiteren Beispiele


```ts
interface People {
    first_name,
    last_name
}

interface Org {
    name: string
    website: string
    people: People[]
}

const fetchOrgs = async (query: string) => {
    return await fetchFromApi<Org[]>('orgs', query)
} 

const closeStore = () => {
    closeSomething()
}

export { type People, fetchOrgs, closeStore}

```

### Definition useEffect

#### useEffect(setup, dependencies?)

Grundsätzlich wird bei useEffect der Programmcode (setup) ausgeführt, wenn sich die unter [dependencies] aufgeführten (reaktiven) Variablen geändert
haben. Er kommt damit einem Watcher in Vue am nächsten.



<a href="https://react.dev/reference/react/useEffect" target="_blank">Ausführliche Dokumentation auf react.dev</a>


```tsx
    
    import { useEffect }  from 'react'

    useEffect(async () => {
        tueWas()
    }, [varA, varB])

```

### Lifecycle

#### Programmcode beim Mounting ausführen

Möchten wir den Code direkt beim Mounten der Komponente ausführen, lassen wir die dependencies leer [].


```tsx
    
    import { useEffect }  from 'react'

    useEffect(async () => {
        tueWasWennDuGemountedBist()
    }, [])

```

### Programmcode beim Unmount ausführen

Wieder bleiben die dependencies leer und der Code der mittels return zurückgeben wird, wird beim Unmount ausgeführt:

```tsx
    
    import { useEffect }  from 'react'

    useEffect(async () => {
        return () => {
            sayGoodBye();
        }
    }, [])

```

## Computed und Watcher


### Computed Values

Möchten wir das erreichen, das uns Vue mit Computed Values bietet, nutzen wir useEffect zusammen mit useState.


```tsx

    import { useEffect, useState }  from 'react'
    
    import {type People, fetchOrg, close } from '@/stores/org'
        
    const [orgs, setOrgs ] = useState<Org[]>([])
    const [numberOfOrg, setNumberOfOrgs] = useState<number>(0)
    

    useEffect(async () => {
        setNumberOfOrgs(orgs.length)
    }, [orgs])

```

#### Watcher

Auch unsere Watcher ist ein useEffect


```tsx

    import { useEffect, useState }  from 'react'
    
    import {type People, fetchOrg, close } from '@/stores/org'
        
    const [orgs, setOrgs] = useState<Org[]>([])
    const [numberOfOrg, setNumberOfOrgs] = useState<number>(0)
    const [query, setQuery] = useState<string>('')

    
    // Ändert sich unsere Query rufen wir die gefilterten Daten ab
    useEffect(async () => {
        const orgs = await fetchOrgs(query)
        setOrgs(orgs)
    }, [query])

```

Wir beobachten orgs und wenn es sich geändert hat, setzen wir die Länge (orgs.length) über setNumberOfOrgs.

### Alles in einem


```tsx

    import { useEffect, useState }  from 'react'
    
    import {type People, fetchOrgs, close } from '@/stores/org'

    const [query, setQuery] = useState<string>('')
    const [orgs, setOrgs] = useState<Org[]>([])
    const [numberOfOrgs, setNumberOfOrgs] = useState<number>(0)


    // onMounted + onMounted
    useEffect(async () => {
        const orgs = await fetchOrgs('')
        return () => {
            close()
        }
    }, [])
    
    // computed 
    useEffect(async () => {
        setNumberOfOrgs(orgs.length)
    }, [orgs])

    
    setQuery('meier')
    
    // watch query
    useEffect(async () => {
        const orgs = await fetchOrgs()
        setOrgs(orgs)
    }, [query])

```

### Fußnoten

[^1]: Wir könnten die ersten Daten natürlich auch über eine sofortige Reaktion vom Server holen. Aber dann hätte onMounted nichts zu tun. 
