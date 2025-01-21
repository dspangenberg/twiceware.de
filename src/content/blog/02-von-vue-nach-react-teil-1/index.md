---
title: "V2R Teil 1– Lifecycle Hooks, Computed Properties und Watcher"
summary: "Zumindest wenn es um React Functional Components geht, wirst Du um useEffect nicht herum kommen, wenn Du Lifecycle Hooks, Computed Properties und Watcher
benötigst."
date: "Jan 21 2025"
draft: false
tags:
- Tutorial
- Vue.js
- ReactJS
---

**Dieser Artikel ist Teil der Serie  [Von Vue.js zu ReactJS (V2R) – Einführung](/blog/01-von-vue-nach-react)**

## Lifecycle Hooks, Computed Properties und Watcher




Wir möchten wie in unserem kleinen Vue-Beispiel auch in unserer React-Anwendung mit Lifecycle Hooks, Computed Properties und Watcher arbeiten.

In unserem Beispiel rufen wir unsere Organisationen über einen Pinia-Store ab. Der erste Abruf [^1] erfolgt über onMounted;
ändert sich der Query-Part unserer Route, rufen wir weitere oder gefilterte Daten über unserer Watcher ab.

Damit wir auch einen Case für computed und onUnmounted haben, holen wir uns die Zahl der Organisationen über numberOfOrgs ab und schließen
die Abfrage im Pinia-Store.


### Vue-Beispiel

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

In ReactJS benötigen wir dafür (fast) außschließlich unsere neuen Freund useEffect().





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

export { type Org, fetchOrgs, closeStore}

```

## Definition useEffect

### useEffect(setup, dependencies?)

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

### Programmcode beim Mounting ausführen

Möchten wir den Code direkt nach dem Mounten der Komponente ausführen, lassen wir die dependencies leer [].


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

Möchten wir das erreichen, das uns Vue mit Computed Properties bietet, nutzen wir useEffect zusammen mit useState.


```tsx

    import { useEffect, useState }  from 'react'
    
    import {type Org, fetchOrg, close } from '@/stores/org'
        
    const [orgs, setOrgs ] = useState<Org[]>([])
    const [numberOfOrg, setNumberOfOrgs] = useState<number>(0)
    

    useEffect(() => {
        setNumberOfOrgs(orgs.length)
    }, [orgs])

```

#### Watcher

Auch unser Watcher ist ein useEffect


```tsx

    import { useEffect, useState }  from 'react'
    
    import {type Org, fetchOrg, close } from '@/stores/org'
        
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
    
    import {type Org, fetchOrgs, close } from '@/stores/org'

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
