# @astrum-ui/paginate

Introducing Astrum-UI/Paginate: A versatile React component for creating paginated lists with ease.

## Installation

```
npm install --save @astrum-ui/paginate
```

or access the [complete suite](https://www.npmjs.com/package/@astrum-ui/core) of components

```
npm install --save @astrum-ui/core
```

## Usage

#### Basic example

```jsx
import Paginate from @astrum-ui/paginate
import { useState } from 'react'

const Card = ({ cardData }) => {
  return (
    <div>
      <p>{cardData.name}</p>
    </div>
  )
}

export default function HelloModal() {
 const [data, setData] = useState([
  { name: 'Card 1' },
  { name: 'Card 2' },
  { name: 'Card 3' },
 ])

 return (
  <Paginate
    items={data}
    itemsPerPage={2}
    renderItem={(item, index) => <Card key={index} cardData={item} >}
  />
 )
}

```

#### More examples

- [Blog Cards](https://stackblitz.com/edit/vitejs-vite-z8kb2c?file=src%2FApp.tsx)

## Options

Here's a list of all the options available to customize this component according to your need

<span>`* for required`</span>
<span>`- for any value of specified type`</span>

| Name            |   Type   | Default Value |                               Available Values                               | Description                                                                                                |
| --------------- | :------: | :-----------: | :--------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------- |
| items \*        |  array   |      []       |                                      -                                       | An array of items to be paginated                                                                          |
| itemsPerPage \* |  number  |      10       |                                      -                                       | Number of items to display per page                                                                        |
| renderItem \*   | callback |  () => <></>  |                                      -                                       | Callback function that renders each item in the pagination. Defaults to an empty JSX element               |
| onNoItem        | callback | () => No item |                                      -                                       | Callback function called when there are no items to display                                                |
| variant         |  number  |       1       |                                     1, 2                                     | The variant of pagination style to use. Can be either 1 or 2                                               |
| activePage      |  number  |       1       |                                      -                                       | To set active page number at any time                                                                      |
| onPageChange    | callback |   () => {}    |                                      -                                       | A callback function called when the active page changes                                                    |
| styles          |  object  |      {}       | { `container: {}`, `button: {}`, `buttonContainer: {}`, `activeButton: {}` } | custom styles for different parts of the pagination component. `activeButton` will be applied in variant 2 |
| classNames      |  object  |      {}       |           { `container: ""`, `button: ""`, `buttonContainer: ""` }           | custom classes for different parts of the pagination component                                             |
