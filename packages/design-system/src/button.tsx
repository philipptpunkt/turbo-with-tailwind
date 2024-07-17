export function Button({
  title,
  href,
}: {
  title: string
  href: string
}): JSX.Element {
  return (
    <a
      className="ds-text-white ds-rounded-lg ds-border ds-border-primary-700 ds-bg-primary-700 ds-px-7 ds-py-4 ds-transition-colors hover:ds-border-primary-600 hover:ds-bg-primary-700/50"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title}
    </a>
  )
}
