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

## Variants

There are two variants of pagination buttons

<div style="display: flex; justify-content: space-between;">
<img style="border: 2px solid #999; border-radius: 5px" src="https://private-user-images.githubusercontent.com/93794696/322216675-ddc4d564-d0b9-4e21-99bb-ba45b2239273.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMjM5MzIsIm5iZiI6MTcxMzAyMzYzMiwicGF0aCI6Ii85Mzc5NDY5Ni8zMjIyMTY2NzUtZGRjNGQ1NjQtZDBiOS00ZTIxLTk5YmItYmE0NWIyMjM5MjczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDE1NTM1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI1OWJkNzI0ZTc3M2JhZjEzNTE0YjRiZDc0MTA0YTg5MDkyMjQ5Y2ZjODM1NGRkYTM5ODc0M2E5NjI1ZWNmZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pnqDGp_DU-GmLaD1KE5ISH9kjlrLLqp1zxj1C_0mqSc" alt="variant 1" width="300px" />
<img style="border: 2px solid #999; border-radius: 5px" src="https://private-user-images.githubusercontent.com/93794696/322216678-77eab2d2-1d46-498a-bcc4-73a62b1fe2b4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMjM5MzIsIm5iZiI6MTcxMzAyMzYzMiwicGF0aCI6Ii85Mzc5NDY5Ni8zMjIyMTY2NzgtNzdlYWIyZDItMWQ0Ni00OThhLWJjYzQtNzNhNjJiMWZlMmI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDE1NTM1MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjZDI2Zjk5YjE4ODdlNTU3ZTBiZTI0OGZmMGNhMDljMzQ1ODNlY2YwYTg0ZDE3NjQ1ZDc0ZTdhZjlmYWNjMjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.iEujkDnb1RWWhDMv0KF0_WOLlyhf5_WG0v3KFKm7LOY" alt="variant 2" width="300px" />
</div>

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
