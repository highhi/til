import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { omit } from 'lodash-es'

interface IWrapedComponentProps<D = {}, P = {}> {
  data: D
  props: P
}

export default (query: string) => {
  return <D extends {}, P extends {}>(WrapedComponent: React.SFC<IWrapedComponentProps<D, P>>) => {
    return (props: P & { variables?: {} }) => {
      const values = omit(props, ['variables'])

      return <Query query={gql(query)} variables={props.variables}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>
          }

          if (error) {
            return <p>Error `${error.message}`</p>
          }

          return <WrapedComponent data={data} props={values} />
        }}
      </Query>
    }
  }
}