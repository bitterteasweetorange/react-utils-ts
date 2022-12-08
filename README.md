# Install

```
yarn add react-utils-ts
```

# Documentation

## useIO

alternative to useState

```
const open = useIO(false)

const handleClick = () => {
  open.onChange(!open.value)
}
```
