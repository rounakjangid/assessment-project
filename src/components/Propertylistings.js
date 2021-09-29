import * as React from 'react'

const DefaultState = {
  propertyListings: []
}

const PropertyListingsContext = React.createContext(DefaultState)

export const PropertyListingsConsumer = PropertyListingsContext.Consumer;