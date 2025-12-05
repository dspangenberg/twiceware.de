---
title: "V2R Teil 2– Emits, wo sind die Emits?"
summary: "Unsere Childkomponenten möchte aus dem Smäland abgeholt werden. Aber wie zum Emit?"
date: "Jan 21 2025"
draft: true
tags:
- Tutorial
- Vue.js
- ReactJS
---

## Vue

Wir haben unsere Småland-Komponente die alle Kinder im Bälleparadies enthält. Möchte ein Kind nicht
mehr mit und in Bällem schwimmen oder davor stehen, ins Bällebad zu pinkeln, können wir die Eltern
bei ihrer KROKANTTÅRTA stören und über unsere ChildrenList ausrufen.


```vue

// Småland.vue
<script setup lang="ts">
    import Child from './Child' 
  
    const children: string[] = ['Maria', 'Emma', 'Erik', 'Elias']

    const onCallParents = (name) => {
      alert(`Die/der kleine ${name} möchte aus dem Småland abgeholt werden.`)
    }
</script>
<template>
    <h1>Kinder im Småland</h1>
    <div class="gap-4">
      <Child :names="children" @callParents="onCallParents>
        Eltern von { name } ausrufen
      </Child>
    </div>
</template>
```

```vue

// Child.vue
<script setup lang="ts">
  const emit = defineEmits(['call-parents'])
    
  const props = defineProps({
    names: string[]
  })
  
</script>

<template>
  <button v-for="[child, index] in children" :key="index" @click="emit('call-parents', name)">
    {{ name }} möchte abgeholt werden
  </button>
</template>

```

## React Functional Components

React kennt von Hause aus keine Emits und löst das ganze über die Properties der Child-Komponente.

```tsx

    // Children.tsx

    interface ChildrenProps {
        names: string[]
        onCallParents: (name: string) => void
    }
    

    export const Children: React.FC<ChildrenProps> = ({ onCallParents, names, ...props }) => {     
        return (
            <div>
                {names.map(name, index) => (
                    <button onClick={onCallParents(name)}>{name}</button>
                ))}
            </div>
        )
    }
```

```tsx
    // Småland.tsx

    
    import Children from './Children'
    export const Småland: React.FC<SmålandProps> = () => {
    
        const handleCall = (name: string) => {
            alert(`Die/der kleine ${name} möchte aus dem Småland abgeholt werden.`)
        }
    
        return (
            <Children names={['Maria', 'Emma', 'Erik', 'Elias']} onCallParents={handleCall}
        )
    }
```
**Dieser Artikel ist Teil der Serie  [Von Vue.js zu ReactJS (V2R)](/blog/01-von-vue-nach-react)**
    
