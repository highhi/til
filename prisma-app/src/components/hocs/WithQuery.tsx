// import * as React from 'react'
// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'

// interface IWrappedComponentProps<D, P> {
//   data: D
//   props: P
// }

// export default (
//   query: string,
//   loadingAction?: () => any,
//   errorAction?: (error: Error) => any,
// ) => {
//   return <D extends {}, P extends {}>(WrapedComponent: React.SFC<IWrappedComponentProps<D, P>>): React.ComponentType<P> => {
//     return (props: P & { variables?: {} }) => {
//       const values = omit(props, ['variables'])

//       return <Query query={gql(query)} variables={props.variables}>
//         {({ loading, error, data }) => {
//           if (loading) {
//             return loadingAction ? loadingAction() : <p>Loading...</p>
//           }

//           if (error) {
//             return errorAction ? errorAction(error) : <p>Error `${error.message}`</p>
//           }

//           return <WrapedComponent data={data} props={values} />
//         }}
//       </Query>
//     }
//   }
// }

// export interface IWithQueryProps {
//   query: string
//   variables? : {}
// }

// const WithQuery: React.SFC<IWithQueryProps> = (props): JSX.Element => {
//   return <Query<D> query={gql(props.query)} variables={props.variables}>
//     {({ loading, error, data }) => {
//       if (loading) {
//         return <p>Loading...</p>
//       }

//       if (error) {
//         return <p>Error `${error.message}`</p>
//       }

//       return props.children(data)
//     }}
//   </Query>
// }

// export default WithQuery
