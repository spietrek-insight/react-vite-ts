import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div
      className="bg-gray-100 flex h-screen items-center justify-center"
      data-testid="NotFoundPage"
    >
      <div className="text-center">
        <h1 className="text-gray-800 text-6xl font-bold">404</h1>
        <p className="text-gray-600 text-xl font-medium">Page Not Found</p>
        <p className="text-gray-600 mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 mt-6 inline-block rounded px-6 py-3 text-sm font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
