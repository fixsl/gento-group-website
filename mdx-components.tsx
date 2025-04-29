import { type MDXComponents as MDXComponentsType } from 'mdx/types'
import { MDXComponents } from './src/components/MDXComponents'

// import { MDXComponents } from '@/components/MDXComponents'

export function useMDXComponents(components: MDXComponentsType) {
  return {
    ...components,
    ...MDXComponents,
  }
}
