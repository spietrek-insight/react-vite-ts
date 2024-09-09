import { Link } from 'react-router-dom'

import { useIntl } from 'react-intl'

import { PageHeader } from '../molecules/PageHeader'

export const HomeTemplate = (): JSX.Element => {
  const intl = useIntl()

  const pageTitle = `${intl.formatMessage({ id: 'homePageTitle' })} Steve Pietrek`
  const pageSubtitle = intl.formatMessage({ id: 'homePageSubtitle' })

  return (
    <section>
      <PageHeader title={pageTitle} subtitle={pageSubtitle} />
      <div className="container mx-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="bg-slate-300 shadow-3xl w-[900px] rounded-md px-4 py-16 text-center">
            <div>
              <h1 className="mb-2">All Roles</h1>
              <Link className="btn btn-sm mb-4" to="hooks">
                Hooks Examples
              </Link>
              <Link className="btn btn-sm mb-4" to="todo">
                Atomic State Flow
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="hocs">
                HOCs
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="use-context">
                Use Context
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="composition">
                Composition
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="tuples">
                Tuples
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="calculator">
                Calculator
              </Link>
              <Link className="btn btn-sm mb-4 ml-4" to="storage">
                Local Storage
              </Link>
            </div>

            <div className="divider" />
          </div>
        </div>
      </div>
    </section>
  )
}
