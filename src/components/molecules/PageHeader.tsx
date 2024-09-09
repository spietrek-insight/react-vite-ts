type PageHeadingProps = {
  title: string
  subtitle?: string | null
}

export const PageHeader: React.FC<PageHeadingProps> = ({
  title,
  subtitle = null,
}) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-bold text-primary">{title}</h1>

      {subtitle && (
        <h2 className="text-gray-800 mt-1 text-base font-bold">{subtitle}</h2>
      )}
    </div>
  )
}
