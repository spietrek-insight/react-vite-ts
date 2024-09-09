import React from 'react'

import { OrderList, OrderListProps } from 'primereact/orderlist'

interface CustomListProps<T>
  extends Omit<OrderListProps, 'value' | 'itemTemplate'> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export const List = <T,>({
  items,
  renderItem,
  ...rest
}: CustomListProps<T>) => (
  <OrderList
    value={items}
    itemTemplate={(item: T) => renderItem(item)}
    header="Todos"
    listStyle={{ maxHeight: '30rem' }}
    {...rest}
  />
)
